<template>
  <section id="explore-more-section">
    <div class="row">
        <div class="container">
            <div class="section-title-header">
                <h3 class="section-title text-white"><b>Explore more</b> </h3>
            </div>

            <div class="explore-more-wrapper">
                <router-link to="" class="explore-more-block hover-scale">
                    <div class="explore-more-img-wrapper">
                        <img src="@/assets/images/statue-of-liberty.png" alt="statue-of-liberty" class="explore-more-img">
                    </div>
                    <div class="explore-more-text-wrapper">
                        <span>This Is Why New York Is So Famous & Popular</span>
                    </div>
                </router-link>
                <router-link to="" class="explore-more-block hover-scale">
                    <div class="explore-more-img-wrapper">
                        <img src="@/assets/images/beach-01.png" alt="beach" class="explore-more-img">
                    </div>
                    <div class="explore-more-text-wrapper">
                        <span>Is This The Worst Time to Go To Dominican Republic? Find Out</span>
                    </div>
                </router-link>
                <div class="explore-more-block-2">
                    <div class="explore-block-2-title">Need to get in touch?</div>
                    <div class="explore-block-2-desc">
                        We’ll start with some questions and get you to the right place.
                    </div>
                    <router-link to="#" class="explore-block-2-btn-wrapper">
                        <button class="explore-block-2-btn">Contact us</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "explore-more-section"
}
</script>

<style>

</style>