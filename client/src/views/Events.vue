<script setup>
import { onMounted, ref } from "vue";
import useModalStore from "@/stores/Modal";
import Upcoming_Events from "@/stores/Upcoming_Events.json";
import upcoming_events from "@/assets/upcoming_events.webp";

onMounted(() => {
  const Balls = document.getElementById("balls");
  const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

  const balls = [];
  for (let i = 0; i < 100; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.position = "absolute";
    ball.style.borderRadius = "50%";
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.zIndex = 0;
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.opacity = 0.7;
    ball.style.width = `${Math.random()}rem`;
    ball.style.height = ball.style.width;
    balls.push(ball);
    Balls.append(ball);
  }

  balls.forEach((el, i) => {
    const to = {
      x: Math.random() * (i % 2 === 0 ? -11 : 11),
      y: Math.random() * 12,
    };

    el.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: `translate(${to.x}rem, ${to.y}rem)` },
      ],
      {
        duration: (Math.random() + 1) * 2000,
        direction: "alternate",
        fill: "both",
        iterations: Infinity,
        easing: "ease-in-out",
      }
    );
  });
});
</script>
<template>
  <div id="balls">
    <div class="z-10">
      <div
        class="mb-16 text-[#fff] text-4xl sm:text-5xl md:text-6xl font-semibold text-center"
      >
        EVENTS
      </div>

      <div class="flex flex-wrap gap-8 justify-center">
        <img
          v-for="(event, index) in Upcoming_Events"
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
  </div>
</template>
