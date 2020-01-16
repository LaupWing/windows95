const state ={
    totalPrograms:[]
}

const getters ={
    getTotalPrograms: state => state.totalPrograms
}

const actions ={
    addingProgram: ({commit},program)=>{
        const newTotalPrograms = state.totalPrograms.concat(program)
        commit('setTotalPrograms', newTotalPrograms)
    }
}

const mutations = {
    setTotalPrograms: (state, programs) => (state.totalPrograms = programs)
}

export default{
    state,
    actions,
    getters,
    mutations
}