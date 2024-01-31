<template>
    <section id="single-topics-top-section">
        <div class="row">
            <div class="container">
                <Breadcrumb :items="[
                    { path: '/', text: 'Home' },
                    { path: '/help', text: 'Help' },
                    { path: '/help/topics', text: 'All Topics' },
                    { path: '/help/topics/topic-page', text: topicPageTitle }
                ]" />

                <div class="tags-wrapper">
                    <span>Flight</span>  <i>•</i>  
                    <span>Cancel</span> <i>•</i>   
                    <span>Bookings</span> <i>•</i>  
                    <span>Manage</span>
                </div>
                <h2 class="page-title pry-color">{{ topicPageTitle }}</h2>
            </div>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: "SingleTopicTopSection",
    props: {
        topicPageTitle: {
            type: String,
            default: 'Help Topics'
        },
    },
    components: {
        Breadcrumb,
    }
}
</script>

<style></style>