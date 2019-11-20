<template>
  <div id="encomendas">
    <v-template>
      <v-toolbar flat>
        <v-toolbar-title>Encomendas</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisar encomendas..."
          sigle-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn class="nova-encomenda" v-on="on" outlined
              >Nova Encomenda</v-btn
            >
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-divider class="mx-4" inset></v-divider>
            <v-card-text>
              <v-col cols="12">
                <v-text-field
                  v-model="editedEncomenda.codigoRastreio"
                  label="Código de Rastreio"
                  id="codigo-rastreio"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="editedEncomenda.name"
                  label="Nome"
                  id="nome-encomenda"
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="editedEncomenda.postDate"
                  label="Data de Postagem"
                  id="data-postagem"
                  outlined
                  disabled
                ></v-text-field>
                <v-text-field
                  v-model="editedEncomenda.status"
                  label="Status"
                  id="status-encomenda"
                  outlined
                  disabled
                ></v-text-field>
              </v-col>
            </v-card-text>
            <v-card-actions>
              <v-row :class="`justify-space-around`">
                <v-btn text @click="save">Salvar</v-btn>
                <v-btn text @click="close">Cancelar</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </v-template>
    <v-data-table
      :headers="headers"
      :items="encomendas"
      :search="search"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      :items-per-page="5"
      item-key="codigoRastreio"
      show-expand
      class="elevation-1"
    >
      <template v-slot:item.action="{ encomenda }">
        <v-icon small @click="editEncomenda(encomenda)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteEncomenda(encomenda)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:expanded-item="{ headers }">
        <td :colspan="headers.length">
          <v-timeline>
            <v-timeline-item
              v-for="ocorrencia in encomendas.ocorrencias"
              :key="ocorrencia"
              small
            >
              <template v-slot:opposite>
                <span v-text="ocorrencia.date"></span>
                <span v-text="ocorrencia.time"></span>
              </template>
              <span v-text="ocorrencia.description"></span>
            </v-timeline-item>
          </v-timeline>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template></v-data-table
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    search: "",
    expanded: [],
    singleExpand: true,
    dialog: false,
    headers: [
      {
        text: "Código de Rastreio",
        align: "left",
        sortable: false,
        value: "codigoRastreio"
      },
      { text: "Nome", value: "name" },
      { text: "Data Postagem", value: "postDate" },
      { text: "Status", value: "status" },
      { text: "Ações", sortable: false, value: "action" },
      { text: "Histórico", sortable: false, value: "data-table-expand" }
    ],
    encomendas: [],
    editedIndex: -1,
    editedEncomenda: {
      codigoRastreio: "",
      name: "",
      postDate: "",
      status: "",
    },
    defaultEncomenda: {
      codigoRastreio: "",
      name: "",
      postDate: "",
      status: "",
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nova Encomenda" : "Editar Encomenda";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.encomendas = [
        {
          codigoRastreio: "OH6565646464",
          name: "Notebook",
          ocorrencias: [
            {
              date: "22/10/2019",
              time: "14:16",
              localState: "FLORIANOPOLIS / SC",
              description: "Objeto entregue ao destinatário",
              detail: " "
            },
            {
              date: "22/10/2019",
              time: "09:46",
              localState: "FLORIANOPOLIS / SC",
              description: "Objeto saiu para entrega ao destinatário",
              detail: " "
            },
            {
              date: "21/10/2019",
              time: "09:31",
              localState: "SAO JOSE / SC",
              description: "Objeto encaminhado",
              detail: " "
            },
            {
              date: "18/10/2019",
              time: "17:26",
              localState: "CURITIBA / PR",
              description: "Objeto encaminhado",
              detail: " "
            },
            {
              date: "18/10/2019",
              time: "17:24",
              localState: "CURITIBA / PR",
              description: "Fiscalização Aduaneira finalizada",
              detail: " "
            },
            {
              date: "18/10/2019",
              time: "12:55",
              localState: "CURITIBA / PR",
              description: "Objeto recebido pelos Correios do Brasil",
              detail: " "
            },
            {
              date: "11/10/2019",
              time: "00:47",
              localState: "null / null",
              description: "Objeto encaminhado",
              detail: " "
            },
            {
              date: "11/10/2019",
              time: "00:47",
              localState: "null / null",
              description: "Objeto postado",
              detail: " "
            }
          ]
        },
        {
          codigoRastreio: "BR8949864198",
          name: "Celular",
          ocorrencias: [
            {
              date: "22/10/2019",
              time: "14:16",
              localState: "FLORIANOPOLIS / SC",
              description: "Objeto entregue ao destinatário",
              detail: " "
            },
            {
              date: "22/10/2019",
              time: "09:46",
              localState: "FLORIANOPOLIS / SC",
              description: "Objeto saiu para entrega ao destinatário",
              detail: " "
            },
            {
              date: "21/10/2019",
              time: "09:31",
              localState: "SAO JOSE / SC",
              description: "Objeto encaminhado",
              detail: " "
            },
            {
              date: "18/10/2019",
              time: "17:26",
              localState: "CURITIBA / PR",
              description: "Objeto encaminhado",
              detail: " "
            },
            {
              date: "18/10/2019",
              time: "17:24",
              localState: "CURITIBA / PR",
              description: "Fiscalização Aduaneira finalizada",
              detail: " "
            },
            {
              date: "18/10/2019",
              time: "12:55",
              localState: "CURITIBA / PR",
              description: "Objeto recebido pelos Correios do Brasil",
              detail: " "
            },
            {
              date: "11/10/2019",
              time: "00:47",
              localState: "null / null",
              description: "Objeto encaminhado",
              detail: " "
            },
            {
              date: "11/10/2019",
              time: "00:47",
              localState: "null / null",
              description: "Objeto postado",
              detail: " "
            }
          ]
        }
      ];
    },
    editEncomenda(encomenda) {
      this.editedIndex = this.encomendas.indexOf(encomenda);
      this.editedEncomenda = Object.assign({}, encomenda);
      this.dialog = true;
    },
    deleteEncomenda(encomenda) {
      const index = this.encomendas.indexOf(encomenda);
      confirm("Você esta certo que deseja deletar a encomenda?") &&
        this.encomendas.splice(index, 1);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedEncomenda = Object.assign({}, this.defaultEncomenda);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.encomendas[this.editedIndex], this.editedEncomenda);
      } else {
        this.encomendas.push(this.editedEncomenda);
      }
      this.close();
    }
  }
};
</script>

<style scoped>
/* #encomenda {
  
} */

.v-toolbar {
  border-radius: 10px;
}

.nova-encomenda {
  height: 40px !important;
  width: 175px;

  background: #006ea8;
  box-shadow: 0px 2px 4px rgba(0, 110, 168, 0.25);
  border-radius: 3px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
}

.v-card__text {
  padding: 0 24px 0px !important;
}

.v-card__actions .v-btn {
  height: 40px !important;
  width: 150px;

  background: #006ea8;
  box-shadow: 0px 2px 4px rgba(0, 110, 168, 0.25);
  border-radius: 3px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
}
</style>
