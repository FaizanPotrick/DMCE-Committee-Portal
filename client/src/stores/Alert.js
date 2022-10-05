import { defineStore } from "pinia";

export default defineStore({
  id: "alert",
  state: () => ({
    alerts: [],
  }),
  actions: {
    open_alert_box(type, message) {
      this.alerts.push({
        id: Date.now(),
        type: type,
        message: message,
      });
    },
    close_alert_box(alert_id) {
      this.alerts = this.alerts.filter((alert) => alert.id !== alert_id);
    },
  },
});
