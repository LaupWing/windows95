const state ={
    clickedProgram:null,
    activeProgram: null,
    openPanels: []
}

const getters ={
    getClickedProgram: state => state.clickedProgram,
    getActiveProgram: state => state.activeProgram,
    getOpenPanels: state => state.openPanels,
}

const actions ={
    addingPanel({commit},panel){
        const checkIfPanelExists = state.openPanels.find(p=>p.title === panel.title)
        if(checkIfPanelExists){
            if(checkIfPanelExists.minimize){
                const undoMinimizeInOpenPanels = state.openPanels.map(panel=>{
                    if(checkIfPanelExists === panel){
                        panel.minimize = false
                    }
                    return panel
                })
                commit('setOpenPanels', undoMinimizeInOpenPanels)
            }
            return commit('setActiveProgram', panel)
        }
        const openPanels = state.openPanels.concat(panel)
        commit('setOpenPanels', openPanels)
    },
    updatingPanel({commit}, {updatePanel, prop, val}){
        const updatedPanels = state.openPanels.map(panel=>{
            if(panel === updatePanel){
                panel[prop] = val
            }
            return panel
        })
        commit('setOpenPanels', updatedPanels)
    },
    deletingPanel({commit}, deletepanel){
        const updatedPanels = state.openPanels.filter(panel=>panel!==deletepanel)
        commit('setOpenPanels', updatedPanels)
    }
}

const mutations = {
    setClickedProgram: (state, el) => (state.clickedProgram = el),
    setActiveProgram: (state, program) => (state.activeProgram = program),
    setOpenPanels: (state, panels) => (state.openPanels = panels)
}

export default{
    state,
    actions,
    getters,
    mutations
}