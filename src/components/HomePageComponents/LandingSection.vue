<template>
    <section id="landing-section" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="row full-height">
            <div class="container glossy-bg-wrapper full-height">
                <div class="glossy-bg">
                    <div class="landing-section-header">
                        <div class="landing-section-title-desc">Explore, Journey, Discover, Adventure</div>
                        <h4 class="landing-section-title">Discover a new place. </h4>
                    </div>
                    <div class="tab-buttons-form-wrapper mt-[30px]">
                        <div class="tab-buttons flex-div gap-[10px]">
                            <button @click="activeTab = 'flights'" class="flex-div gap-[10px]" :class="{ 'active': activeTab === 'flights' }">
                                <span>Book Flights</span>
                                <img src="@/assets/images/plane-icon.svg" alt="plane-icon">
                            </button>
                            <button @click="activeTab = 'hotels'" class="flex-div gap-[10px]" :class="{ 'active': activeTab === 'hotels' }">
                                <span>Find Hotels</span>
                                <img src="@/assets/images/hotel-icon.svg" alt="hotel-icon">
                            </button>
                            <button @click="activeTab = 'tours'" class="flex-div gap-[10px]" :class="{ 'active': activeTab === 'tours' }">
                                <span>Go for Tour</span>
                                <img src="@/assets/images/beach-icon.svg" alt="beach-icon">
                            </button>
                            <button @click="activeTab = 'transfer'" class="flex-div gap-[10px]" :class="{ 'active': activeTab === 'transfer' }">
                                <span>Request for Transfer</span>
                                <img src="@/assets/images/car-icon.svg" alt="car-icon">
                            </button>
                        </div>

                        <div class="tab-form-wrapper">
                            <FlightTab v-if="activeTab === 'flights'" />

                            <HotelTab v-if="activeTab === 'hotels'" />

                            <TourTab v-if="activeTab === 'tours'" />

                            <TransferTab v-if="activeTab === 'transfer'" />

                            <!-- Additional tab content for tours and transfer -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import FlightTab from "@/components/HomePageComponents/FlightTab.vue";
import HotelTab from "@/components/HomePageComponents/HotelTab.vue";
import TourTab from "@/components/HomePageComponents/TourTab.vue";
import TransferTab from "@/components/HomePageComponents/TransferTab.vue";

export default {
    name: 'LandingSection',
    components: {
        FlightTab, HotelTab, TourTab, TransferTab
    },
    data() {
        return {
            activeTab: 'flights'
        }
    },
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        backgroundImage() {
            if (this.activeTab === 'flights') {
                return '/banners/banner-flight.jpg';
            } else if (this.activeTab === 'hotels') {
                return '/banners/banner-hotel.jpg';
            } else if (this.activeTab === 'tours') {
                return '/banners/banner-tour.jpg';
            } else if (this.activeTab === 'transfer') {
                return '/banners/banner-transfer.jpg';
            }
        }
    }
}
</script>

<style>
/* Add your custom styles here */
#landing-section {
    background-color: #000000;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
