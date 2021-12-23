import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css' //import fontawesome free

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#3949AB',
        secondary: '#424242',
        accent: '#3949AB',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        hover: '#F5F5F5',
      },
      dark: {
        primary: '#512DA8',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        hover: '#FFFFFF',
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
