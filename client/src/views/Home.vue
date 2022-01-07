<template>
  <div>
    <v-carousel
      dark
      cycle
      :height="this.$vuetify.breakpoint.xs ?  'auto':'120vh' "
      hide-delimiters
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        eager
        :src="'carousel/' + item"
        class="subheading"
        contain
      ></v-carousel-item>
        <!-- :contain="vuet$ify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.sm ? false: true " -->
    </v-carousel>
     

    <Card />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  data() {
    return {
      items: ["image1.jpg", "image2.jpg", "image3.jpg"],
    };
  },
  components: {
    Card,
  },
   
};
</script>
<style scoped>
</style>
