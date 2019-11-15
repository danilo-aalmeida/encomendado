<template>
  <div class="tela-login">
    <v-container>
      <v-card class="card-login">
        <div class="header-card">
          <v-card-title class="titulo-card">Login</v-card-title>
        </div>
        <div class="conteudo-card">
          <v-card-actions>
            <v-form class="formulario"  v-model="valid" @keyup.native.enter="submit" lazy-validation>
              <v-text-field
                v-model="user.email"
                :rules="userRules.emailRules"
                label="E-mail"
                prepend-icon="mdi-email"
                required
              ></v-text-field>
              <v-text-field
                v-model="user.password"
                :append-icon="invisibility ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append="() => (invisibility = !invisibility)"
                :type="invisibility ? 'password' : 'text'"
                :rules="userRules.passwordRule"
                label="Senha"
                prepend-icon="mdi-lock-outline"
                required
              ></v-text-field>
              <div class="botoes">
                <v-row>
                  <v-col>
                    <v-btn @click="submit" class="logar-se" outlined text>
                      LOGAR-SE
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn :to="acaoCadastro" class="cadastrar" outlined text>
                      CADASTRAR
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <a class="esqueci-senha">Esqueci a senha</a>
                </v-row>
              </div>
            </v-form>
          </v-card-actions>
          <v-snackbar
            :timeout="6000"
            :bottom="true"
            v-model="snackbar">
              Usuário ou senha incorretos!
            <v-btn flat color="red" @click.native="snackbar = false">Fechar</v-btn>
          </v-snackbar>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return{
      valid: true,
      invisibility: true,      
      snackbar: false,
      user: {
        email: '',
        password: '',
      },
      userRules: {
        emailRules: [
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(v) || 'E-mail inválido!'
        ],
        passwordRule: [
          v => !!v || 'Senha é obrigatória!'
        ]
      },
      acaoCadastro: '/cadastro'
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.$auth.login({
          body: JSON.stringify(this.user),
          success: function (response) {
            localStorage.token = response.body.data.token
          },
          error: function () {
            delete localStorage.token
            this.snackbar = true
          },
          rememberMe: true,
          redirect: '/home'
        })
      }
    },
  }
};
</script>

<style lang="scss">
#app .tela-login {
  background-image: url("../../assets/background-login.jpg");
  background-size: cover;
  width: 100%;
  margin: inherit;
}

.card-login {
  display: flex;
  position: relative;
  width: 365px;
  height: 413px;
  margin: auto;
  margin-top: 100px;
}

.card-login .header-card {
  display: flex;
  width: 324px;
  height: 150px;
  margin: auto;

  background: linear-gradient(90deg, #006ea8 0%, #192c40 100%);
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.12), 0px 5px 15px rgba(0, 0, 0, 0.5);
  border-radius: 3px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
}

.header-card .titulo-card {
  margin: auto;
}

.card-login .conteudo-card {
  width: 365px;
}

.conteudo-card .formulario{
  margin: auto;
}

.formulario .botoes .logar-se{
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

.formulario .botoes .cadastrar{
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

.formulario .botoes .esqueci-senha{
  width: 87px;
  height: 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 24px;
  /* identical to box height, or 240% */

  display: flex;
  align-items: center;
  letter-spacing: 0.16px;
  text-transform: uppercase;
  font-feature-settings: 'pnum' on, 'lnum' on;

  color: #006EA8;
}

</style>
