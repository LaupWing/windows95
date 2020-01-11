<template>
    <div class="panels">
        <Panel
            v-for="(panel, index) in getOpenPanels"
            :key='index'
            :panel='panel'
        />
    </div>
</template>

<script>
import Panel from './Panel/Panel'
import {mapGetters} from 'vuex'

export default {
    name:'Panels',
    computed:{
        ...mapGetters(['getOpenPanels'])
    },    
    components:{
        Panel
    }
}
</script>

<style scoped>
.panels{
    flex-grow: 1;
    display: flex;
}
</style>