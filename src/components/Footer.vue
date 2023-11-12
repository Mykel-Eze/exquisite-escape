<template>
  <footer id="footer">
    <div class="row mag-0">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-block">
                    <div class="footer-block-title">Support</div>
                    <ul class="footer-block-links">
                        <li>
                            <router-link to="/#" class="footer-link">Help Center</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Cancel your flight</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Contact customer care</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Cancel your transfer booking </router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Cancel your hotel booking</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Refund timeline and polices & process</router-link>
                        </li>
                    </ul>
                </div>

                <div class="footer-block">
                    <div class="footer-block-title">Exquisite Escape</div>
                    <ul class="footer-block-links">
                        <li>
                            <router-link to="/#" class="footer-link">About us</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Jobs</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Contact us </router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Press</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Feedback</router-link>
                        </li>
                    </ul>
                </div>

                <div class="footer-block">
                    <div class="footer-block-title">Explore</div>
                    <ul class="footer-block-links">
                        <li>
                            <router-link to="/#" class="footer-link">Hotels</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Flights</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Tours</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Transfers</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Packages</router-link>
                        </li>
                    </ul>
                </div>

                <div class="footer-block">
                    <div class="footer-block-title">Account</div>
                    <ul class="footer-block-links">
                        <li>
                            <router-link to="/#" class="footer-link">My account</router-link>
                        </li>
                        <li>
                            <router-link to="/#" class="footer-link">Become an affliiate</router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer-note-wrapper flex-div justify-between">
                <div class="footer-copyright-side">
                    © 2023 Exquisite Escape an Applause Global Services Company · 
                    <a href="#">Terms</a>  · <a href="#">Sitemap</a> ·  <a href="#">Privacy</a>
                </div>

                <div class="footer-social-side flex-div gap-[20px]">
                    <div class="flex-div gap-[6px]">
                        <img src="../assets/images/globe.svg" alt="globe" class="globe-icon">
                        <span>English (US)</span>
                    </div>
                    <div>$ USD</div>
                    <ul class="footer-social-links flex-div gap-[10px]">
                        <li>
                            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="../assets/images/x.svg" alt="twitter" class="social-icon">
                            </a>
                        </li>
                        <li>
                            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="../assets/images/fb.svg" alt="facebook" class="social-icon">
                            </a>
                        </li>
                        <li>
                            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="../assets/images/ig.svg" alt="instagram" class="social-icon">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "FooterCompoent",
}
</script>

<style scoped src="..\assets\css\footer.css"></style>
