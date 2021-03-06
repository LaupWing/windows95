const state ={
    totalPrograms:[
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
        },
        {
            icon: 'explorer.png',
            minimize: false,
            title: 'Explorer',
            adjustable:true,
            defaultSize:{
                width: 900,
                height: 600
            },
            stylesnapshot: null
        },
    ]
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