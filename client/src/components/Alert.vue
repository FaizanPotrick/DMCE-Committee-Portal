<script setup>
import useAlertStore from "@/stores/Alert";
</script>
<template>
  <div class="fixed bottom-0 right-0 z-50">
    <div
      v-for="alert in useAlertStore().alerts"
      :key="alert.id"
      :class="{
        'text-red-800': alert.type === 'error',
        'text-green-800': alert.type === 'success',
      }"
      class="w-[20rem] h-[7vh] px-4 m-5 flex justify-between items-center rounded-lg font-medium bg-[#fff] shadow-md shadow-[#fff]/10 border"
    >
      <div>
        {{ alert.message }}
      </div>
      <button
        class="h-8 w-8 ml-3 text-[#000] hover:text-gray-800"
        @click="useAlertStore().close_alert_box(alert.id)"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
