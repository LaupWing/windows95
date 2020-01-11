import Vue from 'vue'
import Vuex from 'vuex'
import grid from './modules/grid'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        grid
    }
})
