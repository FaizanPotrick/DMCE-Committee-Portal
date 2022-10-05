import { defineStore } from "pinia";
import useAlertStore from "./Alert";
import useLoadingStore from "./Loading";
import axios from "axios";

const { open_alert_box } = useAlertStore();

export default defineStore({
  id: "registration",
  state: () => ({
    first_name: "",
    middle_name: "",
    last_name: "",
    email_address: "",
    phone_no: "",
    gr_no: "",
    password: "",
  }),
  actions: {
    async register_fn(router) {
      useLoadingStore().loading = true;
      await axios({
        method: "post",
        url: "/api/registration",
        data: {
          user_name: {
            first_name: this.first_name,
            middle_name: this.middle_name,
            last_name: this.last_name,
          },
          email_address: this.email_address,
          phone_no: this.phone_no,
          gr_no: this.gr_no,
          password: this.password,
        },
      })
        .then((res) => {
          open_alert_box(res.data.type, res.data.message);
          if (res.status === 200) {
            this.first_name = "";
            this.middle_name = "";
            this.last_name = "";
            this.email_address = "";
            this.phone_no = "";
            this.gr_no = "";
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
