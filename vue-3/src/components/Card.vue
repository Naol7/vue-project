<script setup>


defineProps({
    bg: {
        type: String,
        default: 'bg-gray-100'
    }
})
</script>

<template>
   <div :class="`p-6 ${bg} rounded-lg shadow-md`">
    <slot></slot>

   </div> 
</template>