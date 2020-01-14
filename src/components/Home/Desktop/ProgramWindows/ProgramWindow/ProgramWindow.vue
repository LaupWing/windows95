<template>
    <div 
        class="program-window" 
        :style="[
            posObj, 
            transform.style, 
            adjustable(), 
            defaultMinSizes,
            maximized,
            styleObj
        ]"
        @click="onClickEvent"
    >
        <Header
            :panel="panel"
            v-on:movingWindow="movingWindow"
            v-on:maximize="maximize"
        />
    </div>
</template>

<script>
import Header from './header/header'
import onResize from 'resize-event'
import {debounce} from 'debounce'
import {mapMutations} from 'vuex'

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
            defaultMinSizes:{
                minWidth: 0,
                minHeight:0,
            },
            styleObj:{
                minWidth: 0,
                minHeight:0,
                transform:`translate(0,0)`,
                top: 0,
                left: 0,
            },
            maximized: null, // this needs to be intial null to say know if the user clicked or not
        }
    },
    methods:{
        ...mapMutations(['setActiveProgram']),
        onClickEvent(e){
            e.stopPropagation()
            this.setActiveProgram(this.panel)
        },
        adjustable(){
            return this.panel.adjustable ? {resize: 'both', overflow: 'auto'} : null
        },
        resizeEvent(){
            const containerSizes = this.$el.getBoundingClientRect()
        },
        settingStyleObj(stylesArray){
            stylesArray.forEach(style=>this.styleObj[style.prop] = style.value)
        },
        movingWindow(topDiff, leftDiff){
            const newTop = this.transform.values.top + topDiff
            const newLeft = this.transform.values.left + leftDiff
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
            const top = (containerSizes.height /2) - (this.panel.defaultSize.height/2) 
            const left = (containerSizes.width /2) - (this.panel.defaultSize.width/2)
            // this.setPosObj(top,left)
            this.settingStyleObj([
                {
                    prop:'top', 
                    value:`${top}px`
                },
                {
                    prop:'left', 
                    value:`${left}px`
                }
            ])
        },
        maximize(){
            if(!this.maximized){
                this.setPosObj(0,0)
                const desktopSizes = document.querySelector('.desktop-container').getBoundingClientRect()   
                this.maximized ={
                    width: desktopSizes.width +'px',
                    height: desktopSizes.height +'px'
                }     
                this. transform={
                    style: `transform(0,0)`,
                    values: {
                        top:0,
                        left: 0
                    }
                }
            }else{
                this.maximized = null
                this.initial()
            }
        },
        setMinDefaultSize(){
            this.settingStyleObj([
                {
                    prop:'minWidth', 
                    value:`${this.panel.defaultSize.width}px`
                },
                {
                    prop:'minHeight', 
                    value:`${this.panel.defaultSize.height}px`
                }
            ])
            // this.defaultMinSizes ={
            //     minWidth: this.panel.defaultSize.width + 'px',
            //     minHeight: this.panel.defaultSize.height + 'px',
            // }
        },
        initial(){
            this.setMinDefaultSize()
            this.setCenterPos()
        }
    },
    mounted(){
        window.addEventListener('load', this.initial)
        if(this.panel.adjustable){
            onResize(this.$el, debounce(this.resizeEvent,200))
        }
    }
}
</script>

<style scoped>
.program-window{
    background: var(--lightGrey);
    position: fixed;
    border-top: var(--lighterGrey) solid 2px;
    border-left: var(--lighterGrey) solid 2px;
    border-right: var(--justBlack) solid 2px;
    border-bottom: var(--justBlack) solid 2px;
    /* transition: height 1s, width 1s; */
}
</style>