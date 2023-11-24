<template>
    <form action="#" class="search-inputs flex items-end">
        <div class="input-field-wrapper">
            <div class="select-field-wrapper flex-div gap-[10px] mb-[30px]">
                <SelectField 
                    :options="[
                        { value: 'one-way', label: 'One Way' },
                        { value: 'round-trip', label: 'Round Trip' },
                        { value: 'multi-city', label: 'Multi City' }
                    ]"
                    label=""
                />
                <SelectField 
                    :options="[
                        { value: '1 passenger', label: '1 Passenger' },
                        { value: '2 passenger', label: '2 Passenger' },
                        { value: '3 passenger', label: '3 Passenger' }
                    ]"
                    label=""
                />
            </div>
            <div class="flex-div gap-3 grid-sm-break">
                <div class="flex-div gap-3 rel">
                    <InputField 
                        label="From where?"
                        placeholder="Terminal, Hotel"
                        id="depature"
                        type="text"
                        inputClass="ls-inp-field"
                        divClass="input-white-wrapper medium-inp-wrapper"
                    />
                    <img src="../../assets/images/transfer-arrow.svg" alt="transfer-arrow" class="transfer-arrow">
                    <InputField 
                        label="To where?"
                        placeholder="Terminal, Hotel"
                        id="destination"
                        type="text"
                        inputClass="ls-inp-field"
                        divClass="input-white-wrapper medium-inp-wrapper"
                    />
                </div>
                <InputField 
                    label="Leaving on"
                    :defaultValue="currentDate"
                    id="leaving-date"
                    type="text"
                    inputClass="ls-inp-field datepicker"
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
    name: 'TransferTab',
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