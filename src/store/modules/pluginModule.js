import axios from "axios";

export const pluginsModule = {
    namespaced: true,
     state() {
        return {
            plugins: [],
        }
    },
    getters: {
        GetPlugins(state) {
            return state.plugins
        },
    },
    mutations: {
        SetPlugins(state, Plugins){
            state.plugins = Plugins
        },
    },
    actions: {
        async GetPluginsFromServer(context) {
            try {
                const plugins = await axios.get('https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json')
                context.commit("SetPlugins", plugins)
            }catch(err){
                console.error(err)
            }
        },
    }
}
