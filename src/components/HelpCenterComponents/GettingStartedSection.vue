<template>
  <section id="getting-started-section">
    <div class="row">
        <div class="container">
            <div class="section-title-header flex-div justify-between">
                <h3 class="section-title">Guides for getting started</h3>
                <router-link to="/#" class="section-title-link flex-div gap-[10px]">
                    <span>Browse all topics</span>
                    <img src="@/assets/images/chevron-right.svg" alt="chevron-right" class="right-arr">
                </router-link>
            </div>

            <div class="gss-wrapper">
                <router-link to="/#" class="gss-block hover-scale">
                    <div class="gss-img-wrapper">
                        <img src="@/assets/images/gs-1.png" alt="gs" class="gss-img">
                    </div>
                    <p class="gss-text">Check your flight information</p>
                </router-link>

                <router-link to="/#" class="gss-block hover-scale">
                    <div class="gss-img-wrapper">
                        <img src="@/assets/images/gs-2.png" alt="gs" class="gss-img">
                    </div>
                    <p class="gss-text">Compare package prices and selections</p>
                </router-link>

                <router-link to="/#" class="gss-block hover-scale">
                    <div class="gss-img-wrapper">
                        <img src="@/assets/images/gs-3.png" alt="gs" class="gss-img">
                    </div>
                    <p class="gss-text">Managing all your bookings</p>
                </router-link>

                <router-link to="/#" class="gss-block hover-scale">
                    <div class="gss-img-wrapper">
                        <img src="@/assets/images/gs-4.png" alt="gs" class="gss-img">
                    </div>
                    <p class="gss-text">Correct or update your account information</p>
                </router-link>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "GettingStartedSection",
}
</script>

<style>

</style>