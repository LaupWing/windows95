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
export default {
    name: 'ProgramList',
    components:{
        Item
    },
    data(){
        return{
            menuItems:[
                {
                    icon: 'printer.png',
                    title: 'Program1',
                    expandable: false
                },
                {
                    icon: 'printer.png',
                    title: 'Program2',
                    expandable: false
                },
                {
                    icon: 'printer.png',
                    title: 'Program2',
                    expandable: false,
                },
            ]
        }
    }
}
</script>

<style>
</style>