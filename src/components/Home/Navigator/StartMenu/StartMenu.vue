<template>
    <ul id="StartMenu">
        <Item
            v-for="(item, index) in menuItems"
            :key="index"
            :icon="item.icon"
            :title="item.title"
            :extraClass="item.extraClass"
            :expansion="item.expansion"
        />
    </ul>
</template>

<script>
import Item from '../../../UI/Item/Item'
import ProgramList from './ProgramList/ProgramList'

export default {
    name: 'StartMenu',
    components:{
        Item,
        ProgramList
    },
    data(){
        return{
            menuItems:[
                {
                    icon: 'map.png',
                    title: 'Programs',
                    expansion: ProgramList
                },
                {
                    icon: 'settings.png',
                    title: 'Settings',
                    expansion: ProgramList
                },
                {
                    icon: 'printer.png',
                    title: 'Start',
                    extraClass:'topDivider',
                },
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
}
ul#StartMenu,
ul#StartMenu ul#ProgramList{
    border-top: var(--lighterGrey) solid 2px;
    border-left: var(--lighterGrey) solid 2px;
    border-right: var(--justBlack) solid 2px;
    border-bottom: var(--justBlack) solid 2px;
}
</style>