<template>
    <header 
        class="program-header"
        :class="{'active': active}"
        @click="setActive"
        @mousedown="mouseDownEvent"
        @mousemove="mouseMoveEvent"
        @mouseup="reset"
        @mouseout="reset"
    >
        <h2>{{panel.title}}</h2>
    </header>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
    
export default {
    name: 'ProgramHeader',
    props:{
        panel:{
            required: true,
            type: Object
        }
    },
    data(){
        return{
            move: false,
            beginPos: null
        }
    },
    computed:{
        ...mapGetters(['getActiveProgram']),
        active(){
            return this.getActiveProgram === this.panel
        }
    },
    methods:{
        ...mapMutations(['setActiveProgram']),
        setActive(e){
            e.stopPropagation()
            this.setActiveProgram(this.panel)
        },
        mouseDownEvent(e){
            this.setActiveProgram(this.panel)
            console.log('starting move')
            console.log(this.beginPos)
            this.beginPos = {
                top: e.clientY,
                left: e.clientX
            }
            this.move = true
        },
        reset(e){
            // Resetting
            this.move = false
            this.beginPos = null
        },
        mouseMoveEvent(e){
            if(this.move){
                const container = this.$el.closest('.program-window')
                const newTop = e.clientY
                const newLeft = e.clientX
                const diffLeft = newLeft -this.beginPos.left
                const diffTop = newTop -this.beginPos.top
                this.$emit('movingWindow', diffTop, diffLeft)
            }
        }
    },
    created(){
        console.log(this.panel)
    }
}
</script>

<style scoped> 
header{
    color: var(--justWhite);
    background: var(--darkGrey);
    width: 100%;
    padding: 3px;
}
header.active{
    background: var(--blue);
}
header h2{
    user-select: none;
    font-size: 1.2rem;
}
</style>