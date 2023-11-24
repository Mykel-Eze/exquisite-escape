<template>
    <form action="#" class="search-inputs flex items-end">
        <div class="input-field-wrapper">
            <div class="select-field-wrapper flex-div gap-[20px] mb-[30px]">
                <SelectField 
                    :options="[
                        { value: '1 Night', label: '1 Night' },
                        { value: '2 Nights', label: '2 Nights' },
                        { value: '3 Nights', label: '3 Nights' }
                    ]"
                    label=""
                />
                <SelectField 
                    :options="[
                        { value: '1 Tourist', label: '1 Tourist' },
                        { value: '2 Tourists', label: '2 Tourists' },
                        { value: '3 Tourists', label: '3 Tourists' }
                    ]"
                    label=""
                />
            </div>
            <div class="flex-div gap-3 grid-sm-break">
                <InputField 
                    label="Going to?"
                    placeholder="Country"
                    id="country"
                    type="text"
                    inputClass="ls-inp-field"
                    divClass="input-white-wrapper long-inp-wrapper"
                />
                <InputField 
                    label="Things to do at?"
                    placeholder="Province/State"
                    id="things-to-do"
                    type="text"
                    inputClass="ls-inp-field"
                    divClass="input-white-wrapper"
                />
                <div class="input-white-wrapper flex-div flex-row">
                    <InputField 
                        label="Leaving on"
                        :defaultValue="currentDate"
                        id="departure-date"
                        type="text"
                        inputClass="ls-inp-field datepicker"
                    />
                    <span class="range-divider">-</span>
                    <InputField 
                        label="Returning on"
                        :defaultValue="currentDate"
                        id="return-date"
                        type="text"
                        inputClass="ls-inp-field datepicker"
                    />
                </div>
            </div>
        </div>
        <div class="tab-form-btn-wrapper">
            <div class="flex-div justify-center gap-[10px] text-[18px] mb-[20px]">
                <img src="../../assets/images/best-check.svg" alt="best-check" class="best-check">
                <span>Best Deal Guaranteed </span>
            </div>
            <button class="tab-form-btn flex-div gap-3">
                <span>Search Tour</span>
                <img src="../../assets/images/beach-icon.svg" alt="beach-icon">
            </button>
        </div>
    </form>
</template>

<script>
import M from "materialize-css";

import InputField from "@/components/InputField.vue";
import SelectField from '../SelectField.vue';

export default {
    name: 'TourTab',
    components: {
        InputField, SelectField
    },
    data() {
        return {
            currentDate: this.getCurrentDate()
        }
    },
    mounted() {
        const datepicker = document.querySelectorAll('.datepicker');
        M.Datepicker.init(datepicker, {
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