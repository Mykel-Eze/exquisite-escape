<template>
    <div id="help-topics-page">
        <!--=== Top Section ===-->
        <HelpTopicsTopSection
            helpPageTitle="All Topics"
            helpPageTitleDesc="Explore our full library of help topics"
        />
        <!--=== end of Top Section ===-->

        <!--=== Help-Link Section ===-->
        <HelpLinkSection class="mt-[80px]" />
        <!--=== end of Help-Link Section ===-->

        <!--=== TopicsWrapper Section ===-->
        <TopicsWrapperSection />
        <!--=== end of TopicsWrapper Section ===-->
    </div>
</template>

<script>
import HelpTopicsTopSection from '@/components/HelpCenterComponents/HelpTopicsTopSection.vue'
import HelpLinkSection from '@/components/HelpCenterComponents/HelpLinkSection.vue'
import TopicsWrapperSection from '@/components/HelpCenterComponents/TopicsWrapperSection.vue'

export default {
    name: "HelpTopicsPage",
    components: {
        HelpTopicsTopSection,
        HelpLinkSection,
        TopicsWrapperSection,
    }
}
</script>

<style>

</style>