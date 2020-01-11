<template>
    <div id="app" @click="onClickEvent">
        <router-view/>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: 'app',
    methods:{
        ...mapMutations(['setClickedProgram']),
        onClickEvent(e){
            this.setClickedProgram(null)
        }
    }
}
</script>

<style>
@font-face {
    font-family: PixelFJVerdana12pt;
    src: url(./assets/fonts/microsoft.ttf) format('truetype');
}
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    --blue: #020080;
    --turqoise: #56AAAA;
    --lighterGrey:#fffaff;
    --lightGrey: #C3C6CB;
    --mediumGrey:#ced1d6;
    --darkGrey: #86898E;
    --almostWhite:#E0E0E0;
    --justWhite: white;
    --justBlack: rgba(0,0,0,.5);
    --fontFam: PixelFJVerdana12pt;
    font-family: var(--fontFam);
}
#app{
    width: 100vw;
    height: 100vh;
    background: var(--turqoise);
}
button{
    outline: none;
}
</style>
