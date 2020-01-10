<template>
    <div id="Navigator-Bar">
        <Button :className="'start-btn'">
            <WindowsLogo/>
            Start
        </Button>
    </div>
</template>

<script>
import Button from '../../UI/Buttons/Button'
import WindowsLogo from '../../Logos/Windows'
export default {
    name: 'Navigator-Bar',
    components:{
        Button,
        WindowsLogo
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>
#Navigator-Bar{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    background: var(--lightGrey);
    border-top: var(--lighterGrey) solid 2px;
    display: flex;
    padding: 2px;
    /* align-items: center; */
}
</style>