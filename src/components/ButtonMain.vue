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
      class=" w-[9.375rem] TB:w-[11rem] h-12 TB:h-[3.625rem] bg-neo-orange hover:bg-neo-light-orange text-neo-white font-bold uppercase rounded-lg">
      {{ btnText }}
   </button>
</template>