<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Menu </v-list-item-title>
          <v-switch
            class="font-weight-black ml-2"
            v-on:click="darkMode"
            inset
            color="info"
            :label="`${Mode == 'true' ? `Dark` : `Light`} Mode`"
          ></v-switch>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense class="mt-1">
        <template>
          <div v-for="item in links" :key="item.title">
            <v-list-group
              :group="'attricons'"
              v-if="item.links"
              v-model="item.active"
              :prepend-icon="item.icon"
              no-icon
              link
              color="hover"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="subItem in item.links"
                :key="subItem.title"
                :to="subItem.to"
              >
                <v-list-item-icon class="ml-5">
                  <v-icon right size="18" v-text="subItem.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>

            <v-list-item v-else :to="item.to" link>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!---Header -->

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2 primary"
          contain
          v-bind:src="require('@/assets/images/logo.png')"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title
          class="text-sm-body-2 text-md-body-1 text-lg-h6 text-xl-h4 "
        >
          <div class="fontPerma">Store Games</div> 
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <!-- Carrito -->
      <!-- <v-menu open-on-hover offset-y class="mr-1">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" class="mx-2" dark v-bind="attrs" v-on="on">
            <v-badge :content="5" :value="5" color="green" overlap>
              <v-icon>fas fa-cart-plus</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-card class="mx-auto" color="#FAFAFA" min-width="250" max-width="550">
          <v-card-title>Notificaciones</v-card-title>
          <v-responsive class="overflow-y-auto" max-height="auto">
            <v-responsive class="text-center pa-2 text-justify">
              <v-alert
                dismissible
                color="cyan"
                border="left"
                elevation="1"
                colored-border
                icon="fas fa-user-md "
              >
                Nueva Notificaciones de la Aplicacion.
              </v-alert>
            </v-responsive>
          </v-responsive>
        </v-card>
      </v-menu> -->

      <!-- Notificaciones -->
      <v-menu
        transition="scroll-y-reverse-transition"
        open-on-hover
        offset-x
        class="mr-1"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-badge
            :content="CountNotification"
            :value="CountNotification"
            color="green"
            overlap
          >
            <v-icon size="4.1vh" v-bind="attrs" v-on="on">fas fa-bell </v-icon>
          </v-badge>
        </template>

        <v-card class="mx-auto" max-width="415px">
          <v-card-title class="text-sm-body-2 text-md-body-1 text-lg-h6"
            >{{ CountNotification }}&nbsp; Notificaciones
          </v-card-title>

          <v-responsive class="overflow-y-auto" max-height="400">
            <v-responsive class="pa-2">
              <v-alert
                v-if="CountNotification == 0"
                border="top"
                prominent
                elevation="5"
                icon="fas fa-book-open"
                class="mb-4 text-sm-body-2 text-md-body-1 text-lg-h6"
                >Ningún Mensaje
              </v-alert>

              <v-alert
                v-for="item in Notification"
                :key="item.id"
                border="left"
                elevation="1"
                color="primary"
                type="info"
                dark
              >
                <v-row>
                  <v-col cols="12" class="text-sm-body-2 text-md-body-1">
                    <strong>{{ item.title }}</strong>
                    {{ item.content }}
                  </v-col>
                </v-row>
              </v-alert>
              <v-row align="center" justify="space-around">
                <v-btn
                  color="error"
                  v-if="CountNotification > 0"
                  v-on:click="deleteNotification"
                  class="my-5"
                >
                  Eliminar Mensajes
                </v-btn>
              </v-row>
            </v-responsive>
          </v-responsive>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">
            Siguenos en nuetras Redes Sociales
          </strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Store Games</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",

  data: () => ({
    CountNotification: 0,
    Mode: null,
    drawer: false,
    links: [
      {
        icon: "fas fa-home",
        title: "Home",
        to: "/",
      },
      {
        icon: "fas fa-user",
        title: "Nosotros",
        to: "/nosotros",
      },
      {
        icon: "fas fa-gamepad",
        title: "Plataforma",
        links: [
          {
            title: "PC",
            icon: "fas fa-desktop",
            to: "/temporada/primavera",
          },
          {
            title: "Xbox",
            icon: "fab fa-xbox",
            to: "/temporada/verano",
          },
          {
            title: "PlayStation",
            icon: "fab fa-playstation",
            to: "/temporada/otoño",
          },
          {
            title: "Nintendo",
            icon: "fas fa-vr-cardboard",
            to: "/temporada/invierno",
          },
        ],
      },

      {
        icon: "fa fa-question",
        title: "Ayuda",
        to: "/ubicacion",
      },
    ],
    icons: [
      "fab fa-facebook-f",
      "fab fa-twitter",
      "fab fa-instagram",
      "fab fa-youtube",
    ],
  }),
  computed: {
    ...mapState(["Notification"]),
  },
  methods: {
    deleteNotification() {
      this.$store.state.Notification = [];
      this.CountNotification = 0;
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
      this.Mode = localStorage.getItem("dark_theme");
      console.log(this.Mode);
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    this.Mode = theme;
    console.log(this.Mode);

    if (theme) {
      if (theme === "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
    // if (
    //   window.matchMedia &&
    //   window.matchMedia("(prefers-color-scheme: dark)").matches
    // )
    else {
      this.$vuetify.theme.dark = true;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
    // Cuenta las notificaciones que hay actualmente
    this.CountNotification = this.Notification.length;
  },
  created() {},
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");



.fontPerma {
  font-family: 'Permanent Marker', cursive;
}
</style>