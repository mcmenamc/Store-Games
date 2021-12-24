<template>
  
      <v-row dense class="d-flex justify-center mt-5">
          
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          :md="card.flex"
          cols="12"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="270px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>fas fa-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>fas fa-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>fas fa-share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Pre-fab homes",
          src: "https://www.xtrafondos.com/wallpapers/call-of-duty-warzone-2021-7336.jpg",
          flex: 4,
        },
        {
          title: "Favorite road trips",
          src: "https://www.xtrafondos.com/wallpapers/fortnite-jonesy-3753.jpg",
          flex: 3,
        },
        {
          title: "Best airlines",
          src: "https://www.xtrafondos.com/wallpapers/call-of-duty-mobile-4007.jpg",
          flex: 4,
        },
        {
          title: "Best airlines",
          src: "https://www.xtrafondos.com/wallpapers/tom-clancy-s-rainbow-six-siege-crimson-heist-7401.jpg",
          flex: 3,
        },
        {
          title: "Best airlines",
          src: "https://fondosmil.com/fondo/40159.jpg",
          flex: 4,
        },
        {
          title: "Best airlines",
          src: "https://www.xtrafondos.com/wallpapers/fortnite-jonesy-3753.jpg",
          flex: 3,
        },
      ],
    };
  },
};
</script>

<style>
</style>