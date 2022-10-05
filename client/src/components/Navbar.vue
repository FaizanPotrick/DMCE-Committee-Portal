<script setup>
import { useRoute, useRouter } from "vue-router";
import useNavbarStore from "@/stores/Navbar";
import useAlertStore from "@/stores/Alert";
import useLoadingStore from "@/stores/Loading";
import axios from "axios";
import DMCE from "@/assets/dmce-committee-portal.webp";
import Logout from "@/assets/logout.webp";
import Menu from "@/assets/menu.webp";
import Cross from "@/assets/cross.webp";
import { onBeforeUpdate, ref } from "vue";

const route = useRoute();
const router = useRouter();
const { open_alert_box } = useAlertStore();
const Token = ref(false);

const Toggle = (message) => {
  const menu = document.getElementById("menu");
  if (message === "open") {
    menu.classList.add("open");
  } else {
    menu.classList.remove("open");
  }
};

const logout_fn = async () => {
  useLoadingStore().loading = true;
  await axios({
    method: "delete",
    url: "/api/logout",
  })
    .then((res) => {
      open_alert_box(res.data.type, res.data.message);
      router.push("/login");
    })
    .catch((err) => {
      open_alert_box(err.response.data.type, err.response.data.message);
    });
  useLoadingStore().loading = false;
};
onBeforeUpdate(() => {
  Token.value = $cookies.get("token") === null ? false : true;
});
</script>
<template>
  <div
    class="fixed top-3 sm:top-5 bottom-3 sm:bottom-5 left-3 sm:left-5 bg-[#fff] w-16 sm:w-20 rounded-[50px] border-l-[10px] border-[#fff] overflow-hidden shadow-2xl duration-500 py-5 flex flex-col justify-between"
    id="menu"
  >
    <div>
      <div
        class="flex items-center w-full rounded-bl-[30px] rounded-tl-[30px] text-[#282828] my-1 mb-3 sm:mb-5"
      >
        <img
          :src="DMCE"
          alt="dmce-committee-portal"
          class="w-12 sm:w-[60px] h-12 sm:h-[60px] p-2 sm:p-3"
        />
        <div class="text-lg sm:text-xl whitespace-nowrap pl-[10px] w-full">
          DMCE Committee Portal
        </div>
      </div>
      <RouterLink
        v-for="(navbar, index) in useNavbarStore().navbar"
        :to="navbar.link"
        :key="index"
        :class="{
          'bg-[#8a2ce2] text-[#fff] active': route.meta.active === navbar.title,
          hidden: navbar.title === 'dashboard' && !Token,
        }"
        class="relative flex items-center w-full rounded-bl-[30px] rounded-tl-[30px] hover:bg-[#8a2ce2] text-[#282828] hover:text-[#fff] cursor-pointer my-1 group before after"
      >
        <img
          :src="navbar.src"
          alt="logo"
          class="w-12 sm:w-[60px] h-12 sm:h-[60px] p-2 sm:p-3 cursor-pointer duration-500 group-hover:scale-110"
        />
        <div
          class="text-lg sm:text-xl whitespace-nowrap pl-[10px] w-full capitalize"
        >
          {{ navbar.title }}
        </div>
      </RouterLink>
      <div
        v-if="Token"
        class="relative flex items-center w-full rounded-bl-[30px] rounded-tl-[30px] hover:bg-[#8a2ce2] text-[#282828] hover:text-[#fff] cursor-pointer my-1 group before after"
        @click="logout_fn"
      >
        <img
          :src="Logout"
          alt="logo"
          class="w-12 sm:w-[60px] h-12 sm:h-[60px] p-2 sm:p-3 cursor-pointer duration-500 group-hover:scale-110"
        />
        <div class="text-lg sm:text-xl whitespace-nowrap pl-[10px] w-full">
          Log out
        </div>
      </div>
    </div>
    <div class="toggle flex justify-between mr-2.5">
      <img
        :src="Menu"
        alt="menu"
        class="w-12 sm:w-[60px] h-12 sm:h-[60px] p-2 sm:p-3 cursor-pointer duration-500 hover:scale-110"
        @click="Toggle('open')"
      />
      <img
        :src="Cross"
        alt="cross"
        class="w-12 sm:w-[60px] h-12 sm:h-[60px] p-2 sm:p-3 cursor-pointer duration-500 hover:scale-110"
        @click="Toggle('close')"
      />
    </div>
  </div>
</template>
<style>
.open {
  @apply w-[320px] rounded-[20px];
}

.before::before,
.after::after {
  content: "";
  @apply absolute right-0 w-[20px] h-[20px] bg-transparent;
}

.before:hover::before,
.active.before::before {
  box-shadow: 7.5px 7.5px 0 7.5px #8a2ce2;
  @apply -top-5 rounded-br-[20px];
}

.after:hover::after,
.active.after::after {
  box-shadow: 7.5px -7.5px 0 7.5px #8a2ce2;
  @apply -bottom-5 rounded-tr-[20px];
}

.open .toggle img:first-child {
  @apply opacity-0 cursor-default;
}

.toggle img:last-child {
  @apply opacity-0 cursor-default;
}

.open .toggle img:last-child {
  @apply opacity-100 cursor-pointer;
}
</style>
