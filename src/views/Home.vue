<template>
  <div id="home-view">
    <!--=== Landing Section ===-->
    <LandingSection />
    <!--=== end of Landing Section ===-->

    <!--=== Trip-Inspiration Section ===-->
    <TripInspiration />
    <!--=== end of Trip-Inspiration Section ===-->

    <!--=== Trending-Flights Section ===-->
    <TrendingFlights />
    <!--=== end of Trending-Flights Section ===-->

    <!--=== Book-Now-Explore Section ===-->
    <BookNowExplore />
    <!--=== end of Book-Now-Explore Section ===-->
    
    <!--=== Hotel-Flights-Lists Section ===-->
    <HotelFlightLists />
    <!--=== end of Hotel-Flights-Lists Section ===-->
  </div>
</template>

<script>
import LandingSection from '@/components/HomePageComponents/LandingSection.vue'
import TripInspiration from '@/components/HomePageComponents/TripInspiration.vue'
import TrendingFlights from '@/components/HomePageComponents/TrendingFlights.vue'
import BookNowExplore from '@/components/HomePageComponents/BookNowExplore.vue'
import HotelFlightLists from '@/components/HomePageComponents/HotelFlightLists.vue'

export default {
  name: 'HomeView',
  components: {
    LandingSection,
    TripInspiration,
    TrendingFlights,
    BookNowExplore,
    HotelFlightLists, 
  },
}
</script>

<style src="../assets/css/home.css"></style>
