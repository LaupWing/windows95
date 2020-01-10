<template>
    <button 
        class="button"
        :class='className'
        :style={styleObj}
    >
        {{content}}
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
        content:{
            type: String,
            required: true
        },
        styleObj:{
            type: Object
        }
    }
}
</script>

<style>

</style>