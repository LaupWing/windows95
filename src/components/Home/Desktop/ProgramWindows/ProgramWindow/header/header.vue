<template>
    <header 
        class="program-header"
        :class="{'active': active}"
        @mousedown="mouseDownEvent"
        @mousemove="mouseMoveEvent"
        @mouseup="mouseUpOutEvent"
        @mouseout="mouseUpOutEvent"
    >
        <h2>
            <img :src="require(`../../../../../../assets/programs/${panel.icon}`)" alt="">
            {{panel.title}}
        </h2>
        <div class="buttons">
            <MinimizeBtn @click.native="minimize"/>
            <MaximizeBtn @click.native="maximize"/>
            <CloseBtn @click.native="close"/>
        </div>    
    </header>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
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
            return this.getActiveProgram ? this.panel.title === this.getActiveProgram.title : null
        }
    },
    methods:{
        ...mapMutations(['setActiveProgram']),
        ...mapActions(['deletingPanel']),
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
        minimize(e){
            e.stopPropagation()
            this.$emit('minimize')
        },
        maximize(e){
            this.diffSnapshot={
                diffLeft: 0,
                diffTop:0
            }
            this.diff = {
                diffLeft: 0,
                diffTop: 0
            },
            this.$emit('maximize')
        },
        close(){
            this.deletingPanel(this.panel)
        }
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
    font-size: 1.1rem;
    display: flex;
    align-items: center;
}
header h2 img{
    height: 20px;
    margin: 0 3px;
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