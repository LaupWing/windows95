const state ={
    clickedProgram:null,
    openPanels: [
        {
            icon: 'printer.png',
            minimize: false,
            title: 'Printer'
        }
    ]
}

const getters ={
    getClickedProgram: state => state.clickedProgram,
    getOpenPanels: state => state.openPanels,
}

const actions ={
    addingPanel({commit},panel){
        const openPanels = state.openPanels.concat(panel)
        commit('setOpenPanels', openPanels)
    }
}

const mutations = {
    setClickedProgram: (state, el) => (state.clickedProgram = el),
    setOpenPanels: (state, panels) => (state.openPanels = panels)
}

export default{
    state,
    actions,
    getters,
    mutations
}