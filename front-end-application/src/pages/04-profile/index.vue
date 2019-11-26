<template>
  <div id="profile">
    <div>
      <home-nav-nar />
    </div>
    <div id="content">
      <home-menu-bar />
      <div id="content-area"></div>
    </div>
  </div>
</template>
<script>
import NavBar from "../../components/a-nav-bar";
import MenuBar from "../../components/b-menu-bar/";

export default {
  name: "Profile",
  components: {
    "home-nav-bar": NavBar,
    "home-menu-bar": MenuBar
  },
  data: () => ({})
};
</script>

<style scoped>
#profile {
  height: 100%;
  display: block;
  background-image: url("../../assets/bg-principal.jpg");
  background-size: cover;
}
#content {
  display: flex;
  justify-content: center;
}

#content-area {
  margin-top: 10px;
  margin-left: 10px;
  min-height: 570px;
  background: rgba(255, 255, 255, 0.93);
  border-radius: 10px;
}
</style>
