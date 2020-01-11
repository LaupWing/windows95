<template>
    <div class="panel">
        <img :src="require(`../../../../../assets/programs/${panel.icon}`)" alt="">
        <h3>{{panel.title}}</h3>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
    name: 'Panel',
    props:{
        panel:{
            required: true,
            type: Object
        }
    },
    computed:{
        ...mapGetters(['getClickedProgram'])
    },
    data(){
        return{

        }
    },
    methods:{
        ...mapMutations(['setClickedProgram']),
    },
    created(){
        console.log(this.panel)
    }
}
</script>

<style scoped>
.panel{
    display: flex;
    margin: 0 3px; 
    border-bottom: var(--justBlack) 2px solid;
    border-right: var(--justBlack) 2px solid;
    border-top: var(--lighterGrey) 2px solid;
    border-left: var(--lighterGrey) 2px solid;
    padding: 2px 4px;
    align-items: center;
    width: 220px; 
}
.panel img{
    width: 25px;
    margin-right: 5px;
}
.panel h3{
    font-weight: normal;
    font-size: 1.1rem;
}
</style>