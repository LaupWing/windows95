<template>
    <header 
        class="program-header"
        :class="{'active': active}"
        @click="setActive"
        @mousedown="mouseDownEvent"
        @mousemove="mouseMoveEvent"
        @mouseup="mouseUpEvent"
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
            beginPos: null,
            diff: {
                diffLeft: 0,
                diffTop: 0
            },
            diffSnapshot:{
                diffLeft: 0,
                diffTop:0
            }
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
        mouseUpEvent(e){
            this.reset()
            this.diffSnapshot = {...this.diff}
            console.log(this.diffSnapshot)
        },
        mouseDownEvent(e){
            this.setActiveProgram(this.panel)
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
                const newTop = e.clientY
                const newLeft = e.clientX
                const diffLeft = newLeft -(this.beginPos.left - this.diffSnapshot.diffLeft)
                const diffTop = newTop - (this.beginPos.top - this.diffSnapshot.diffTop)
                this.diff = {
                    diffLeft,
                    diffTop
                }
                this.$emit('movingWindow',diffLeft, diffTop)
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