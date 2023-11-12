<template>
    <div id="nav">
      <Navbar />
        <div id="main-contents-wrapper">
          <router-view />
        </div>
      <NewsletterBlock />
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import NewsletterBlock from './components/NewsletterBlock.vue';
  
  export default {
    name: "ExternalLayout",
    components: {
      Navbar, Footer, NewsletterBlock
    }
  }
  </script>
  