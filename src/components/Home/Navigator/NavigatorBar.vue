<template>
    <div id="Navigator-Bar">
        <StartMenu v-if="getActiveProgram===null &&startActive"/>
        <Button v-click-outside="reset" :className="'start-btn'" @click.native="onClick">
            <div class="wrapper">
                <WindowsLogo/>
                Start
            </div>
        </Button>
        <Panels/>
    </div>
</template>

<script>
import Button from '../../UI/Buttons/Button'
import WindowsLogo from '../../Logos/Windows'
import {mapGetters} from 'vuex'
import Panels from './Panels/Panels'
import StartMenu from './StartMenu/StartMenu'
import ClickOutside from 'vue-click-outside'

export default {
    name: 'Navigator-Bar',
    components:{
        Button,
        WindowsLogo,
        Panels,
        StartMenu
    },
    computed:{
        ...mapGetters(['getActiveProgram'])
    },
    data(){
        return{
            startActive: false
        }
    },
    methods:{
        onClick(){
            this.startActive = !this.startActive
        },
        reset(){
            if(!this.startActive){
                return
            }
            this.startActive = false
            console.log('reset')
        }
    },
    directives: {
        ClickOutside
    }
}
</script>

<style scoped>
#Navigator-Bar{
    width: 100%;
    height: 40px;
    background: var(--lightGrey);
    border-top: var(--lighterGrey) solid 2px;
    display: flex;
    padding: 2px;
    position: relative;
}
button.start-btn{
    position: relative;
}
</style>