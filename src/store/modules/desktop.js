const state ={
    clickedProgram:null,
    activeProgram: null,
    openPanels: [
        {
            icon: 'printer.png',
            minimize: false,
            title: 'Printer',
            adjustable:true,
            defaultSize:{
                width: 300,
                height: 300
            },
            stylesnapshot: null
        }
    ]
}

const getters ={
    getClickedProgram: state => state.clickedProgram,
    getActiveProgram: state => state.activeProgram,
    getOpenPanels: state => state.openPanels,
}

const actions ={
    addingPanel({commit},panel){
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