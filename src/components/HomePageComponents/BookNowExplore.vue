<template>
    <section id="book-now-explore">
      <div class="row">
        <div class="container">
          <div class="bne-wrapper">
            <div class="bne-block bne-book-now">
              <div class="bne-block-txt">
                <span>Book a transfer for your trip </span>
                <router-link to="/#" class="flex-div gap-[10px]">
                  <span>Book now</span>
                  <img src="@/assets/images/car-icon-2.svg" alt="car" class="bne-btn-icon">
                </router-link>
              </div>
            </div>
            <div class="bne-block bne-explore">
              <div class="bne-block-txt">
                <span>Things to do on your trip</span>
                <router-link to="/#" class="flex-div gap-[10px]">
                  <span>Explore Tour</span>
                  <img src="@/assets/images/car-icon-2.svg" alt="car" class="bne-btn-icon">
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'BookNowExplore',
    data() {
        return {
        
        }
    }
}
</script>

<style>

</style>