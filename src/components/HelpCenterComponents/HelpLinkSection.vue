<template>
  <section id="help-link-section">
    <div class="row">
        <div class="container">
            <div class="help-links-wrapper">
                <router-link to="/help/topics">All Topics</router-link>
                <router-link to="/help/flights">Flights</router-link>
                <router-link to="/help/refunds-and-chargebacks">Refunds & Charges</router-link>
                <router-link to="/help/lodging">Lodging</router-link>
                <router-link to="/help/tour-and-activities">Tour & Activities</router-link>
                <router-link to="/help/packages">Packages</router-link>
                <router-link to="/help/transfer-services">Transfer Services</router-link>
                <router-link to="/help/account">Account</router-link>
                <router-link to="/help/privacy">Privacy</router-link>
                <router-link to="/help/security">Security</router-link>
                <router-link to="/help/loyalty-and-rewards">Loyalty & Rewards</router-link>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "HelpLinkSection",
}
</script>

<style>

</style>