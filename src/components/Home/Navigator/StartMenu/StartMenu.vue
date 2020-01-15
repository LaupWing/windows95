<template>
    <ul id="StartMenu">
        <Item
            v-for="(item, index) in menuItems"
            :key="index"
            :icon="item.icon"
            :title="item.title"
            :expandable="item.expandable"
        />
    </ul>
</template>

<script>
import Item from '../../../UI/Item/Item'
export default {
    name: 'StartMenu',
    components:{
        Item
    },
    data(){
        return{
            menuItems:[
                {
                    icon: 'printer.png',
                    title: 'Programn',
                    expandable: true
                }
            ]
        }
    }
}
</script>

<style>
ul#StartMenu{
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0,-100%);
    border-top: var(--lighterGrey) solid 2px;
    border-left: var(--lighterGrey) solid 2px;
    border-right: var(--justBlack) solid 2px;
    border-bottom: var(--justBlack) solid 2px;
}
</style>