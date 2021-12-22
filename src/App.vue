<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!---Header -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="ml-5 mr-5"
        ><strong> Store Games</strong>
      </v-toolbar-title>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <!-- Carrito -->
      <v-menu open-on-hover offset-y class="mr-1">
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
      </v-menu>

      <!-- Notificaciones -->
      <v-menu open-on-hover offset-y class="mr-1" :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-badge
              :content="CountNotification"
              :value="CountNotification"
              color="green"
              overlap
            >
              <v-icon>fas fa-bell </v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-card class="mx-auto" loading color="#FAFAFA" min-width="250" max-width="500">
          <v-card-title>Notificaciones</v-card-title>
          <v-responsive class="overflow-y-auto" max-height="400">
            <v-responsive
              v-for="item in Notification"
              :key="item.id"
              class=" pa-2 text-justify"
            >
              <v-alert shaped 
                dismissible
                color="cyan"
                border="left"
                elevation="1"
                colored-border
                icon="fas fa-user-md"
                class=""
              >
              <div><strong>{{ item.title }}</strong></div>
                {{ item.content }}
              </v-alert>
            </v-responsive>
          </v-responsive>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- Se modifica las vistas   -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer color="light-blue lighten-5">
      <!-- fotter -->
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Store Games</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",

  data: () => ({
    CountNotification: null,
    drawer: false,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
  computed: {
    ...mapState(["Notification"]),
  },
  created() {
    this.CountNotification = this.Notification.length;
  },
};
</script>