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
    settings: {},
    dialogs: {
      dialogConditions: false,
      dialogFaq: false,
      dialogComments: false,
      dialogProfile: false
    }
  },
  getters: {
    global: state => state.global,
    dialogs: state => state.dialogs,
  },
  mutations: {
    setSettings(state, val) {
      state.settings = val;
    },
    setDialog(state, params) {
      let [val, dialogName] = params
      if (dialogName) {
        state.dialogs[dialogName] = val
      } else {
        state.dialogs = val;
      }
    }
  },
  actions: {}
});
