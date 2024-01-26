<script setup lang="ts">
defineProps({
   logo: String,
   title: String,
   description: String
})
</script>
<template>
   <article class=" flex flex-col items-center TB:items-start gap-12 TB:gap-10 DT:gap-12 text-center TB:text-left">
      <div class=" flex justify-center items-center w-16 h-16 bg-neo-orange rounded-2xl select-none">
         <img :src="logo" :alt="title">
      </div>
      <div class=" flex flex-col gap-6">
         <h3 class=" TB:pr-24 DT:pr-12 text-2xl leading-[1.75rem] font-black uppercase">
            {{ title }}</h3>
         <p class=" text-neo-gray leading-[1.625rem] font-medium">
            {{ description }}</p>
      </div>
   </article>
</template>