<template>
    <section id="trending-flights">
      <div class="row">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Trending Flight Deals</h2>
            <p class="section-title-desc">Get the best flight deals, airline specials and promotions.</p>
          </div>

          <div class="flight-deals-wrapper">
            <FlightsDealsCard v-for="item in TrendingFlightDealsData" :key="item.id" :data="item" />
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { TrendingFlightDealsData } from '@/data/TrendingFlightDealsData.js'
import FlightsDealsCard from '@/components/HomePageComponents/FlightsDealsCard.vue'
export default {
    name: 'TrendingFlights',
    components: {
        FlightsDealsCard
    },
    data() {
        return {
            TrendingFlightDealsData
        }
    }
}
</script>

<style>

</style>