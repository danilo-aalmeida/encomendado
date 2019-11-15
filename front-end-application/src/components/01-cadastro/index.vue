<template>
  <div class="tela-cadastro">
    <v-container>
      <v-card no-gutters class="card-cadastro">
        <div class="header-card">
          <v-card-title class="titulo-card">Cadastro</v-card-title>
        </div>
        <div class="conteudo-card">
          <v-card-actions>
            <form class="formulario">
              <div class="nome-data">
              <v-text-field
                v-model="nome"
                label="Nome"
                prepend-icon="mdi-emoticon-excited-outline"
                required
              ></v-text-field>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Data de Nascimento"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="date"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
              </div>
              <div class="e-mail-senha">
              <v-text-field
                v-model="email"
                label="E-mail"
                prepend-icon="mdi-email"
                required
              ></v-text-field>
              <v-text-field
                v-model="senha"
                label="Senha"
                prepend-icon="mdi-lock-outline"
                required
              ></v-text-field>
              <v-text-field
                v-model="confirmacaoSenha"
                label="Confirmar Senha"
                prepend-icon="mdi-lock-outline"
                required
              ></v-text-field>
              </div>
              <div class="botoes">
                <v-btn class="confirmar" outlined text>
                  CONFIRMAR
                </v-btn>
                <v-btn class="cancelar" outlined text>
                  CANCELAR
                </v-btn>
              </div>
            </form>
          </v-card-actions>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Cadastro",
  data: () => ({
    email: "",
    senha: "",
    confirmacaoSenha: "",
    date: null,
    menu: false
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    }
  }
};
</script>

<style lang="scss">
  #app .tela-cadastro {
    background-image: url("../../assets/background-cadastro.jpg");
    background-size: cover;
    width: 100%;
    margin: inherit;
  }

  .card-cadastro{
    position: relative;
    width: 730px;
    height: 600px;
    margin: auto;
  }

  .card-cadastro .header-card{
    display: flex;
    width: 648px;
    height: 150px;
    margin: auto;

    background: linear-gradient(90deg, #006EA8 0%, #192C40 100%);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.12), 0px 5px 15px rgba(0, 0, 0, 0.5);
    border-radius: 3px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }

.header-card .titulo-card{
  margin: auto;
  
}

.card-cadastro .conteudo-card{
  width: 730px;
}

.conteudo-card .formulario{
  margin: auto;
}

.formulario .botoes .confirmar{
  width: 100px;
  height: 40px;

  background: #006EA8;
  box-shadow: 0px 2px 4px rgba(0, 110, 168, 0.25);
  border-radius: 3px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
}

.formulario .botoes .cancelar{
  width: 100px;
  height: 40px;

  background: #006EA8;
  box-shadow: 0px 2px 4px rgba(0, 110, 168, 0.25);
  border-radius: 3px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
}

</style>
