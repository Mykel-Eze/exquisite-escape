<template>
  <div class="topic-block">
    <div class="topic-block-title">{{ topicBlockTitle }}</div>
    <ul class="topic-links-wrapper">
        <li>
            <router-link to="/help/topics/topic-page" class="topic-link">Getting started on Exquisite Escape</router-link>
        </li>
        <li>
            <router-link to="/help/topics/topic-page" class="topic-link">Things to know about Exquisite Escape</router-link>
        </li>
        <li>
            <router-link to="/help/topics/topic-page" class="topic-link">How our search engine works</router-link>
        </li>
        <li>
            <router-link to="/help/topics/topic-page" class="topic-link">Why Exquisite Escape is your best option</router-link>
        </li>
        <li>
            <router-link to="/help/topics/topic-page" class="topic-link">Make your first bookings on Exquisite Escape</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "TopicsBlock",
    props: {
        topicBlockTitle: {
            type: String,
            required: true
        },
    }
}
</script>

<style>

</style>