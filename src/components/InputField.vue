<template>
    <div class="input-field-div" :class="divClass">
        <label :for="id">{{ label }}</label>
        <input :type="type" :id="id" :placeholder="placeholder" :class="inputClass" :value="defaultValue">
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        id: String,
        placeholder: String,
        type: String,
        inputClass: String,
        divClass: String,
        label: String,
        defaultValue: String
    }
}
</script>

<style>

</style>