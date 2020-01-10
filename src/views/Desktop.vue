<template>
    <div id="Desktop">
        <!-- <h1>Home page</h1>    -->
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <NavigatorBar/>
    </div>
</template>

<script>
import NavigatorBar from '../components/Home/Navigator/NavigatorBar'
export default {
    name: 'Desktop',
    components: {
        NavigatorBar
    }
}
</script>
<style scoped>
#Desktop{
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
