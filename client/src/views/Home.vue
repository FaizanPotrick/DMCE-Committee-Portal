<script setup>
import Typed from "typed.js";
import { onMounted, ref } from "vue";

const options = {
  strings: ["DMCE", "Committee", "Portal"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
};

onMounted(() => {
  const typed = new Typed("#typed", options);
  typed.start();
});
</script>
<template>
  <div>
    <div
      class="relative z-50 flex flex-col justify-center items-center h-screen text-[#fff]"
    >
      <div
        class="flex flex-col justify-center items-center text-4xl sm:text-6xl lg:text-8xl font-semibold"
      >
        <div>Welcome to</div>
        <div class="text-[#8a2ce2] mt-4">
          <span id="typed"></span>
        </div>
      </div>
      <div
        class="max-w-4xl w-full flex flex-col justify-center items-center text-sm sm:text-lg lg:text-xl my-16"
      >
        <div class="mb-5 sm:text-xl lg:text-3xl font-semibold">Hi there..</div>
        <div class="text-center">
          This portal is a platform where you can find all the various different
          committees of college at one single page you can easily check out this
          committees and the various ongoing events they held, Register To our
          Portal Now to get access to our various features.
        </div>
      </div>

      <RouterLink
        to="/registration"
        class="bg-transparent px-12 md:px-14 py-2 md:py-4 border-2 md:border-4 text-sm sm:text-lg md:text-xl border-[#8a2ce2] font-semibold rounded-2xl md:rounded-3xl duration-500 hover:bg-[#8a2ce2]"
      >
        Register
      </RouterLink>
    </div>

    <div class="flex justify-center items-center gap-8 flex-wrap pb-4">
      <div
        class="box w-[250px] h-[250px] relative rounded-full duration-500 hover:scale-110 cursor-pointer"
      >
        <div
          class="inset-4 border-[6px] border-[#070a1c] absolute flex flex-col justify-center items-center rounded-full"
        >
          <div class="font-semibold uppercase tracking-[0.2em] text-center">
            <div class="text-2xl text-[#fff]">Faizan Potrick</div>
            <div class="text-[#000]">Software Developer</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center gap-8 pt-4 flex-wrap">
      <div
        class="box w-[250px] h-[250px] relative rounded-full duration-500 hover:scale-110 cursor-pointer"
      >
        <div
          class="inset-4 border-[6px] border-[#070a1c] absolute flex flex-col justify-center items-center rounded-full"
        >
          <div class="font-semibold uppercase tracking-[0.2em] text-center">
            <div class="text-2xl text-[#fff]">
              Aarti <br />
              Pawar
            </div>
            <div class="text-[#000]">Frontend Developer</div>
          </div>
        </div>
      </div>
      <div
        class="box w-[250px] h-[250px] relative rounded-full duration-500 hover:scale-110 cursor-pointer"
      >
        <div
          class="inset-4 border-[6px] border-[#070a1c] absolute flex flex-col justify-center items-center rounded-full"
        >
          <div class="font-semibold uppercase tracking-[0.2em] text-center">
            <div class="text-2xl text-[#fff]">Aditya Sangale</div>
            <div class="text-[#000]">
              Graphic <br />
              Designer
            </div>
          </div>
        </div>
      </div>
      <div
        class="box w-[250px] h-[250px] relative rounded-full duration-500 hover:scale-110 cursor-pointer"
      >
        <div
          class="inset-4 border-[6px] border-[#070a1c] absolute flex flex-col justify-center items-center rounded-full"
        >
          <div class="font-semibold uppercase tracking-[0.2em] text-center">
            <div class="text-2xl text-[#fff]">
              Sanika <br />
              Rane
            </div>
            <div class="text-[#000]">
              ML <br />
              Engineer
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="circles absolute top-0 left-0 w-full h-full rotate-180">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<style>
.box {
  background: linear-gradient(315deg, rgb(128, 60, 190), rgb(54, 23, 83));
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 10;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>
