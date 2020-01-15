<template>
    <li class="item" :style="extraStyle">
        <img :src="require(`${icon}`)" alt="">
        <h2>
            {{title}}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 141 239"
                v-if="expandable"
            >    
                <polygon points="141 119.5 -0.22 0.47 -0.22 238.53 141 119.5"/>
            </svg> 
        </h2>
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