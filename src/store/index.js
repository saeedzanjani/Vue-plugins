import {reactive} from "vue";

const state = reactive({
    switchApp: true,
    counter: 0,
    switchTitle: 'All plugins enabled'
})

const methods = {
    changeState() {
        if (!state.switchApp){
            state.switchTitle = 'All plugins disabled'
        }else{
            state.switchTitle = 'All plugins enabled'
        }
    }
}

export default {
    state,
    methods
}
