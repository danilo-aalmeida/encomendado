<template>
  <div id="home">
    <home-nav-bar />
    <home-menu-bar />
  </div>
</template>

<script>
import NavBar from "./components/a-nav-bar/";
import MenuBar from "./components/b-menu-bar/";

export default {
  name: "Home",
  components: {
    "home-nav-bar": NavBar,
    "home-menu-bar": MenuBar
  }
};
</script>

<style scoped>
#home {
  height: 100%;
  display: block;
  background-image: url("../../assets/bg-principal.jpg");
  background-size: cover;
}
</style>
