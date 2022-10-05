<script setup>
import useLoadingStore from "@/stores/Loading";
import axios from "axios";
import { ref, onMounted } from "vue";

const User = ref({
  name: "",
  email_address: "",
});
const Events = ref([]);

const event_register_fn = async () => {
  useLoadingStore().loading = true;
  const { data } = await axios.get("/api/dashboard");
  User.value = {
    name: `${data.user_name.last_name} ${data.user_name.first_name} ${data.user_name.middle_name}`,
    email_address: data.email_address,
  };
  Events.value = data.events.reverse();
  useLoadingStore().loading = false;
};

onMounted(() => {
  event_register_fn();
});
</script>
<template>
  <div class="min-h-screen">
    <header class="flex flex-col items-end mb-6 text-[#fff]">
      <div class="text-xl font-semibold capitalize">{{ User.name }}</div>
      <div class="text-sm">{{ User.email_address }}</div>
    </header>
    <div class="flex w-full rounded-xl shadow-md bg-[#fff] px-3">
      <table class="w-full divide-y divide-gray-300">
        <thead class="text-center sm:text-lg">
          <tr>
            <th class="py-5">Event</th>
            <th class="py-5">Committee</th>
            <th class="py-5">Date</th>
            <th class="py-5">Time</th>
            <th class="py-5">Venue</th>
            <th class="py-5">Mode</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="event in Events"
            :key="event.user_id"
            class="text-center font-semibold"
          >
            <td class="py-4 whitespace-nowrap capitalize">
              {{ event.event_name }}
            </td>
            <td class="py-4 whitespace-nowrap uppercase">{{ event.tag }}</td>
            <td class="py-4 whitespace-nowrap">{{ event.date }}</td>
            <td class="py-4 whitespace-nowrap">{{ event.time }}</td>
            <td class="py-4 whitespace-nowrap capitalize">{{ event.venue }}</td>
            <td class="py-4 whitespace-nowrap">
              <div
                class="px-2 py-1 font-semibold text-green-800 bg-green-100 rounded-full capitalize"
              >
                {{ event.mode }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
