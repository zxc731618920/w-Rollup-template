<template >
    <div>
        <div>{{ x }}</div>
    </div>
</template>
<script lang="ts">

import { ref, defineComponent } from 'vue';

export default defineComponent({



    setup() {
        const x = ref(0)

        return { x }
    }
})



</script>
<style lang="scss">
</style>