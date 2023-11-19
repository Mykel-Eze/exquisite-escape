<template>
    <div class="select-field rel" :class="divClass">
        <select class="select-inp">
            <!-- <option value="">{{ label }}</option> -->
            <option v-for="option in options" :value="option.value" :key="option.index">{{ option.label }}</option>
        </select>
        <label>{{ label }}</label>
        <SvgIcons icon="caret" />
    </div>
</template>

<script>
import M from "materialize-css";
import SvgIcons from "@/components/icons/AllIcons.vue";
export default {
    name: 'SelectField',
    components: {
        SvgIcons
    },
    props: {
        options: {
            type: Array,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        divClass: {
            type: String,
            required: false
        }
    },
    mounted() {
        const elemsDropdown = document.querySelectorAll('select');
        M.FormSelect.init(elemsDropdown);
    }
}
</script>

<style>

</style>