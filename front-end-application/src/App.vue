<template>
  <div id="app">
    <v-app>
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-footer color="transparent" class="footer">
        <v-row no-gutters>
          <v-col class="sobre-projeto" :cols="6">
            <a href="#">Sobre o projeto</a>
          </v-col>
          <v-col class="icones" :cols="4">
            <v-btn v-for="icone in iconesRodape" :key="icone" class="mx-4" icon>
              <a :href="icone.url">
                <v-icon size="36px">{{ icone.icone }}</v-icon>
              </a>
            </v-btn>
          </v-col>
          <v-col class="curso-instituicao" :cols="2">
            POO3 FEAN - &copy; {{ new Date().getFullYear() }}
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    iconesRodape: [
      {
        alt: "LinkedIn",
        icone: "mdi-linkedin-box",
        url: "https://www.linkedin.com/in/daniloaalmeida/"
      },
      {
        alt: "GitHub",
        icone: "mdi-github-circle",
        url: "https://github.com/danilo-aalmeida/encomendado"
      }
    ]
  })
};
</script>

<style lang="scss">
.footer {
  height: 50px;

  font-family: Roboto;
  font-style: normal;
  color: #006ea8 !important;
}

.footer a {
  text-decoration: none;
  height: 100%;
  color: #006ea8 !important;
}

.footer .sobre-projeto {
  display: flex;
  align-items: center;
  justify-content: start;
}

.icones {
  // display: flex;
  display: -webkit-box;
  align-items: center;
  justify-content: end;
}

.footer .curso-instituicao {
  display: flex;
  align-items: center;
  justify-content: end;
}

.v-icon {
  color: #006ea8 !important;
}
</style>
