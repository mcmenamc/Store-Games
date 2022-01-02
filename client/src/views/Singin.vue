<template>
  <div>

     <!-- <v-card
      class="mx-auto"
      max-width="400"
      v-for="article in Users"
      :key="article.idArticle"
    > 
    <v-img
        class="white--text align-end"
        height="200px"
       contain
        aspect-ratio="1.5"
        :src="`data:image/*;base64,${article.image}`"
      >
        <v-card-title>{{ article.title }}</v-card-title>
      </v-img> 

       <v-card-subtitle class="pb-0">
        stock: {{ article.stock }}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ article.mark }}</div>

        <div>{{ article.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>

        <v-btn color="orange" text> Explore </v-btn>
      </v-card-actions> 
      
     </v-card>  -->

    
  </div>
</template>

<script>
// import passwordHash from "password-hash";
// import axios from "axios";
export default {
  name: "Singin",
  data() {
    return {
      Users: null,
    };
  },
  mounted() {
    // let password = passwordHash.generate("menadelarosa1demkoednfueinfeiuefnifejfefefe");
    // console.log(password);
    // console.log(passwordHash.verify('menadelarosa1demkoednfueinfeiuefnifejfefefe', password));
    // console.log(password.length);


    // const vue = this;

    // axios
    //   .get("http://localhost:3000/api/articles")
    //   .then((response) => {
    //     vue.Users = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>
