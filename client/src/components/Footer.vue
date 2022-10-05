<script setup>
import Facebook from "@/assets/facebook.webp";
import Twitter from "@/assets/twitter.webp";
import Linkedin from "@/assets/linkedin.webp";
import Instagram from "@/assets/instagram.webp";
</script>
<template>
  <footer>
    <svg viewBox="0 0 120 18">
      <defs>
        <mask id="xxx">
          <circle cx="7" cy="12" r="40" fill="#fff" />
        </mask>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
        <path
          id="wave"
          d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
        />
      </defs>
      <use id="wave1" class="wave" xlink:href="#wave" x="0" y="1" />
      <use
        id="wave2"
        class="wave delay-100 opacity-60"
        xlink:href="#wave"
        x="0"
        y="0"
      ></use>
      <use
        id="wave3"
        class="wave opacity-30 delay-100"
        xlink:href="#wave"
        x="0"
        y="-2"
      ></use>
    </svg>
    <div class="bg-[#fff] flex flex-col pr-5 sm:pr-10 pl-24 sm:pl-32">
      <div class="img flex justify-center items-center flex-wrap gap-8 py-5">
        <img
          v-for="(logo, index) in [Facebook, Twitter, Linkedin, Instagram]"
          :key="index"
          :src="logo"
          alt="logo"
          class="w-8 sm:w-10 h-8 sm:h-10 cursor-pointer duration-500 hover:scale-125"
        />
      </div>
      <div class="text-center pb-5 sm:text-lg">
        &copy; 2022 DMCE Committee Portal | All Rights Reserved
      </div>
    </div>
  </footer>
</template>
<style>
.wave {
  animation: wave 8s linear;
  animation-iteration-count: infinite;
  fill: #fff;
}
#wave2 {
  animation-direction: reverse;
}

@keyframes wave {
  to {
    transform: translateX(-100%);
  }
}
</style>
