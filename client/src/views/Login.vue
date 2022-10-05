<script setup>
import useLoginStore from "@/stores/Login";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <div class="justify-center items-center h-screen">
    <form
      class="max-w-sm w-full flex flex-col justify-center items-center m-5 p-10 shadow-inner drop-shadow-xl rounded-xl bg-[#fff] gap-1"
      @submit.prevent="useLoginStore().login_fn(router)"
    >
      <div class="text-4xl sm:text-5xl text-center text-[#000] mb-5 sm:mb-12">
        Log In
      </div>
      <div class="w-full relative mb-4">
        <input
          type="email"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
          id="email_address"
          placeholder=" "
          v-model="useLoginStore().email_address"
          maxlength="300"
          required
        />
        <label
          for="email_address"
          class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >Email Address*</label
        >
      </div>
      <div class="w-full relative mb-3">
        <input
          type="password"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
          id="password"
          placeholder=" "
          v-model="useLoginStore().password"
          maxlength="12"
          minlength="8"
          autocomplete="off"
          required
        />
        <label
          for="password"
          class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >Password.*</label
        >
      </div>
      <button
        class="rounded-lg text-lg sm:text-xl bg-[#8a2ce2] py-2.5 text-[#fff] hover:bg-[#6d44b8] w-full duration-200 ease-in-out mt-4"
        type="submit"
      >
        Login
      </button>
      <div class="text-sm sm:text-base flex justify-center items-center mt-2">
        <div>Don't have an account?</div>
        <RouterLink to="registration" class="ml-1 hover:underline text-blue-600"
          >Register here</RouterLink
        >
      </div>
    </form>
  </div>
</template>
