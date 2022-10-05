import { defineStore } from "pinia";
import useAlertStore from "./Alert";
import useLoadingStore from "./Loading";
import axios from "axios";

const { open_alert_box } = useAlertStore();

export default defineStore({
  id: "contact",
  state: () => ({
    name: "",
    email_address: "",
    message: "",
  }),
  actions: {
    async contact_fn() {
      useLoadingStore().loading = true;
      await axios({
        method: "post",
        url: "/api/contact",
        data: {
          name: this.name,
          email_address: this.email_address,
          message: this.message,
        },
      })
        .then((res) => {
          open_alert_box(res.data.type, res.data.message);
          if (res.status === 200) {
            this.name = "";
            this.email_address = "";
            this.message = "";
          }
        })
        .catch((err) => {
          open_alert_box(err.response.data.type, err.response.data.message);
        });
      useLoadingStore().loading = false;
    },
  },
});
