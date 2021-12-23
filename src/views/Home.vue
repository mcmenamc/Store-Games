<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <v-carousel
      continuous
      dark
      height="89vh"
      hide-delimiters
      show-arrows-on-hover
      
   
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        eager
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
     


    <!-- <v-responsive class="overflow-y-auto primary" max-height="150">
      <v-responsive class="text-center pa-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
        dignissimos? Nisi quibusdam magni sed. Explicabo vero, labore dolores
        voluptatibus ipsa soluta aliquid. Dicta repudiandae nam id? Velit libero
        tenetur voluptate! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. A minus tempora nesciunt sequi quidem et laborum laudantium
        repudiandae iste velit quaerat laboriosam culpa odit qui, doloribus
        natus adipisci nihil cupiditate. Lorem iping elit. Est architecto
        accusantium cum nisi animi, pariatur quidem praesentium iusto
        exercitationem sint voluptatum omnis perferendis debitis nesciunt,
        corporis eveniet non vel cupiditate. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Laborum ea commodi iusto id asperiores,
        sint similique. Nam sed maiores distinctio minima fugiat quibusdam, eum
        eius inventore, dicta illo tempore modi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repudiandae, distinctio velit numquam aut
        voluptates fuga temporibus perspiciatis dolores vel! Impedit libero
        veniam ipsam doloremque! Quisquam porro error quam ipsa necessitatibus.
      </v-responsive>
    </v-responsive> -->
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          src: "https://www.xtrafondos.com/wallpapers/call-of-duty-warzone-2021-7336.jpg",
        },
        {
          src: "https://www.xtrafondos.com/wallpapers/fortnite-jonesy-3753.jpg",
        },
        {
          src: "https://www.xtrafondos.com/wallpapers/call-of-duty-mobile-4007.jpg",
        },
        {
          src: "https://www.xtrafondos.com/wallpapers/tom-clancy-s-rainbow-six-siege-crimson-heist-7401.jpg",
        },
        {
          src: "https://fondosmil.com/fondo/40159.jpg",
        },
      ],
    };
  },
  components: {
  },
  
};
</script>
<style scoped>

</style>
