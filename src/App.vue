<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style>
@font-face {
    font-family: PixelFJVerdana12pt;
    src: url(./assets/fonts/microsoft.ttf) format('truetype');
}
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    --turqoise: #56AAAA;
    --lighterGrey:#fffaff;
    --lightGrey: #C3C6CB;
    --mediumGrey:#ced1d6;
    --darkGrey: #86898E;
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
