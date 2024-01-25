<script setup lang="ts">
defineProps({
   logo: String,
   title: String,
   description: String
})
</script>
<template>
   <div class=" flex flex-col items-center gap-12 text-center">
      <div class=" flex justify-center items-center w-16 h-16 bg-neo-orange rounded-2xl">
         <img :src="logo" :alt="title">
      </div>
      <div class=" flex flex-col gap-6">
         <h3 class=" text-2xl leading-[1.75rem] font-black">
            {{ title }}</h3>
         <p class=" text-neo-gray leading-[1.625rem] font-medium">
            {{ description }}</p>
      </div>
   </div>
</template>