const state ={
    clickedProgram:null
}

const getters ={
    getClickedProgram: state => state.clickedProgram
}

const actions ={

}

const mutations = {
    setClickedProgram: (state, el) => (state.clickedProgram = el)
}

export default{
    state,
    actions,
    getters,
    mutations
}