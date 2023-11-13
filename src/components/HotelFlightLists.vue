<template>
  <section id="domestic-flight-list">
    <div class="row">
        <div class="container">
            <div class="dfl-wrapper">
                <div class="dfl-tabs-wrapper">
                    <ul class="tabs" ref="tabs">
                        <!-- <img src="../assets/images/tab-arrow-left.svg" alt="prev" class="tab-nav-icon tabs-prev-icon"> -->
                        <li class="tab">
                            <a href="#domestic-hotels-deals">Domestic Hotel Deals</a>
                        </li>
                        <li class="tab">
                            <a href="#international-hotels-deals">International Hotel Deals</a>
                        </li>
                        <li class="tab">
                            <a href="#domestic-flight-deals">Top Domestic Flights</a>
                        </li>
                        <li class="tab">
                            <a href="#international-flight-deals">Top International Flights</a>
                        </li>
                        <li class="tab">
                            <a href="#vacation-packages-deals">Vacation Packages</a>
                        </li>
                        <li class="tab">
                            <a href="#rentals-transfer-deals">Rentals & Transfer</a>
                        </li>

                        <!-- <img src="../assets/images/tab-arrow-right.svg" alt="next" class="tab-nav-icon tabs-next-icon"> -->
                    </ul>
                </div>

                <div class="dfl-content-wrapper">
                    <div id="domestic-hotels-deals">
                        <ul class="deal-wrapper">
                            <li v-for="item in domesticHotels" :key="item.id">
                                {{ item.name }}
                            </li>
                            <li v-for="item in domesticHotels" :key="item.id">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                    <div id="international-hotels-deals">
                    <ul class="deal-wrapper">
                            <li v-for="item in internationHotels" :key="item.id">
                                {{ item.name }}
                            </li>
                    </ul>
                    </div>
                    <div id="domestic-flight-deals">
                        <ul class="deal-wrapper">
                            <li v-for="item in domesticFlights" :key="item.id">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                    <div id="international-flight-deals">
                        <ul class="deal-wrapper">
                            <li v-for="item in internationalFlights" :key="item.id">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                    <div id="vacation-packages-deals">
                        <ul class="deal-wrapper">
                            <li v-for="item in otherData" :key="item.id">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                    <div id="rentals-transfer-deals">
                        <ul class="deal-wrapper">
                            <li v-for="item in otherData" :key="item.id">
                                {{ item.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import M from "materialize-css";
import { 
    domesticHotels, 
    internationHotels, 
    internationalFlights, 
    domesticFlights, 
    otherData 
} from '@/data/DealsData.js';

export default {
    name: 'DomesticFlightLists',
    data() {
        return {
            domesticHotels, internationHotels, internationalFlights, domesticFlights, otherData,
        };
    },
    mounted() {
        M.AutoInit();
    },
    methods: {}
}
</script>

<style scoped src="..\assets\css\hotels-flights-lists.css"></style>

<style>
    section#domestic-flight-list ul.tabs .indicator {
        display: none;
    }
</style>
