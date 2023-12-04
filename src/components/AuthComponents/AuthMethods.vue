<template>
  <div class="auth-methods flex-div">
    <div class="auth-method">
      <button class="auth-method-btn flex-div hover-scale">
        <img src="@/assets/images/google-icon.svg" alt="google" class="auth-method-icon">
        <span class="auth-method-text">Sign in with Google</span>
      </button>
    </div>

    <div class="auth-method">
      <button class="auth-method-btn flex-div hover-scale">
        <img src="@/assets/images/facebook-icon.svg" alt="facebook" class="auth-method-icon">
        <span class="auth-method-text">Sign in with Facebook</span>
      </button>
    </div>

    <div class="auth-method">
      <button class="auth-method-btn flex-div hover-scale">
        <img src="@/assets/images/apple-icon.svg" alt="apple" class="auth-method-icon">
        <span class="auth-method-text">Sign in with Apple</span>
      </button>
    </div>

    <div class="auth-method">
      <button class="auth-method-btn flex-div hover-scale">
        <img src="@/assets/images/twitter-icon.svg" alt="twitter" class="auth-method-icon">
        <span class="auth-method-text">Sign in with Twitter</span>
      </button>
    </div>

    <div class="auth-method">
      <button class="auth-method-btn flex-div hover-scale">
        <img src="@/assets/images/email-icon.png" alt="email" class="auth-method-icon">
        <span class="auth-method-text">Sign up with Email</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "AuthMethod",
}
</script>

<style>

</style>