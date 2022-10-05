<script setup>
import useContactStore from "@/stores/Contact";
</script>
<template>
  <div class="justify-center items-center h-screen">
    <form
      class="max-w-sm sm:max-w-3xl w-full flex flex-col justify-center items-center m-5 p-10 shadow-inner drop-shadow-xl rounded-xl bg-[#fff] gap-1"
      @submit.prevent="useContactStore().contact_fn()"
    >
      <div class="text-4xl sm:text-5xl text-center text-[#000] mb-2 sm:mb-4">
        Contact Us
      </div>
      <div class="text-center text-gray-500 text-sm sm:text-base mb-5 sm:mb-8">
        Feel Free to contact us any time. We will get back to you as soon as we
        can!.
      </div>
      <div class="w-full relative mb-4">
        <input
          type="text"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
          id="name"
          placeholder=" "
          pattern="^[a-zA-Z ]+$"
          v-model="useContactStore().name"
          maxlength="100"
          minlength="3"
          required
        />
        <label
          for="name"
          class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >Name*</label
        >
      </div>
      <div class="w-full relative mb-4">
        <input
          type="email"
          class="block px-2.5 pb-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] cursor-pointer focus:outline-none peer"
          id="email_address"
          placeholder=" "
          pattern="^[\w-\.]+@[A-Za-z]+\.[A-Za-z]{2,4}$"
          v-model="useContactStore().email_address"
          maxlength="300"
          required
        />
        <label
          for="email_address"
          class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >Email Address*</label
        >
      </div>
      <div class="w-full relative mb-4">
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 pt-4 w-full text-sm sm:text-base shadow-inner drop-shadow-md rounded-lg border border-[#121212a4] text-gray-900 bg-gray-50 focus:outline-none cursor-pointer peer"
          placeholder=" "
          v-model="useContactStore().message"
          maxlength="1000"
          minlength="10"
          required
        ></textarea>
        <label
          for="message"
          class="text-sm sm:text-base absolute duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-[#fff] cursor-pointer ml-2 peer-focus:px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >Enter your message*</label
        >
      </div>
      <button
        class="rounded-lg text-lg sm:text-xl bg-[#8a2ce2] py-2.5 text-[#fff] hover:bg-[#6d44b8] w-full duration-200 ease-in-out mt-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</template>
