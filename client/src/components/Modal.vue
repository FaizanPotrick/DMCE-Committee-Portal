<script setup>
import useModalStore from "@/stores/Modal";
import useAlertStore from "@/stores/Alert";
import useLoadingStore from "@/stores/Loading";
import axios from "axios";

const { open_alert_box } = useAlertStore();

const event_register_fn = async () => {
  useLoadingStore().loading = true;
  await axios({
    method: "post",
    url: "/api/event/registration",
    data: {
      event_name: useModalStore().event_name,
      tag: useModalStore().tag,
      committee: useModalStore().committee,
      date: useModalStore().date,
      time: useModalStore().time,
      venue: useModalStore().venue,
      mode: useModalStore().mode,
    },
  })
    .then((res) => {
      open_alert_box(res.data.type, res.data.message);
      if (res.status === 200) {
        useModalStore().event_display = false;
        useModalStore().event_name = "";
        useModalStore().description = "";
        useModalStore().event_status = "";
        useModalStore().tag = "";
        useModalStore().committee = "";
        useModalStore().date = "";
        useModalStore().time = "";
        useModalStore().venue = "";
        useModalStore().mode = "";
      }
    })
    .catch((err) => {
      open_alert_box(err.response.data.type, err.response.data.message);
    });

  useLoadingStore().loading = false;
};
</script>
<template>
  <div
    :class="{ hidden: !useModalStore().event_display }"
    class="fixed top-0 right-0 left-0 bottom-0 z-50 w-full h-full flex justify-center items-center"
  >
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <div class="relative bg-[#fff] rounded-lg shadow">
        <div class="flex justify-between items-start p-4 rounded-t border-b">
          <div class="text-xl font-semibold text-gray-900">
            {{ useModalStore().event_name }}
          </div>
          <button
            type="button"
            @click="
              () => {
                useModalStore().event_display = false;
              }
            "
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="p-6 space-y-6">
          <div class="text-base leading-relaxed text-gray-500 mb-6">
            {{ useModalStore().description }}
          </div>
          <button
            v-if="useModalStore().event_status !== 'past'"
            class="text-[#8a2ce2] font-semibold hover:underline"
            @click="event_register_fn"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
