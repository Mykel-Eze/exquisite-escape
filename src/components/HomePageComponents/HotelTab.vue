<template>
    <form action="#" class="search-inputs flex items-end">
        <div class="input-field-wrapper">
            <div class="purpose-wrapper flex-div gap-[20px] mb-[30px]">
                <span>What is the purpose of your travel?</span>
                <div class="purpose-radio-wrapper flex-div gap-[20px]">
                    <label>
                        <input type="radio" name="travel-purpose" id="business" class="with-gap">
                        <span>Business</span>
                    </label> 
                    <label>
                        <input type="radio" name="travel-purpose" id="leisure" class="with-gap">
                        <span>Leisure</span>
                    </label>
                </div>
            </div>
            <div class="flex-div gap-3">
                <InputField 
                    label="Going to?"
                    placeholder="Destination, city or hotel name"
                    id="destination-city"
                    type="text"
                    inputClass="ls-inp-field"
                    divClass="input-white-wrapper long-inp-wrapper"
                />
                <div class="input-white-wrapper flex-div flex-row">
                    <InputField 
                        label="Check-in"
                        :defaultValue="currentDate"
                        id="departure-date"
                        type="text"
                        inputClass="ls-inp-field datepicker"
                    />
                    <span class="range-divider">-</span>
                    <InputField 
                        label="Check-out"
                        :defaultValue="currentDate"
                        id="return-date"
                        type="text"
                        inputClass="ls-inp-field datepicker"
                    />
                </div>
                <InputField 
                    label="Rooms and guests"
                    defaultValue="1 Room, 1 Guest "
                    id="rooms-and-guests"
                    type="text"
                    inputClass="ls-inp-field"
                    divClass="input-white-wrapper"
                />
            </div>
        </div>
        <div class="tab-form-btn-wrapper">
            <div class="flex-div justify-center gap-[10px] text-[18px] mb-[20px]">
                <img src="../../assets/images/best-check.svg" alt="best-check" class="best-check">
                <span>Best Deal Guaranteed </span>
            </div>
            <button class="tab-form-btn flex-div gap-3">
                <span>Search Hotels</span>
                <img src="../../assets/images/hotel-icon.svg" alt="hotel-icon">
            </button>
        </div>
    </form>
</template>

<script>
import M from "materialize-css";

import InputField from "@/components/InputField.vue";

export default {
    name: 'HotelTab',
    components: {
        InputField,
    },
    data() {
        return {
            currentDate: this.getCurrentDate()
        }
    },
    mounted(){
        const elemsDatepicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elemsDatepicker, {
            autoClose: true,
            format: 'mmm dd',
            minDate: new Date(),
        });
    },
    methods: {
        getCurrentDate() {
            const date = new Date();
            const month = date.toLocaleString('default', { month: 'short' });
            const day = date.getDate().toString().padStart(2, '0');
            return `${month} ${day}`;
        },
    }
}
</script>

<style>

</style>