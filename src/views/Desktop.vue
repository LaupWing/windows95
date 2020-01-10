<template>
    <div id="Desktop">
        <div 
            class="desktop-container" 
            @dragover="dragoverEvent"
            :style="styleObj"
        >
            <Program
                :title="'Printer'"
                :file="'printer.png'"
            />
        </div>
        <NavigatorBar/>
    </div>
</template>

<script>
import NavigatorBar from '../components/Home/Navigator/NavigatorBar'
import Program from '../components/Home/Desktop/Program'
export default {
    name: 'Desktop',
    components: {
        NavigatorBar,
        Program
    },
    data(){
        return{
            styleObj: null
        }
    },
    methods:{
        dragoverEvent(event){
            event.preventDefault()
            
        },
        calculateGrid(){
            const container = this.$el.querySelector('.desktop-container')
            const programSizes = this.$el.querySelector('.program').getBoundingClientRect()
            const containerSizes = container.getBoundingClientRect()
            

            const maxRow = Math.floor(containerSizes.height / programSizes.height)
            const maxColumn = Math.floor(containerSizes.width / programSizes.width)
            this.styleObj ={
                display: 'grid',
                gridTemplateColumns : `repeat(${maxColumn},1fr)`,
                gridTemplateRows : `repeat(${maxRow},1fr)`
            }
        }
    },
    mounted(){
        window.addEventListener('load',()=>{
            this.calculateGrid()
        })
    }
    
}
</script>
<style scoped>
#Desktop{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.desktop-container{
    position: relative;
    flex-grow: 1;
}
</style>
