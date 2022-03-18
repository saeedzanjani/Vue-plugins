import {createStore} from "vuex";
import {pluginsModule} from "./modules/pluginModule";


export const store = createStore({
    modules: {
        plugins: pluginsModule,
    },
    state() {
        return {
        }
    },
    getters: {},
    mutations: {},
    actions: {},
})
