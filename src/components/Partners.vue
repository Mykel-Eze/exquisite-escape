<template>
  <div id="partners-block">
    <div class="container">
        <div class="partners-wrapper">
            <img src="../assets/images/iata.png" alt="iata" class="partner-logo">
            <img src="../assets/images/flutterwave.png" alt="flutterwave" class="partner-logo">
            <img src="../assets/images/amadeus.png" alt="amadeus" class="partner-logo">
            <img src="../assets/images/paystack.png" alt="paystack" class="partner-logo">
            <img src="../assets/images/travelport.png" alt="travelport" class="partner-logo">
            <img src="../assets/images/sabre.png" alt="sabre" class="partner-logo">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PartnersBlock',
}
</script>

<style scoped>
#partners-block {
    margin: 50px auto;
}
.partners-wrapper {
    max-width: 834px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>