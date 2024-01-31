<template>
    <div class="breadcrumb-wrapper">
        <ul class="breadcrumb">
            <li v-for="(item, index) in items" :key="index" class="breadcrumb-item">
                <router-link :to="item.path">{{ item.text }}</router-link>
                <span>/</span>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'BreadCrumb',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
}
</script>
