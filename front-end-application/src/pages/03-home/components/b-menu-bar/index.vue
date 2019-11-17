<template>
  <div id="core">
    <div id="menu-bar">
      <v-card>
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-avatar>
                <v-img src=""></v-img>
                <!--Imagem do Usuário-->
              </v-list-item-avatar>
              <v-list-item-title>Fulano de Tal</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list>
            <v-list-item>
              <v-list-item-subtitle>
                Suporte
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
          <v-list dense nav>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>{{ suport.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ suport.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>
    <div id="content-area">
      <content-area />
    </div>
  </div>
</template>

<script>
import ContentArea from "./content/";

export default {
  name: "MenuBar",
  components: {
    "content-area": ContentArea
  },
  data() {
    return {
      items: [
        { title: "Encomendas", icon: "mdi-view-dashboard-outline" },
        { title: "Perfil", icon: "mdi-account-outline" }
      ],
      suport: { title: "Fale Conosco", icon: "mdi-face-agent" }
    };
  }
};
</script>

<style scoped>

#core{
  display: flex;
}

#content-area{
  min-width: 80%;
  overflow:hidden;
}

#menu-bar {
  margin-top: 10px;
  margin-left: 10px;
}

#menu-bar .v-card {
  width: 255px;
  height: 100%;
  max-width: none;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 36.02%;

  background: #ffffff;
  border: 1px solid rgba(63, 63, 68, 0.005);
  box-shadow: 0px 1px 3px rgba(63, 63, 68, 0.15),
    0px 1px 0px rgba(63, 63, 68, 0.05);
  border-radius: 10px;
}
</style>
