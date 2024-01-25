<script setup lang="ts">
defineProps({
   btnText: {
      type: String,
      required: true,
   },
})
</script>
<template>
   <button
      class=" w-[9.375rem] h-12 bg-neo-light-gray hover:bg-neo-dark-gray  hover:text-neo-white font-bold uppercase rounded-lg">
      {{ btnText }}
   </button>
</template>