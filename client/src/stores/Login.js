import { defineStore } from "pinia";
import useAlertStore from "./Alert";
import useLoadingStore from "./Loading";
import axios from "axios";

const { open_alert_box } = useAlertStore();

export default defineStore({
  id: "login",
  state: () => ({
    email_address: "",
    password: "",
  }),
  actions: {
    async login_fn(router) {
      useLoadingStore().loading = true;
      await axios({
        method: "put",
        url: "/api/login",
        data: {
          email_address: this.email_address,
          password: this.password,
        },
      })
        .then((res) => {
          open_alert_box(res.data.type, res.data.message);
          if (res.status === 200) {
            this.email_address = "";
            this.password = "";
          }
          router.push("/dashboard");
        })
        .catch((err) => {
          open_alert_box(err.response.data.type, err.response.data.message);
        });
      useLoadingStore().loading = false;
    },
  },
});
