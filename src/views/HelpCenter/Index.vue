<template>
  <div id="help-center-pge">
    <!--=== Top Section ===-->
    <HelpCenterTopSection />
    <!--=== end of Top Section ===-->

    <!--=== Help-Link Section ===-->
    <HelpLinkSection />
    <!--=== end of Help-Link Section ===-->

    <!--=== Discover-New-Places Section ===-->
    <DiscoverNewPlacesSection />
    <!--=== end of Discover-New-Places Section ===-->

    <!--=== Getting-Started-Guide Section ===-->
    <GettingStartedSection />
    <!--=== end of Getting-Started-Guide Section ===-->

    <!--=== Top-Articles Section ===-->
    <TopArticles />
    <!--=== end of Top-Articles Section ===-->

    <!--=== Explore-More Section ===-->
    <ExploreMoreSection />
    <!--=== end of Explore-More Section ===-->
  </div>
</template>

<script>
import HelpCenterTopSection from '@/components/HelpCenterComponents/HelpCenterTopSection.vue'
import HelpLinkSection from '@/components/HelpCenterComponents/HelpLinkSection.vue'
import DiscoverNewPlacesSection from '@/components/HelpCenterComponents/DiscoverNewPlacesSection.vue'
import GettingStartedSection from '@/components/HelpCenterComponents/GettingStartedSection.vue'
import TopArticles from '@/components/HelpCenterComponents/TopArticles.vue'
import ExploreMoreSection from '@/components/HelpCenterComponents/ExploreMoreSection.vue'

export default {
  name: "HelpCenterPage",
  components: {
    HelpCenterTopSection,
    HelpLinkSection,
    DiscoverNewPlacesSection,
    GettingStartedSection,
    TopArticles,
    ExploreMoreSection,
  }
}
</script>

<style src="@/assets/css/help-center.css"></style>