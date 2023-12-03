<template>
  <section id="discover-new-places">
    <div class="row">
        <div class="container">
            <div class="dnps-wrapper flex-div justify-between">
                <div class="dnps-txt-side">
                    <h3 class="dnps-title">Travel and discover new places</h3>
                    <div class="dnps-title-desc">
                        Explore, Journey, Discover, Adventure with Exquisite Escape
                    </div>
                </div>
                <div class="dnps-buttons-side flex-div">
                    <router-link to="#">
                        <button class="dnps-btn flex-div">
                            <span>Signup</span>
                            <img src="@/assets/images/flight-signup.svg" alt="flight-signup" class="dnps-btn-icon">
                        </button>
                    </router-link>

                    <router-link to="#">
                        <button class="dnps-btn flex-div">
                            <span>Become an Affiliate </span>
                            <img src="@/assets/images/user-circle-add-2.svg" alt="user-circle-add-2" class="dnps-btn-icon">
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "DiscoverNewPlacesSection",
}
</script>

<style>

</style>