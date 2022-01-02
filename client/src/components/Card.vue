<template>
  
      <v-row dense class="d-flex justify-center mt-5">
          
        <v-col
          v-for="product in products"
          :key="product.idProducts"
          :md="3"
          cols="12"
        >

          <v-card>

            
            <v-img
              :src="`data:image/*;base64,${product.image}`"
              class="white--text align-end "
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="270px"
              contain
              @click="showAlert(`${product.idProducts}`)"
            >
            <v-card-title class="text-justify" v-text="product.title"></v-card-title>
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
import axios from "axios";
export default {
  name: "Card",
  mounted() {
    const vue = this;
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        vue.products = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  data() {
    return {
      products: [],
      
    };
  },
  methods: {
    showAlert(id) {
      // Use sweetalert2
      this.$swal({
        title: "Are you sure? id: " + id,
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        width: "800px",
        height: "800px",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      });
    },
    
  },
};
</script>

<style>

</style>