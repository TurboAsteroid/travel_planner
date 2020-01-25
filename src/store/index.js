import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  strict: true,
  plugins: [],
  modules: {},
  state: {
    global: {
      host: "http://185.41.162.107:8081/",
      formUrl: "http://bit.ly/yourtravelplanner",
      apiKey: "AIzaSyC8RRX0sndMP1sTQdEKOtzbBPoNR2BO2GU"
    },
    settings: {}
  },
  getters: {
    global: state => state.global
  },
  mutations: {
    setSettings(state, val) {
      state.settings = val;
    }
  },
  actions: {}
});
