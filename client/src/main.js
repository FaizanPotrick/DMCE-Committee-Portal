import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import VueCookies from "vue-cookies";
import axios from "axios";
import App from "./App.vue";
import useLoadingStore from "@/stores/Loading";

const app = createApp(App);

const Authentication = async () => {
  useLoadingStore().loading = true;
  const { data } = await axios.get("/api/authentication");
  useLoadingStore().loading = false;
  if (!data) {
    return { path: "/login" };
  }
};

app.use(createPinia());
app.use(VueCookies);
app.use(
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        meta: {
          active: "home",
        },
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          active: "dashboard",
        },
        beforeEnter: [Authentication],
        component: () => import("@/views/Dashboard.vue"),
      },
      {
        path: "/committees",
        name: "committees",
        meta: {
          active: "committees",
        },
        component: () => import("@/views/Committees.vue"),
      },
      {
        path: "/committees/:committee",
        name: "committee",
        meta: {
          active: "committees",
        },
        component: () => import("@/views/Committee.vue"),
      },
      {
        path: "/events",
        name: "events",
        meta: {
          active: "events",
        },
        component: () => import("@/views/Events.vue"),
      },
      {
        path: "/registration",
        name: "registration",
        meta: {
          active: "registration",
        },
        component: () => import("@/views/Registration.vue"),
      },
      {
        path: "/login",
        name: "login",
        meta: {
          active: "log in",
        },
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        meta: {
          active: "contact",
        },
        component: () => import("@/views/Contact.vue"),
      },
      {
        path: "/chatbot",
        name: "chatbot",
        component: () => import("@/views/ChatBot.vue"),
      },
      {
        path: "/:catchAll(.*)",
        name: "page not found",
        component: () => import("@/components/PageNotFound.vue"),
      },
    ],
  })
);

app.mount("#app");
