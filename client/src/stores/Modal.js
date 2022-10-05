import { defineStore } from "pinia";

export default defineStore({
  id: "modal",
  state: () => ({
    event_display: false,
    event_name: "",
    tag: "",
    committee: "",
    description: "",
    event_status: "",
    date: "",
    time: "",
    venue: "",
    mode: "",
  }),
  actions: {},
});
