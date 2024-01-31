<template>
    <section id="help-topics-top-section">
        <div class="row">
            <div class="container">
                <Breadcrumb :items="[
                    { path: '/', text: 'Home' },
                    { path: '/help', text: 'Help' },
                    { path: '/help/topics', text: helpPageTitle }
                ]"/>

                <h2 class="page-title pry-color">{{ helpPageTitle }}</h2>

                <div class="page-title-desc">{{ helpPageTitleDesc }}</div>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: "HelpTopicsTopSection",
    props: {
        helpPageTitle: {
            type: String,
            default: 'Help Topics'
        },
        helpPageTitleDesc: {
            type: String,
            default: 'Explore our full library of help topics'
        }
    },
    components: {
        Breadcrumb,
    }
}
</script>

<style>

</style>