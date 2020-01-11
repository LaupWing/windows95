<template>
    <div id="ProgramWindows">
        <ProgramWindow
            v-for="(panel, index) in getOpenPanels"
            :panel="panel"
            :key="index"
        />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProgramWindow from './ProgramWindow/ProgramWindow'
export default {
    name: 'ProgramWindowContainer',
    components:{
        ProgramWindow
    },
    computed:{
        ...mapGetters(['getOpenPanels'])
    }, 
    methods:{

    }
}
</script>

<style>

</style>