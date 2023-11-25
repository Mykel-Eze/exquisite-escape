<template>
  <div>
    <nav class="main-nav">
        <div class="container">
            <div class="nav-wrapper flex-div justify-between">
                <router-link to="/" class="brand-logo" @click="scrollToTop()">
                    <img src="../assets/images/exquisite-escape-logo.png" alt="Exquisite Escape" class="logo">
                </router-link>

                <a rel="noopener"
                    href="#"
                    data-target="slide-out"
                    class="sidenav-trigger sec-color right"
                >
                  <SvgIcons icon="menu" />
                </a>

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <router-link to="/" class="" @click="scrollToTop()">Book Flight</router-link>
                    </li>
                    <li>
                        <router-link to="/" class="" @click="scrollToTop()">Find Hotel</router-link>
                    </li>
                    <li>
                        <router-link to="/" class="" @click="scrollToTop()">Become an Affiliate</router-link>
                    </li>
                    <li>
                        <a href="#" class="dropdown-trigger" data-target="company-dropdown" @click="scrollToTop()">
                          <div class="flex-div">
                            <span>Company</span>
                            <img src="../assets/images/caret-down-green.svg" alt="caret" class="nav-caret-icon">
                          </div>
                        </a>

                        <!-- Dropdown Structure -->
                        <ul id="company-dropdown" class="dropdown-content">
                          <li><a href="#!">Item 1</a></li>
                          <li><a href="#!">Ittem 2</a></li>
                          <li><a href="#!">Ittem 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/" class="" @click="scrollToTop()">Help</router-link>
                    </li>
                </ul>

                <ul id="nav-mobile-2" class="right hide-on-med-and-down flex-div gap-2">
                    <li class="rel">
                      <button class="menu-user-btn flex-div">
                          <img src="../assets/images/menu.svg" alt="menu" class="top-nav-menu">
                          <img src="../assets/images/no-user-pix.svg" alt="user" class="user-icon">
                      </button>
                    </li>
                    <li class="rel">
                      <div class="flex-div language-div sec-color text-[10px] gap-1">
                        <img src="../assets/images/globe.svg" alt="globe" class="globe-icon">
                        <span>EN</span>
                      </div>
                    </li>
                </ul>
              </div>
        </div>
    </nav>

    <ul id="slide-out" class="sidenav">
        <div class="center sidenav-logo">
            <router-link to="/" class="sidenav-close" @click="scrollToTop()">
                <img src="../assets/images/exquisite-escape-logo.png" alt="Exquisite Escape" class="logo">
            </router-link>
        </div>
        <li>
            <router-link to="/" class="sidenav-close" @click="scrollToTop()">Home</router-link>
        </li>
        <li>
            <router-link to="/#" class="sidenav-close" @click="scrollToTop()">Book Flight</router-link>
        </li>
        <li>
            <router-link to="/#" class="sidenav-close" @click="scrollToTop()">Find Hotel</router-link>
        </li>
        <li>
            <router-link to="/#" class="sidenav-close" @click="scrollToTop()">Become an Affiliate</router-link>
        </li>
        <li>
            <router-link to="/#" class="sidenav-close" @click="scrollToTop()">Company</router-link>
        </li>
        <li>
            <router-link to="/#" class="sidenav-close" @click="scrollToTop()">Help</router-link>
        </li>
        <li class="hire-us-li hul-2">
            <div class="flex-div gap-2">
              <button class="menu-user-btn flex-div">
                  <img src="../assets/images/menu.svg" alt="menu" class="top-nav-menu">
                  <img src="../assets/images/no-user-pix.svg" alt="user" class="user-icon">
              </button>

              <div class="flex-div language-div sec-color text-[10px] gap-1">
                <img src="../assets/images/globe.svg" alt="globe" class="globe-icon">
                <span>EN</span>
              </div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import M from "materialize-css";

import SvgIcons from "./icons/AllIcons.vue";

export default {
  name: "NavbarComponent",
  components: {
    SvgIcons,
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', function() {
      var elemsSidenav = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elemsSidenav);

      var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(elemsDropdown, {
        coverTrigger: false,
      });
    });
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped src="..\assets\css\navbar.css"></style>
