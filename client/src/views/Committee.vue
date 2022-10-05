<script setup>
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { ref } from "vue";
import UseCommitteeStore from "@/stores/Committee";
import useModalStore from "@/stores/Modal";
import Facebook from "@/assets/facebook.webp";
import Twitter from "@/assets/twitter.webp";
import Linkedin from "@/assets/linkedin.webp";
import Instagram from "@/assets/instagram.webp";
import past_events from "@/assets/past_events.webp";
import upcoming_events from "@/assets/upcoming_events.webp";
import Past_Events from "@/stores/Past_Events.json";
import Upcoming_Events from "@/stores/Upcoming_Events.json";

const route = useRoute();
const Store = UseCommitteeStore();
const Committee = ref(Store[route.params.committee]);

const past_events_data = ref(
  Past_Events.filter((event) => {
    return event.tag === route.params.committee;
  })
);

const upcoming_events_data = ref(
  Upcoming_Events.filter((event) => {
    return event.tag === route.params.committee;
  })
);

onBeforeRouteUpdate((to, from, next) => {
  Committee.value = Store[to.params.committee];
  past_events_data.value = Past_Events.filter((event) => {
    return event.tag === to.params.committee;
  });
  upcoming_events_data.value = Upcoming_Events.filter((event) => {
    return event.tag === to.params.committee;
  });
  next();
});
</script>
<template>
  <div
    v-if="Committee === undefined"
    class="flex flex-col justify-center items-center text-[#fff] h-screen"
  >
    <div class="text-5xl sm:text-6xl md:text-7xl mb-2 sm:mb-5 text-center">
      No Committee Found
    </div>
  </div>
  <div v-else>
    <div class="flex flex-col justify-center items-center text-[#fff] h-screen">
      <div class="text-5xl sm:text-6xl md:text-7xl mb-2 sm:mb-5 text-center">
        {{ Committee.committee_name }}
      </div>
      <div
        class="text-2xl sm:text-3xl mb-5 sm:mb-10 text-center uppercase font-semibold"
      >
        {{ route.params.committee }}
      </div>

      <div class="max-w-6xl text-sm sm:text-xl text-center">
        <div class="mb-2 sm:mb-5">
          {{ Committee.description }}
        </div>
        <div>
          {{ Committee.establishment }}
        </div>
      </div>
    </div>
    <div
      v-if="upcoming_events_data.length !== 0"
      class="flex flex-col items-center justify-center mb-24 py-5 px-3"
    >
      <div
        class="mb-16 text-[#fff] text-3xl sm:text-4xl font-semibold text-center"
      >
        Upcoming Events
      </div>
      <div class="flex flex-wrap gap-8 justify-start items-center">
        <img
          v-for="(event, index) in upcoming_events_data"
          :key="index"
          @click="
            () => {
              useModalStore().event_display = true;
              useModalStore().event_name = event.event_name;
              useModalStore().tag = event.tag;
              useModalStore().committee = event.committee;
              useModalStore().description = event.description;
              useModalStore().event_status = event.status;
              useModalStore().date = event.date;
              useModalStore().time = event.time;
              useModalStore().venue = event.venue;
              useModalStore().mode = event.mode;
            }
          "
          class="h-56 sm:h-64 md:h-80 cursor-pointer rounded-2xl border-2 border-[#000] shadow-md shadow-[#fff]/20 hover:scale-110 duration-300 ease-in-out"
          :src="upcoming_events"
          alt="events"
        />
      </div>
    </div>
    <div
      v-if="past_events_data.length !== 0"
      class="flex flex-col items-center justify-center mb-24 py-5 px-3"
    >
      <div
        class="mb-16 text-[#fff] text-3xl sm:text-4xl font-semibold text-center"
      >
        Past Events
      </div>
      <div class="flex flex-wrap gap-8 justify-center items-center">
        <img
          v-for="(event, index) in past_events_data"
          :key="index"
          @click="
            () => {
              useModalStore().event_display = true;
              useModalStore().event_name = event.event_name;
              useModalStore().tag = event.tag;
              useModalStore().committee = event.committee;
              useModalStore().description = event.description;
              useModalStore().event_status = event.status;
              useModalStore().date = event.date;
              useModalStore().time = event.time;
              useModalStore().venue = event.venue;
              useModalStore().mode = event.mode;
            }
          "
          class="h-56 sm:h-64 md:h-80 cursor-pointer rounded-2xl border-2 border-[#000] shadow-md shadow-[#fff]/20 hover:scale-110 duration-300 ease-in-out"
          :src="past_events"
          alt="events"
        />
      </div>
    </div>
    <div
      v-if="Committee.leads.length !== 0"
      class="flex flex-col items-center justify-center mt-10 mb-24"
    >
      <div
        class="mb-16 text-[#fff] text-3xl sm:text-4xl font-semibold text-center"
      >
        LEADS
      </div>

      <div class="flex flex-wrap gap-8 justify-center items-center w-full">
        <div
          v-for="(lead, index) in Committee.leads"
          class="flex flex-col items-center justify-end h-full bg-[#fff] rounded-2xl p-5 max-w-[18rem] w-full"
          :key="index"
        >
          <img
            class="h-28 w-28 sm:h-40 sm:w-40 rounded-full object-contain mb-5"
            :src="lead.src"
            alt="lead"
          />
          <div class="text-lg sm:text-xl font-semibold">
            {{ lead.name }}
          </div>
          <div class="text-sm sm:text-base">{{ lead.position }}</div>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center flex-wrap gap-8">
      <img
        v-for="(logo, index) in [Facebook, Twitter, Linkedin, Instagram]"
        :key="index"
        :src="logo"
        alt="log"
        class="w-8 sm:w-10 h-8 sm:h-10 cursor-pointer duration-500 hover:scale-125"
      />
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
