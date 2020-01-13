<template>
    <Button :className="'panel-btn'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 370">
            <path class="cls-1" d="M0,0V370H370V0ZM20,350V59.36H350V350Z"/>
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