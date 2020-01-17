<template>
    <div 
        class="program-window" 
        :class="transitionClass"
        :style="[
            adjustable, 
            maximized,
            styleObj
        ]"
        @click="onClickEvent"
        @transitionend="onTransitionEnd"
    >
        <Header
            :panel="panel"
            v-on:movingWindow="movingWindow"
            v-on:maximize="maximize"
            v-on:minimize="minimize"
        />
        <div class="wrapper">
            <component class="content" :is="loadingProgram"></component>
        </div>
    </div>
</template>

<script>
import Header from './header/header'
import onResize from 'resize-event'
import {debounce} from 'debounce'
import {mapMutations, mapActions, mapGetters} from 'vuex'


export default {
    name: 'ProgramWindow',
    props:{
        panel:{
            required: true,
            type: Object
        }
    },
    components:{
        Header,
        ProgramExplorer: ()=> import(/* webpackChunkName: "Explorer" */'./content/Explorer.vue')
    },
    computed:{
        ...mapGetters(['getClickedProgram']),
        adjustable(){
            return this.panel.adjustable ? {resize: 'both', overflow: 'auto'} : null
        },
        loadingProgram(){
            return `Program${this.panel.title}`
        }
    },
    watch:{
        'panel.minimize': function(newVal){
            if(newVal){
                const panelSizes = document.querySelector(`#panel-${this.panel.title}`).getBoundingClientRect()

                const newPos ={
                    top: panelSizes.top + (panelSizes.height/2),
                    left:panelSizes.left + (panelSizes.width/2)
                }
                this.transitionClass = 'minimize'
                this.updatingPanel({updatePanel:this.panel, prop: 'stylesnapshot', val: {...this.styleObj}})
                this.setActiveProgram(null)

                this.settingStyleObj([
                        {
                            prop:'top', 
                            value:`${newPos.top}px`
                        },
                        {
                            prop:'left', 
                            value:`${newPos.left}px`
                        },
                        {
                            prop: 'transform',
                            value: `translate(-50%,-50%) scale(0)`
                        }
                ])
            }
            else if(!newVal){
                this.styleObj = {...this.panel.stylesnapshot}
                this.transitionClass = 'minimize'
                this.updatingPanel({updatePanel:this.panel, prop: 'stylesnapshot', val:null})
            }
        }
    },
    data(){
        return{
            styleObj:{
                minWidth: 0,
                minHeight:0,
                transform:`translate(0,0)`,
                top: 0,
                left: 0,
            },
            transitionClass: null,
            maximized: null, // this needs to be intial null to say know if the user clicked or not
        }
    },
    methods:{
        ...mapMutations(['setActiveProgram','setClickedProgram']),
        ...mapActions(['updatingPanel']),
        onClickEvent(e){
            e.stopPropagation()
            // Uncheck clicked program if user previously clicked an program
            if(this.getClickedProgram){
                this.setClickedProgram(null)
            }
            this.setActiveProgram(this.panel)
        },
        resizeEvent(){
            const containerSizes = this.$el.getBoundingClientRect()
        },
        settingStyleObj(stylesArray){
            stylesArray.forEach(style=>this.styleObj[style.prop] = style.value)
        },
        movingWindow(topDiff, leftDiff){
            this.settingStyleObj([
                {
                    prop:'transform', 
                    value:`translate(${topDiff}px,${leftDiff}px)`
                }
            ])
        },
        setCenterPos(){
            const containerSizes = document.querySelector('.desktop-container').getBoundingClientRect()
            const top = (containerSizes.height /2) - (this.panel.defaultSize.height/2) 
            const left = (containerSizes.width /2) - (this.panel.defaultSize.width/2)
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
        minimize(){
            this.updatingPanel({updatePanel:this.panel, prop: 'minimize', val: true})
        },
        maximize(){
            if(!this.maximized){
                const desktopSizes = document.querySelector('.desktop-container').getBoundingClientRect()   
                this.maximized ={
                    width: desktopSizes.width +'px',
                    height: desktopSizes.height +'px'
                }     
                this.updatingPanel({updatePanel:this.panel, prop: 'adjustable', val: false})
                this.settingStyleObj([
                    {
                        prop:'top', 
                        value:`0px`
                    },
                    {
                        prop:'left', 
                        value:`0px`
                    },
                    {
                        prop: 'transform',
                        value: `translate(0,0)`
                    }
                ])
            }else{
                this.maximized = null
                this.updatingPanel({updatePanel:this.panel, prop: 'adjustable', val: true})
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
        },
        onTransitionEnd(e){
            if(this.transitionClass){
                this.transitionClass = null
            }
        },
        initial(){
            this.setMinDefaultSize()
            this.setCenterPos()
        }
    },
    mounted(){
        this.initial()
        setTimeout(()=>{
            this.setActiveProgram(this.panel)
        },1)
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
    display: flex;
    flex-direction: column;
}
.program-window.minimize{
    transition: transform .5s, width 1s, top .5s, left .5s;
}
.program-window .wrapper{
    flex-grow: 1;
    padding: 3px;
    display: flex;
}
.program-window .wrapper .content{
    background: white;
    flex-grow: 1;
}
</style>