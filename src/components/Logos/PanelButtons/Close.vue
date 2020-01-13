<template>
    <Button :className="'panel-btn'">
        <svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 370">
            <title>windows_close</title>
            <rect class="cls-1" x="160.3" y="-51.93" width="49.39" height="473.87" transform="translate(185 -76.63) rotate(45)"/>
            <rect class="cls-1" x="160.3" y="-51.93" width="49.39" height="473.87" transform="translate(446.63 185) rotate(135)"/>
        </svg>
    </Button>
</template>

<script>
import Button from '../../UI/Buttons/Button'
export default {
    name: 'Close',
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