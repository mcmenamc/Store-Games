<template>
  <div id="center">
    <v-card class="d-flex align-center justify-center" flat height="90vh" tile>
        <div class="cuatro "></div>
        <div class="circulo "></div>
        <div class="cuatro "></div>
    </v-card>
    <div
      class="
        text-error text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4
        d-flex
        justify-center
      "
    >
      <strong class="error--text font-family-secular-one">ERROR </strong>&nbsp;
      <span class="font-family-secular-one"> Pagina no encontrada</span>
      &nbsp;

      <router-link class="info--text font-family-secular-one" to="/">
        Ir Home</router-link
      >
    </div>


    <XyzTransition xyz="fade-75%">
  <div class="square" v-if="animate"></div>
</XyzTransition>


  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    
  },
};
</script>

<style  scoped>

@media (min-width: 1264px) {
  .cuatro {
    width: 8vh;
    height: 23vh;
    background-color: rgb(77, 81, 87);
    position: relative;
  }
  .cuatro::after {
    content: "";
    position: absolute;
    top: -14.9vh;
    left: -12.9vh;
    width: 100%;
    height: 115%;
    background-color: rgb(77, 81, 87);

    transform: rotate(25deg);
  }
  .cuatro::before {
    content: "";
    position: absolute;
    top: -3.5vh;
    left: -6vh;
    width: 100%;
    height: 140%;
    background-color: rgb(77, 81, 87);

    transform: rotate(90deg);
  }

  .circulo {
    width: 35vh;
    height: 41vh;
    border-radius: 50%;
    border: 7.5vh solid #ef5860;
    position: relative;
    top: -8vh;
    /* left: 10vh; */
    margin: 0px 20vh 0px 8vh;
  }
  .circulo::after {
    content: "";
    position: absolute;
    /* top: -14.9vh; */
    /* left: 12.9vh; */
    /* right: -0.5vh; */
    right: 8vh;
    width: 35%;
    height: 100%;
    transform: rotate(-42deg);
    background-color: #ef5860;
  }
  .text-error {
    position: relative;
    top: -28vh;
  }
  
}
</style>
