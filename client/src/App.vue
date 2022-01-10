<template>
  <v-app>
    <div id="preloader"></div>
    <!-- Navigation-Drawe -->
    <Navigation-drawer />
    <!---Header -->

    <v-main>
      <v-container fluid>
        <XyzTransition
          appear
          xyz="fade in-left-100% out-right-100%"
          mode="out-in"
        >
          <router-view></router-view>
        </XyzTransition>
      </v-container>
    </v-main>
    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    NavigationDrawer,
    Footer,
  },
  mounted() {
     var loader = document.getElementById("preloader");
    window.addEventListener("load", () => {
      loader.style.display = "none";
    });

  },
  

};
</script>
<style >
#preloader {
  background: #2a2826 url(assets/images/preloader.jpg) no-repeat center center;
  background-size: 16%;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 100;
}
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital@1&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital@1&family=Secular+One&display=swap");
* {
  font-family: "Fira Sans", sans-serif;
}
html::-webkit-scrollbar {
  width: 8px;
  background: #121212;
}
html::-webkit-scrollbar-thumb {
  background-color: rgb(41, 39, 39);
  border-radius: 10px;
}
html::-webkit-scrollbar-thumb:hover {
  background-color: rgba(105, 105, 105, 0.7);
}
.fontPerma {
  font-family: "Permanent Marker", cursive;
}
.font-family-secular-one {
  font-family: "Fira Sans", sans-serif;
  font-family: "Secular One", sans-serif;
}
div::-webkit-scrollbar {
  width: 8px;
  background: #353535;
}
div::-webkit-scrollbar-thumb {
  background-color: rgba(133, 133, 133, 0.7);
  border-radius: 10px;
}
</style>