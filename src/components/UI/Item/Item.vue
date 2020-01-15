<template>
    <li class="item" :class="extraClass">
        <img :src="require(`../../../assets/programs/${icon}`)" alt="">
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
    name: 'Item',
    props:{
        icon:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        extraClass:{
            type: String
        },
        expandable:{
            type: Boolean,
            required: true
        },
        expansion:{
            required: false
        }
    },
    methods:{

    },
    created(){
        console.log(this.expansion)
    }
}
</script>

<style>
li.item{
    background: var(--lightGrey);
    display: flex;
    align-items: center;
    min-width: 250px;
    position: relative;
    transition: .25s;
}
li.item:hover{
    background: var(--blue);
    color: var(--justWhite);
}
li.item:hover svg >*{
    fill: var(--justWhite);
}
li img{
    margin: 5px;
    width: 30px;
}
li h2{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    padding: 0 10px;
    font-weight: normal;
    font-size: 1.2rem;
    user-select: none;
}
li svg{
    width: 7px;
}

/* Conditional styling */
li.item.topDivider::before{
    content: '';
    top: 0;
    width: 98%;
    border-top: solid 1px var(--darkGrey);
    border-bottom: solid 1px var(--justWhite);
    position: absolute;

}
</style>