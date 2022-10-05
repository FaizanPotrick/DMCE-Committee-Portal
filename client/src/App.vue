<script setup>
import { useRoute } from "vue-router";
import Loading from "@/components/Loading.vue";
import Alert from "@/components/Alert.vue";
import Modal from "@/components/Modal.vue";
import Navbar from "@/components/Navbar.vue";
import ChatBot from "@/assets/chatbot.webp";
import Footer from "@/components/Footer.vue";

const route = useRoute();
</script>
<template>
  <div class="w-screen bg-[#121212]">
    <Loading />

    <Modal />
    <Navbar class="z-[51]" />
    <RouterView
      class="flex flex-col pr-5 sm:pr-10 pl-24 sm:pl-32 py-5 sm:py-10"
    />
    <RouterLink
      v-if="route.name !== 'chatbot'"
      to="/chatbot"
      class="fixed right-10 bottom-10 p-3 bg-[#fff] rounded-full shadow-md shadow-[#fff]/10 z-50 border group"
    >
      <img
        :src="ChatBot"
        alt="logo"
        class="w-12 sm:w-[60px] h-12 sm:h-[60px] p-2 cursor-pointer duration-500 group-hover:scale-110"
      />
    </RouterLink>
    <Alert />
    <Footer />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

body {
  overflow-x: hidden;
  font-family: "Poppins", sans-serif;
}
html {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 0px;
}
</style>
