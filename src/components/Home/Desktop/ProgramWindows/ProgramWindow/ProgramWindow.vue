<template>
    <div class="program-window" :style="[posObj, transform.style]">
        <Header
            :panel="panel"
            v-on:movingWindow="movingWindow"
        />
    </div>
</template>

<script>
import Header from './header/header'
export default {
    name: 'ProgramWindow',
    props:{
        panel:{
            required: true,
            type: Object
        }
    },
    components:{
        Header
    },
    data(){
        return{
            posObj: null,
            transform:{
                style: `transform(0,0)`,
                values: {
                    top:0,
                    left: 0
                }
            },
            transformSnapshot: null
        }
    },
    methods:{
        movingWindow(topDiff, leftDiff){
            const newTop = this.transform.values.top + topDiff
            const newLeft = this.transform.values.left + leftDiff
            console.log(topDiff,leftDiff)
            this.transform = {
                style: {
                    transform:`translate(${topDiff}px,${leftDiff}px)`
                },
                values:{
                    top: newTop,
                    left: newLeft
                }
            }
        },
        setPosObj(top, left){
            this.posObj = {
                top: top + 'px',
                left: left + 'px'
            } 
        },
        setCenterPos(){
            const containerSizes = document.querySelector('.desktop-container').getBoundingClientRect()
            const thisElSizes = this.$el.getBoundingClientRect()
            const top = (containerSizes.height /2) - (thisElSizes.height/2) 
            const left = (containerSizes.width /2) - (thisElSizes.width/2)
            this.setPosObj(top,left)
        }
    },
    mounted(){
        window.addEventListener('load', this.setCenterPos)
        console.log(this.panel)
    }
}
</script>

<style scoped>
.program-window{
    width: 300px;
    height: 500px;
    background: var(--lightGrey);
    position: fixed;
    resize: both;
    overflow: auto;
    border-top: var(--lighterGrey) solid 2px;
    border-left: var(--lighterGrey) solid 2px;
    border-right: var(--justBlack) solid 2px;
    border-bottom: var(--justBlack) solid 2px;
}
</style>