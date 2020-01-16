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
            <ProgramWindows/>
        </div>
        <NavigatorBar/>
    </div>
</template>

<script>
import NavigatorBar from '../components/Home/Navigator/NavigatorBar'
import Program from '../components/Home/Desktop/Program/Program'
import {mapMutations, mapGetters} from 'vuex'
import {debounce} from 'debounce'
import ProgramWindows from '../components/Home/Desktop/ProgramWindows/ProgramWindows'

export default {
    name: 'Desktop',
    components: {
        NavigatorBar,
        Program,
        ProgramWindows
    },
    computed:{
        ...mapGetters(['getTotalPrograms'])
    },
    data(){
        return{
            styleObj: null
        }
    },
    methods:{
        ...mapMutations(['setCoords']),
        dragoverEvent(event){
            event.preventDefault()
            
        },
        makeGrid(){
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
            this.calculateGridCoords(maxRow, maxColumn)
        },
        calculateGridCoords(y, x){
            setTimeout(()=>{
                const programSizes = this.$el.querySelector('.program').getBoundingClientRect()
                const coords = []
                for(let xIndex=0; xIndex<x; xIndex++){
                    for(let yIndex=0; yIndex<y; yIndex++){
                        coords.push({
                            cell:{
                                col: xIndex,
                                row: yIndex
                            },
                            topLeft: {
                                x: xIndex * programSizes.width,
                                y: yIndex * programSizes.height,
                            },
                            topRight: {
                                x: (xIndex * programSizes.width) + programSizes.width,
                                y: yIndex * programSizes.height,
                            },
                            bottomLeft:{
                                x: xIndex * programSizes.width,
                                y: (yIndex * programSizes.height) + programSizes.height
                            },
                            bottomRight:{
                                x: (xIndex * programSizes.width) + programSizes.width,
                                y: (yIndex * programSizes.height) + programSizes.height
                            },
                        })
                    }
                }
                this.setCoords(coords)
            },1)
        }
    },
    mounted(){
        window.addEventListener('load',()=>{
            this.makeGrid()
        })
        window.addEventListener('resize',
            debounce(()=>{
                this.makeGrid()
            },200)
        )
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
