const state ={
    gridCoords:[]
}

const getters ={
    getCoords: state => state.gridCoords
}

const actions ={

}

const mutations = {
    setCoords: (state, coords) => (state.gridCoords = coords)
}

export default{
    state,
    actions,
    getters,
    mutations
}