<template>
    <li class="item" :style="extraStyle">
        <img :src="require(`${icon}`)" alt="">
        <h2>{{title}}</h2>
    </li>
</template>

<script>
export default {
    name: 'ListItem',
    props:{
        icon:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        extraStyle:{
            type: Object
        },
        expandable:{
            type: Boolean,
            required: true
        }
    },
    methods:{

    }
}
</script>

<style>

</style>