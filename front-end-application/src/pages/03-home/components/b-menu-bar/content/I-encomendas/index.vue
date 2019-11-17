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
            <v-btn class="nova-encomenda" v-on="on">Nova Encomenda</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedEncomenda.codigoRastreio"
                      label="Código de Rastreio"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedEncomenda.name"
                      label="Nome"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedEncomenda.postDate"
                      label="Data de Postagem"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedEncomenda.status"
                      label="Status"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="close">Cancelar</v-btn>
              <v-btn text @click="save">Salvar</v-btn>
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
        <td :colspan="headers.length">Histórico da Encomenda</td>
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
      status: ""
    },
    defaultEncomenda: {
      codigoRastreio: "",
      name: "",
      postDate: "",
      status: ""
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
          postDate: "01/10/2019",
          status: "Teste"
        },
        {
          codigoRastreio: "BR8949864198",
          name: "Celular",
          postDate: "10/11/2019",
          status: "Teste 2"
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
/* #encomenda{

} */
</style>
