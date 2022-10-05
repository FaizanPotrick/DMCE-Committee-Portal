import { defineStore } from "pinia";
import Home from "@/assets/home.webp";
import Dashboard from "@/assets/dashboard.webp";
import Committees from "@/assets/committees.webp";
import Events from "@/assets/events.webp";
import Registration from "@/assets/registration.webp";
import Login from "@/assets/login.webp";
import Contact from "@/assets/contact.webp";

export default defineStore({
  id: "navbar",
  state: () => ({
    navbar: [
      {
        title: "home",
        src: Home,
        link: "/",
      },
      {
        title: "dashboard",
        src: Dashboard,
        link: "/dashboard",
      },
      {
        title: "committees",
        src: Committees,
        link: "/committees",
      },
      {
        title: "events",
        src: Events,
        link: "/events",
      },
      {
        title: "registration",
        src: Registration,
        link: "/registration",
      },
      {
        title: "log in",
        src: Login,
        link: "/login",
      },
      {
        title: "contact",
        src: Contact,
        link: "/contact",
      },
    ],
  }),
  actions: {},
});
