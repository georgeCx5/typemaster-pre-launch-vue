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
      <nav
         class=" flex justify-between items-center w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] mb-16 DT:mb-[5.25rem] pt-6 TB:pt-10 DT:pt-14 px-6 TB:px-10 DT:px-[10.25rem]">
         <img :src="logo" alt="logo" class=" w-10 h-10 select-none">
         <ButtonNav btn-text="Pre-order now" />
      </nav>
      <main
         class=" flex flex-col w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] mb-24 TB:mb-[9rem] DT:mb-[8rem] overflow-hidden">
         <section
            class=" flex flex-col TB:flex-row TB:items-center gap-16 TB:gap-[4.25rem] DT:gap-[7.75rem] mb-6 TB:mb-10 DT:mb-[1.875rem] DT:pl-[10.25rem]">
            <div
               class=" flex flex-col gap-8 TB:gap-10 TB:min-w-[49.5%] DT:min-w-[445px] DT:w-[35%] DT:mb-6 px-6 TB:pl-10 TB:pr-0 DT:px-0">
               <div class=" flex flex-col gap-8 DT:gap-6">
                  <h1 class=" text-5xl DT:text-[3.5rem] leading-[3rem] DT:leading-[3.5rem] font-black uppercase">
                     Typemaster keyboard</h1>
                  <p class=" text-neo-gray DT:text-[1.125rem] leading-[1.625rem] font-medium">
                     Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
                     mechanical typing experience.
                  </p>
               </div>
               <div class=" flex items-center gap-8 TB:gap-9 DT:gap-10">
                  <ButtonMain btn-text="Pre-order now" />
                  <h4 class=" text-neo-gray leading-[1.625rem] font-bold uppercase select-none">
                     Release on 5/27</h4>
               </div>
            </div>
            <div
               class=" relative -right-6 DT:right-[-.25rem] flex justify-between DT:min-w-[825px] DT:w-[64.75%]">
               <div
                  :class="`  ${images[0]} w-full TB:w-[478px] DT:min-w-[540px] DT:w-[65.5%] h-[331px] TB:h-[425px] DT:h-[480px] bg-cover rounded-[1.25rem]`" />
               <div class=" hidden DT:block min-w-[255px] w-[31%] h-[240px] bg-neo-light-gray rounded-[1.25rem]" />
            </div>
         </section>
         <section
            class=" flex flex-col DT:flex-row DT:items-center DT:justify-between gap-[4.5rem] DT:gap-1 mb-[7rem] TB:mb-[11rem] DT:mb-[10.5rem] DT:pr-[10.25rem]">
            <div
               class=" relative -left-6 TB:left-0 DT:left-[-7.5rem] flex TB:justify-between gap-6 TB:gap-8 DT:gap-[1.875rem] DT:min-w-[1015px] DT:w-[79.5%] h-[193px] TB:h-[320px] DT:h-[480px] TB:px-10 DT:px-0">
               <div
                  class=" hidden DT:block self-end w-[25%] min-w-[256px] h-[14.75rem] bg-neo-light-gray rounded-[1.25rem]" />
               <div class=" bg-neo-orange rounded-2xl overflow-hidden w-[55%] TB:w-[45%] DT:w-[25%] DT:min-w-[255px]">
                  <div :class="` w-full h-full ${images[2]} bg-cover opacity-[.25] contrast-150`" />
               </div>
               <div :class="`${images[1]} w-full DT:w-[44%] DT:min-w-[445px] h-full bg-cover rounded-2xl`" />
            </div>
            <div
               class=" flex flex-col TB:flex-row DT:flex-col TB:items-center gap-6 TB:gap-9 DT:w-[20%] px-6 TB:px-10 DT:px-0 text-center TB:text-left">
               <h2 class=" px-6 TB:px-0 TB:pr-6 text-[2rem] leading-[2.25rem] font-black uppercase">
                  Mechanical wireless keyboard</h2>
               <p class=" text-neo-gray leading-[1.625rem] font-medium">
                  The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety
                  of switches and keycaps, along with reliable wireless connectivity.</p>
            </div>
         </section>
         <section
            class=" grid TB:grid-cols-2 DT:grid-cols-4 gap-16 TB:gap-x-16 TB:gap-y-[4.5rem] DT:gap-8 px-6 TB:pl-10 TB:pr-24 DT:px-[10.25rem]">
            <FeatureComponent v-for="f in features" :logo="f.logo" :title="f.title" :description="f.description" />
         </section>
      </main>
      <footer class=" mb-12 TB:mb-11 DT:mb-10 text-neo-gray leading-[1.625rem] font-medium">
         <span class=" font-bold">Typemaster 2021 |</span> All Rights Reserved
      </footer>
   </body>
</template>