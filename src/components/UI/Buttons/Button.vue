<template>
    <button 
        class="button"
        :class='className'
        :style={styleObj}
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props:{
        className:{
            required: true,
            type: String
        },
        styleObj:{
            type: Object
        }
    },
    data(){
        return{
            active: false
        }
    },
    metthods:{

    }
}
</script>

<style>
.button{
    display: flex; 
    align-items: center;
    background: var(--lightGrey);
    padding: 2px;
}

.button.button.start-btn:focus{
    padding: 1px;
    border-bottom: var(--lighterGrey) solid 2px;
    border-right: var(--lighterGrey) solid 2px;
    border-left: var(--justBlack) solid 2px;
    border-top: var(--justBlack) solid 2px;
}

.button.button.start-btn:focus .wrapper{
    border: dotted var(--justBlack) 1px;
}

.button.button.start-btn .wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    /* width: 100% */
}

.button.start-btn svg{
    width: 27px;
    margin-right: 3px;
}
.button.start-btn{
    font-size: 1.2rem;
    border-top: var(--lighterGrey) solid 2px;
    border-left: var(--lighterGrey) solid 2px;
    border-right: var(--justBlack) solid 2px;
    border-bottom: var(--justBlack) solid 2px;
}
</style>