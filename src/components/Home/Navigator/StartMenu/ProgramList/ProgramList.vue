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
        />
    </ul>
</template>

<script>
import Item from '../../../../UI/Item/Item'
import {mapGetters} from 'vuex'

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
            // menuItems:[
            //     {
            //         icon: 'printer.png',
            //         title: 'Program1',
            //         expandable: false
            //     },
            //     {
            //         icon: 'printer.png',
            //         title: 'Program2',
            //         expandable: false
            //     },
            //     {
            //         icon: 'printer.png',
            //         title: 'Program2',
            //         expandable: false,
            //     },
            // ]
        }
    },
    created(){
        console.log(this.getTotalPrograms)
    }
}
</script>

<style>
</style>