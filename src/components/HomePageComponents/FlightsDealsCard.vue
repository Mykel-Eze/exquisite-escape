<template>
  <div class="flight-deals-card">
    <div class="flex-div justify-between mb-[70px]">
      <div class="city-name-wrapper">
        <div class="city-short-name">{{ data.departure.cityShortName }}</div>
        <span class="city-name">{{ data.departure.cityName }}</span>
      </div>
      <Svgicons icon="flight" class="flight-icon" />
      <div class="city-name-wrapper">
        <div class="city-short-name">{{ data.arrival.cityShortName }}</div>
        <span class="city-name">{{ data.arrival.cityName }}</span>
      </div>
    </div>
    <div class="flex-div flex-col gap-[10px]">
      <div class="airline flex-div justify-center gap-[10px]">
        <img :src="data.airline.logo" :alt="data.airline.name">
        <span>{{ data.airline.name }}</span>
      </div>
      <div class="flight-dates text-center">
        <span>{{ data.departure.date }}</span> - <span>{{ data.arrival.date }}</span>
      </div>
      <div class="flight-price-btn-wrapper">
        <a href="#" class="flight-price-btn flex-div gap-2 justify-center hover-scale">
          <span class="flight-price">{{ data.price }}</span>
          <img src="@/assets/images/lock.svg" alt="lock" class="lock-icon">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Svgicons from "@/components/icons/AllIcons.vue";
export default {
  name: "FlightDealsCard",
  components: {
    Svgicons
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
}
</script>

<style></style>
