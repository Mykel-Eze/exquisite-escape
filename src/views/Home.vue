<template>
  <div id="home-view">
    <div class="row">
      <div class="container">
        
        <HotelFlightLists />
      </div>
    </div>
  </div>
</template>

<script>
import HotelFlightLists from '@/components/HotelFlightLists.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {HotelFlightLists}
}
</script>
