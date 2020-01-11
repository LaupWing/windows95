<template>
    <div 
        class="panel"
        :class="{'active': active}"
        @click="setActive"
    >
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
        ...mapGetters(['getActiveProgram']),
        active(){
            return this.panel === this.getActiveProgram
        }
    },
    data(){
        return{

        }
    },
    methods:{
        ...mapMutations(['setActiveProgram']),
        setActive(e){
            e.stopPropagation()
            if(this.getActiveProgram === this.panel){
                return this.setActiveProgram(null)
            }
            this.setActiveProgram(this.panel)
        }
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
    user-select: none;
}
.panel.active{
    border-top: var(--justBlack) 2px solid;
    border-left: var(--justBlack) 2px solid;
    border-bottom: var(--lighterGrey) 2px solid;
    border-right: var(--lighterGrey) 2px solid;
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