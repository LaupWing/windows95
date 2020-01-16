import Vue from 'vue'
import Vuex from 'vuex'
import grid from './modules/grid'
import desktop from './modules/desktop'
import programs from './modules/programs'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        grid,
        desktop,
        programs
    }
})
