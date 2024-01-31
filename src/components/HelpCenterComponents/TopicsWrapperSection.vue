<template>
  <section id="topics-wrapper-section">
    <div class="row">
        <div class="container">
            <div class="topics-wrapper">
                <TopicsBlock topicBlockTitle="About Exquisite Escape" />
                <TopicsBlock topicBlockTitle="Managing My Account" />
                <TopicsBlock topicBlockTitle="Payment, fees and refund" />
                <TopicsBlock topicBlockTitle="Supported Currencies" />
                <TopicsBlock topicBlockTitle="Flight" />
                <TopicsBlock topicBlockTitle="Tour & Activities" />
                <TopicsBlock topicBlockTitle="Packages" />
                <TopicsBlock topicBlockTitle="Hotels & Lodgings" />
            </div>
        </div>  
    </div>
  </section>
</template>

<script>
import TopicsBlock from './TopicsBlock.vue';

export default {
    name: "TopicsWrapperSection",
    components: {
        TopicsBlock
    }
}
</script>

<style>

</style>