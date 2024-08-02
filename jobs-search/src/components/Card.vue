<template>
<section :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot>
        
    </slot>
</section>

</template>
<script setup>
    const props = defineProps({
        bg:{
            type: String,
            default: 'bg-gray-100'
        }
    })
</script>