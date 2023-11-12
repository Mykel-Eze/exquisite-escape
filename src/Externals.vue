<template>
    <div id="nav">
      <Navbar />
        <div id="main-contents-wrapper">
          <router-view />
        </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  export default {
    name: "ExternalLayout",
    components: {
      Navbar, Footer
    }
  }
  </script>
  