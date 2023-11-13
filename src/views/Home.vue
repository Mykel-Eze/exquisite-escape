<template>
  <div id="home-view">
    <section id="home"></section>

    <!--=== Trending Flights Section ===-->
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
    <!--=== end of Trending Flights Section ===-->

    <!--=== Book-Now-Explore Section ===-->
    <section id="book-now-explore">
      <div class="row">
        <div class="container">
          <div class="bne-wrapper">
            <div class="bne-block bne-book-now">
              <div class="bne-block-txt">
                <span>Book a transfer for your trip </span>
                <router-link to="/#" class="flex-div gap-[10px]">
                  <span>Book now</span>
                  <img src="../assets/images/car-icon-2.svg" alt="car" class="bne-btn-icon">
                </router-link>
              </div>
            </div>
            <div class="bne-block bne-explore">
              <div class="bne-block-txt">
                <span>Things to do on your trip</span>
                <router-link to="/#" class="flex-div gap-[10px]">
                  <span>Explore Tour</span>
                  <img src="../assets/images/car-icon-2.svg" alt="car" class="bne-btn-icon">
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Book-Now-Explore Section ===-->
    
    <HotelFlightLists />
  </div>
</template>

<script>
import HotelFlightLists from '@/components/HotelFlightLists.vue'
import { TrendingFlightDealsData } from '@/data/TrendingFlightDealsData.js'
import FlightsDealsCard from '@/components/FlightsDealsCard.vue'

export default {
  name: 'HomeView',
  components: {
    HotelFlightLists, FlightsDealsCard
  },
  data() {
    return {
      TrendingFlightDealsData
    }
  }
}
</script>

<style src="../assets/css/home.css"></style>
