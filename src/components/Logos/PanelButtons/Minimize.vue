<template>
    <Button :className="'panel-btn'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 370">
            <rect class="cls-1" x="47.13" y="321.57" width="275.74" height="48.43"/>
        </svg>
    </Button>
</template>

<script>
import Button from '../../UI/Buttons/Button'
export default {
    name: 'Maximize',
    components:{
        Button
    }
}
</script>

<style scoped>
.cls-1{
    fill:#1d1d1b;
}
button svg {
    width: var(--panelBtn-width);
}
</style>