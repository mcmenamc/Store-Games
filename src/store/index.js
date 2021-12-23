import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Notification: [
      {
        id: 1,
        title: "Notification 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ",
        date: "2019-01-01",
        time: "12:00",
      },
      {
        id: 2,
        title: "Notification 2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ",
        date: "2019-01-01",
        time: "12:00",
      },
      {
        id: 3,
        title: "Notification 3",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ",
        date: "2019-01-01",
        time: "12:00",
      },
      {
        id: 4,
        title: "Notification 4",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        date: "2019-01-01",
        time: "12:00",
      },
    ],
  },
  mutations: {
    
  },
  actions: {},
  modules: {},
});
