<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <v-carousel show-arrows-on-hover>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        
      ></v-carousel-item>
    </v-carousel>

    <HelloWorld msg="Welcome to Your Vue.js App" />

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
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          src: "https://www.xtrafondos.com/wallpapers/call-of-duty-warzone-2021-7336.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
</style>
