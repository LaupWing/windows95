<template>
    <div 
        class="program" 
        :class="{'dragging': active}"
        draggable="true"
        @dragstart="dragStartEvent"
        @dragend="dragEndEvent"
        @click="onClickEvent"
        :style="styleObj"
    >
        <div class="img-container">
            <img draggable="false" :src="require(`../../../../assets/programs/${file}`)" alt="">
        </div>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: 'Program',
    props:{
        title:{
            type: String,
            required: true
        },
        file:{
            type: String,
            required: true
        },
    },
    computed:{
        ...mapGetters(['getCoords', 'getClickedProgram']),
        active(){
            return this.$el === this.getClickedProgram
        }
    },
    data(){
        return{
            styleObj: null
        }
    },
    methods:{
        ...mapMutations(['setClickedProgram']),
        onClickEvent(e){
            e.stopPropagation()
            this.setClickedProgram(this.$el)
        },
        dragStartEvent(e){
            this.setClickedProgram(this.$el)
            this.drag = true
            e.dataTransfer.effectAllowed = 'move' 
        },
        dragEndEvent(e){
            const xLocation = e.clientX
            const yLocation = e.clientY
            if(this.getCoords){
                const cellCoord = this.getCoords.find(coord=>{
                    if(
                        coord.topLeft.x <= xLocation && 
                        coord.topLeft.y <= yLocation &&
                        coord.bottomRight.x >= xLocation &&
                        coord.bottomRight.y >= yLocation
                        ){
                        return coord
                    }
                })
                this.styleObj ={
                    'grid-column': cellCoord.cell.col+1,
                    'grid-row': cellCoord.cell.row+1
                }
            }
        }
    }
}
</script>

<style scoped>
.program{
    width: 70px;
    /* margin: 10px; */
    background: transparent;
}
.program.dragging{
    background: var(--blue);
}
.program .img-container{
    padding: 2px 10px;
}
.program img{
    width: 100%;
}
.program h2{
    font-weight: normal;
    font-size: 1.2rem;
    text-align: center;
    color: white;
}
</style>