<template>
  <div>
    <div class="container">
      <!--NavBar-->
      <div class="row">
        <profile-nav-bar style="width: 100%"/>
      </div>
      <!--Content-->
      <profile-content/>
    </div>
  </div>
</template>

<script>
  import ProfileNavBar from "./profileChildcomponents/ProfileNavBar";
  import ProfileContent from "./profileChildcomponents/ProfileContent";
  export default {
    name: "Profile",
    components:{
      ProfileContent,
      ProfileNavBar
    },
  }
</script>

<style scoped>

</style>
