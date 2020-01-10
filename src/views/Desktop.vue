<template>
    <div id="Desktop">
        <div class="desktop-container" @dragover="dragoverEvent">
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
    methods:{
        dragoverEvent(event){
            event.preventDefault()
            
        }
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
