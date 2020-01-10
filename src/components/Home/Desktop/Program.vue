<template>
    <div class="program" draggable="true">
        <div class="img-container">
            <img :src="require(`../../../assets/programs/${file}`)" alt="">
        </div>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
    name: 'Program',
    props:{
        title:{
            type: String,
            required: true
        },
        file:{
            type: String,
            required: true
        },
    },
    data(){
        return{
        }
    },
}
</script>

<style scoped>
.program{
    width: 70px;
    margin: 10px;
}
.program .img-container{
    padding: 2px 10px;
}
.program img{
    width: 100%;
}
.program h2{
    font-weight: normal;
    font-size: 1.2rem;
    text-align: center;
    color: white;
}
</style>