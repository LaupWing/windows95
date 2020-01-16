<template>
    <ul 
        id="ProgramList"
        @mouseover="$emit('preventClose')"
    >
        <Item
            v-for="(item, index) in menuItems"
            :key="index"
            :icon="item.icon"
            :title="item.title"
            :expandable="item.expandable"
            :extraClass="item.extraClass"
            :expansion="item.expansion"
            :onClick="()=>openProgram(item)"
        />
    </ul>
</template>

<script>
import Item from '../../../../UI/Item/Item'
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    name: 'ProgramList',
    components:{
        Item
    },
    computed:{
        ...mapGetters(['getTotalPrograms']),
        menuItems(){
            const menuItems = this.getTotalPrograms.map(item=>{
                return {
                    ...item,
                    expandable: false
                }
            })
            return menuItems
        }
    },
    data(){
        return{
        }
    },
    methods:{
        ...mapActions(['addingPanel']),
        ...mapMutations(['setActiveProgram']),
        openProgram(program){
            this.addingPanel(program)

            this.setActiveProgram(program)
        }
    }
}
</script>

<style>
</style>