<script setup lang="ts">
import ButtonNav from '@/components/ButtonNav.vue'
import ButtonMain from '@/components/ButtonMain.vue'
import FeatureComponent from '@/components/FeatureComponent.vue'
import logo from '@/assets/images/shared/logo.svg?url'
import iconCompatible from '@/assets/images/shared/icon-compatible.svg?url'
import iconBluetooth from '@/assets/images/shared/icon-bluetooth.svg?url'
import iconBattery from '@/assets/images/shared/icon-battery.svg?url'
import iconlight from '@/assets/images/shared/icon-light.svg?url'
interface IFeature {
   logo: string
   title: string
   description: string
}
const features: Array<IFeature> = [
   {
      logo: iconCompatible,
      title: "Highly compatible",
      description: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
   },
   {
      logo: iconBluetooth,
      title: "Wireless with bluetooth",
      description: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
   },
   {
      logo: iconBattery,
      title: "High capacity battery",
      description: "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
   },
   {
      logo: iconlight,
      title: "RGB backlit modes",
      description: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
   },
]
const images: Array<string> = [
   'bg-[url("@/assets/images/mobile/image-keyboard.jpg")] TB:bg-[url("@/assets/images/tablet/image-keyboard.jpg")] DT:bg-[url("@/assets/images/desktop/image-keyboard.jpg")]',
   'bg-[url("@/assets/images/mobile/image-glass-and-keyboard.jpg")] TB:bg-[url("@/assets/images/tablet/image-glass-and-keyboard.jpg")] DT:bg-[url("@/assets/images/desktop/image-glass-and-keyboard.jpg")]',
   'bg-[url("@/assets/images/mobile/image-phone-and-keyboard.jpg")] TB:bg-[url("@/assets/images/tablet/image-phone-and-keyboard.jpg")] DT:bg-[url("@/assets/images/desktop/image-phone-and-keyboard.jpg")]',
]
</script>
<template>
   <body class=" flex flex-col justify-center items-center bg-neo-white text-neo-dark-gray font-barlow">
      <nav class=" flex justify-between items-center w-full max-w-[375px] mb-16 pt-6 px-6">
         <img :src="logo" alt="logo" class=" w-10 h-10">
         <ButtonNav btn-text="Pre-order now" />
      </nav>
      <main class=" flex flex-col w-full max-w-[375px] mb-24 overflow-hidden">
         <section class=" flex flex-col gap-16 mb-6">
            <div class=" flex flex-col gap-8 px-6">
               <div class=" flex flex-col gap-8">
                  <h1 class=" text-5xl leading-[3rem] font-black uppercase">
                     Typemaster keyboard</h1>
                  <p class=" text-neo-gray leading-[1.625rem] font-medium">
                     Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
                     mechanical typing experience.
                  </p>
               </div>
               <div class=" flex items-center gap-8">
                  <ButtonMain btn-text="Pre-order now" />
                  <h4 class=" text-neo-gray leading-[1.625rem] font-bold uppercase">
                     Release on 5/27</h4>
               </div>
            </div>
            <div>
               <div :class="` relative -right-6 ${images[0]} w-full h-[331px] bg-cover rounded-[1.25rem]`" />
            </div>
         </section>
         <section class=" flex flex-col gap-[4.5rem] mb-[7rem]">
            <div class=" relative -left-6 flex gap-6 h-[193px]">
               <div class=" bg-neo-orange rounded-2xl overflow-hidden">
                  <div :class="` w-[129px] h-full ${images[2]} bg-cover opacity-[.25] contrast-150`" />
               </div>
               <div :class="`${images[1]} w-[220px] h-full bg-cover rounded-2xl`" />
            </div>
            <div class=" flex flex-col gap-6 px-6 text-center">
               <h2 class=" px-6 text-[2rem] leading-[2.25rem] font-black uppercase">
                  Mechanical wireless keyboard</h2>
               <p class=" text-neo-gray leading-[1.625rem] font-medium">
                  The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety
                  of switches and keycaps, along with reliable wireless connectivity.</p>
            </div>
         </section>
         <section class=" flex flex-col gap-16 px-6">
            <article v-for="f in features">
               <FeatureComponent :logo="f.logo" :title="f.title" :description="f.description" />
            </article>
         </section>
      </main>
      <footer class=" mb-12 text-neo-gray leading-[1.625rem] font-medium">
         <span class=" font-bold">Typemaster 2021 |</span> All Rights Reserved
      </footer>
   </body>
</template>