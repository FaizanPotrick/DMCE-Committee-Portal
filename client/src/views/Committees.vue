<script setup>
import useCommitteesStore from "@/stores/Committees";
import { onMounted } from "vue";

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
        COMMITTEES
      </div>
      <div class="flex justify-center flex-wrap gap-8">
        <RouterLink
          :to="committee.link"
          v-for="(committee, index) in useCommitteesStore().committees"
          :key="index"
          class="overflow-hidden max-w-[18rem] flex flex-col justify-between items-center w-full bg-[#fff] rounded-3xl p-5 shadow-inner min-h-full group cursor-pointer hover:scale-110 duration-500"
        >
          <div
            class="picture relative z-10 w-32 md:w-38 mb-5 before:absolute before:left-0 before:right-0 before:bottom-[135%] before:w-full before:h-0 before:bg-[#8a2ce2] before:rounded-full before:duration-500 before:ease-in-out before:scale-[3] group-hover:before:h-full"
          >
            <img
              :src="committee.src"
              class="w-full rounded-full duration-500 ease-in-out group-hover:scale-90"
            />
          </div>
          <div class="text-center font-semibold">
            <div class="text-xl sm:text-2xl">{{ committee.tag }}</div>
            <div class="text-sm text-[#4e5052]">
              {{ committee.name }}
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
