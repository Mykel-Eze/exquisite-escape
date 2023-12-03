<template>
  <section id="top-section">
    <div class="row">
        <div class="container">
            <div class="ts-container">
                <h1 class="page-title">Welcome to Help Center</h1>

                <div class="search-help-wrapper">
                    <input type="search" name="help-search" id="help-search" placeholder="Enter question keyword" />
                    <button class="search-help-btn">
                        <span>Search</span>
                        <img src="@/assets/images/search-icon.svg" alt="search-icon" class="search-icon">
                    </button>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "HelpCenterTopSection"
}
</script>

<style>

</style>