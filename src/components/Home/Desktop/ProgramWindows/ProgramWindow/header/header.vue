<template>
    <header 
        class="program-header"
        :class="{'active': active}"
        @mousedown="mouseDownEvent"
        @mousemove="mouseMoveEvent"
        @mouseup="mouseUpOutEvent"
        @mouseout="mouseUpOutEvent"
    >
        <h2>{{panel.title}}</h2>
        <div class="buttons">
            <MinimizeBtn/>
            <MaximizeBtn @click.native="maximize"/>
            <CloseBtn/>
        </div>    
    </header>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import CloseBtn from '../../../../../Logos/PanelButtons/Close' 
import MaximizeBtn from '../../../../../Logos/PanelButtons/Maximize' 
import MinimizeBtn from '../../../../../Logos/PanelButtons/Minimize' 
export default {
    name: 'ProgramHeader',
    components:{
        CloseBtn,
        MaximizeBtn,
        MinimizeBtn
    },
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
        mouseUpOutEvent(e){
            this.reset()
            this.diffSnapshot = {...this.diff}
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
        },
        maximize(e){
            this.$emit('maximize')
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
    display: flex;
    justify-content: space-between;
}
header.active{
    background: var(--blue);
}
header h2{
    user-select: none;
    font-size: 1.2rem;
}
header .buttons{
    display: flex;
    align-items: center;
}
header button{
    margin: 0 3px;
}
header button:first-of-type,
header button:last-of-type{
    margin: 0;
}
</style>