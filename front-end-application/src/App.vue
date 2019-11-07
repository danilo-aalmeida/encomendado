import { mdiLinkedinBox } from '@mdi/js';
<template>
  <div id="app">
    <v-container>
      <v-app>
        <router-view></router-view>
      </v-app>

      <v-footer 
      class="font-weight-medium"
      dark
      padless>
        <v-row>
          <v-col cols="12" sm="3">
            <v-btn text icon color="white">
              <v-icon>mdi-mdiLinkedinBox</v-icon>
            </v-btn>

          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<!---
<style lang="text/css">
  v-app{
    opacity:.6;
	background-color: #FFFFFF;
  }
</style>
--->
