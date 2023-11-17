<template>
  <div id="home-view">
    <section id="home"></section>

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
import HotelFlightLists from '@/components/HomePageComponents/HotelFlightLists.vue'
import BookNowExplore from '@/components/HomePageComponents/BookNowExplore.vue'
import TrendingFlights from '@/components/HomePageComponents/TrendingFlights.vue'
import TripInspiration from '@/components/HomePageComponents/TripInspiration.vue'

export default {
  name: 'HomeView',
  components: {
    HotelFlightLists,
    BookNowExplore,
    TrendingFlights,
    TripInspiration
  },
}
</script>

<style src="../assets/css/home.css"></style>
