<template>
  <div id="app">
    <v-container>
      <v-app>
        <router-view></router-view>
        <v-col cols="12">
          <v-footer class="font-weight-medium" padless>
            <v-row :align="alignment" :justify="space-around">
              <v-col cols="3" sm="1">
                <v-btn class="ma-2" outlined color="indigo">Sobre o projeto</v-btn>
              </v-col>
              <v-col cols="3" sm="1">
                <v-btn v-for="icone in iconesRodape" :key="icone" class="mx-4" icon>
                  <a :href="icone.url">
                    <v-icon size="24px">{{ icone.icone }}</v-icon>
                  </a>
                </v-btn>
              </v-col>
              <v-col cols="3" sm="1">
                <div>&copy; {{ new Date().getFullYear() }}</div>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
          </v-footer>
        </v-col>
      </v-app>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    iconesRodape: [
      {
        alt: "LinkedIn",
        icone: "../../assets/icons/linkedin-logo.svg",
        url: "https://www.linkedin.com/in/daniloaalmeida/"
      },
      {
        alt: "GitHub",
        icone: "../../assets/icons/github-logo.svg",
        url: "https://github.com/danilo-aalmeida/encomendado"
      }
    ]
  })
};
</script>
