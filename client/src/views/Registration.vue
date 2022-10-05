<script setup>
import useRegistration from "@/stores/Registration";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
<template>
  <div class="justify-center items-center h-screen">
    <form
      class="max-w-sm sm:max-w-5xl w-full flex flex-col justify-center items-center m-5 p-10 shadow-inner drop-shadow-xl rounded-xl bg-[#fff] gap-1"
      @submit.prevent="useRegistration().register_fn(router)"
    >
      <div class="text-4xl sm:text-5xl text-center text-[#000] mb-5 sm:mb-12">
        Registration
      </div>
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 w-full mb-4">
        <div class="w-full relative">
          <input
            type="text"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
            id="first_name"
            placeholder=" "
            pattern="^[a-zA-Z]+$"
            v-model="useRegistration().first_name"
            maxlength="100"
            minlength="3"
            required
          />
          <label
            for="first_name"
            class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >First Name*</label
          >
        </div>
        <div class="w-full relative">
          <input
            type="text"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
            id="middle_name"
            placeholder=" "
            pattern="^[a-zA-Z]+$"
            v-model="useRegistration().middle_name"
            maxlength="100"
            minlength="3"
            required
          />
          <label
            for="middle_name"
            class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Middle Name*</label
          >
        </div>
        <div class="w-full relative">
          <input
            type="text"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
            id="last_name"
            placeholder=" "
            pattern="^[a-zA-Z]+$"
            v-model="useRegistration().last_name"
            maxlength="100"
            minlength="3"
            required
          />
          <label
            for="last_name"
            class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Last Name*</label
          >
        </div>
      </div>
      <div class="w-full relative mb-4">
        <input
          type="email"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
          id="email_address"
          placeholder=" "
          pattern="^[\w-\.]+@[A-Za-z]+\.[A-Za-z]{2,4}$"
          v-model="useRegistration().email_address"
          maxlength="300"
          required
        />
        <label
          for="email_address"
          class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >Email Address*</label
        >
      </div>
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 w-full mb-4">
        <div class="w-full relative">
          <input
            type="text"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
            id="phone_no"
            placeholder=" "
            pattern="^[0-9]+$"
            v-model="useRegistration().phone_no"
            maxlength="10"
            minlength="10"
            required
          />
          <label
            for="phone_no"
            class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >Phone No.*</label
          >
        </div>
        <div class="w-full relative">
          <input
            type="text"
            class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
            id="gr_no"
            placeholder=" "
            pattern="^[0-9]{4}[A-Z]{4}[0-9]{3}$"
            v-model="useRegistration().gr_no"
            maxlength="11"
            minlength="11"
            required
          />
          <label
            for="gr_no"
            class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >GR No.*</label
          >
        </div>
      </div>
      <div class="w-full relative mb-4">
        <input
          type="password"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
          id="password"
          placeholder=" "
          v-model="useRegistration().password"
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
        Register
      </button>
      <div class="text-sm sm:text-base flex justify-center items-center mt-2">
        <div>Have already an account?</div>
        <RouterLink to="login" class="ml-1 hover:underline text-blue-600"
          >Login here</RouterLink
        >
      </div>
    </form>
  </div>
</template>
