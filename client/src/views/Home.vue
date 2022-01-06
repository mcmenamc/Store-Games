<template>
  <div>
    <v-carousel
      dark
      cycle
      height="100vh"
      hide-delimiters
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        eager
        :src="item.src"
        class="subheading "
        :contain="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.sm ? false : true"
       
      ></v-carousel-item>
    </v-carousel>


    <Card/>
    
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
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
        {
          src: "https://www.xtrafondos.com/wallpapers/fortnite-jonesy-3753.jpg",
        },
      ],
    };
  },
  components: {
    Card,
  },
  
  
};
</script>
<style scoped>

</style>
