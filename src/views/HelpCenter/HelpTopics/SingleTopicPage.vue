<template>
    <div id="single-topic-page">
        <!--=== Top Section ===-->
        <SingleTopicTopSection
            topicPageTitle="How to cancel my booking?"
        />
        <!--=== end of Top Section ===-->

        <!--=== TopicContent Section ===-->
        <TopicContentSection />
        <!--=== end of TopicContent Section ===-->

        <!--=== RateArticle Section ===-->
        <RateArticle />
        <!--=== end of RateArticle Section ===-->

        <div class="container">
            <hr class="horizontal-divider" />
        </div>

        <!--=== RelatedArticles Section ===-->
        <RelatedArticlesSection />
        <!--=== end of RelatedArticles Section ===-->
    </div>
</template>

<script>
import SingleTopicTopSection from '@/components/HelpCenterComponents/SingleTopicTopSection.vue'
import TopicContentSection from '@/components/HelpCenterComponents/TopicContentSection.vue'
import RateArticle from '@/components/HelpCenterComponents/RateArticle.vue'
import RelatedArticlesSection from '@/components/HelpCenterComponents/RelatedArticlesSection.vue'

export default {
    name: "SingleTopicPage",
    components: {
        SingleTopicTopSection,
        TopicContentSection,
        RateArticle,
        RelatedArticlesSection,
    }
}
</script>

<style>

</style>