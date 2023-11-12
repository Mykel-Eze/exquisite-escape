<template>
  <div id="newsletter-block">
    <div class="container">
        <div class="newsletter-text-form-wrapper flex-div justify-between">
            <div class="newsletter-text-side">
                <h2 class="newsletter-block-title pry-color">Want to get the latest travel news and deals?</h2>
                <p class="newsletter-block-desc white-text">
                    Enter your email and we'll send them your way.
                </p>
            </div>
            <div class="newsletter-form-side">
                <form action="#" id="newsletter-form" @submit.prevent="subscribe" class="flex gap-5 items-end">
                    <div class="input-field-wrapper">
                        <div class="grid grid-cols-2 gap-5">
                            <div class="input-field">
                                <input type="text" class="inp-field" v-model="firstName" placeholder="First name" required>
                            </div>
                            <div class="input-field">
                                <input type="text" class="inp-field" v-model="lastName" placeholder="Last name" required>
                            </div>
                        </div>
                        <div class="input-field">
                            <input type="email" class="inp-field" v-model="email" placeholder="Your email..." required>
                        </div>
                    </div>
                    <div class="submit-btn-wrapper">
                        <button type="submit" class="submit-btn">
                            <span>Subscribe</span>
                            <img src="../assets/images/email.svg" alt="mail" class="email-icon">
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
export default {
    name: 'NewsletterBlock',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            tickCircle: '/tick-circle.svg'
        };
    },

    components: {},
    methods: {
        subscribe() {
            // You can perform the subscription logic here
            console.log(`Subscribed with email: ${this.email}`);
            // You may want to send the email to your server or perform other actions
            // Reset the email field after submission
            this.email = '';
            this.firstName = '';
            this.lastName = '';

            var toastHTML = "<img src='"+ this.tickCircle +"' alt='tick' /> <span>Subscribed successfully</span>";
            M.toast({html: toastHTML, classes: 'toastWrapper toast-success'});
        },
    },
}
</script>

<style scoped src="..\assets\css\newsletter-block.css"></style>

