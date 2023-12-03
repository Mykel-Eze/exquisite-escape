<template>
  <section id="help-link-section">
    <div class="row">
        <div class="container">
            <div class="help-links-wrapper">
                <router-link to="/help-center/all-topis">All Topics</router-link>
                <router-link to="/help-center/flights">Flights</router-link>
                <router-link to="/help-center/refunds-and-chargebacks">Refunds & Charges</router-link>
                <router-link to="/help-center/lodging">Lodging</router-link>
                <router-link to="/help-center/tour-and-activities">Tour & Activities</router-link>
                <router-link to="/help-center/packages">Packages</router-link>
                <router-link to="/help-center/transfer-services">Transfer Services</router-link>
                <router-link to="/help-center/account">Account</router-link>
                <router-link to="/help-center/privacy">Privacy</router-link>
                <router-link to="/help-center/security">Security</router-link>
                <router-link to="/help-center/loyalty-and-rewards">Loyalty & Rewards</router-link>
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