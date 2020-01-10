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
    }
}
</script>

<style>
.button{
   display: flex; 
   align-items: center;
   background: var(--lightGrey);
   padding: 3px;
}

.button.start-btn svg{
    height: 80%;
    margin-right: 3px;
}
.button.start-btn{
    justify-content: center;
    font-size: 1.2rem;
    border-top: var(--lighterGrey) solid 2px;
    border-left: var(--lighterGrey) solid 2px;
    border-right: var(--justBlack) solid 2px;
    border-bottom: var(--justBlack) solid 2px;
}
</style>