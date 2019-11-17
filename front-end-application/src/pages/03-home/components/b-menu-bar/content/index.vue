<template>
  <div id="content">
    <content-encomendas />
  </div>
</template>

<script>
import Encomendas from "./I-encomendas/";
import UserProfile from "./II-user-profile/";

export default {
  name: "ContentArea",
  components: {
    "content-encomendas": Encomendas,
    "content-user-profile": UserProfile
  }
};
</script>

<style scoped>
#content {
  margin-top: 10px;
  margin-left: 10px;
  min-height: 570px;
  background: rgba(255, 255, 255, 0.93);
  border-radius: 10px;

}
</style>
