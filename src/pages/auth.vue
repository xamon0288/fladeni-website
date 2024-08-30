<template>
  <main>
    <div class="login-container column">
      <!-- REGISTER -->
      <div class="auth" v-if="!hasAccount">
        <h1 class="auth-title">Sign Up</h1>
        <p v-show="error" class="auth-error">{{ errorMsg }}</p>
        <form @submit.prevent="handleRegister" class="auth-form">
          <!-- NAME -->
          <div class="auth-input-group">
            <h2 class="auth-input-title">Name</h2>
            <input type="text" v-model="name" class="auth-input" required />
          </div>
          <!-- USERNAME -->
          <div class="auth-input-group">
            <h2 class="auth-input-title">Username</h2>
            <input type="text" v-model="username" class="auth-input" required />
          </div>
          <!-- EMAIL -->
          <div class="auth-input-group">
            <h2 class="auth-input-title">Email</h2>
            <input type="email" v-model="email" class="auth-input" required />
          </div>
          <!-- PASSWORD -->
          <div class="auth-input-group">
            <h2 class="auth-input-title">Password</h2>
            <input
              type="password"
              v-model="password"
              class="auth-input"
              required />
          </div>

          <button
            type="submit"
            :disabled="password.length < 6 || username.length < 3"
            class="btn auth-btn">
            Sign Up
          </button>
        </form>
      </div>
      <!-- LOGIN -->
      <div class="auth" v-if="hasAccount">
        <h1 class="section-title">Login</h1>
        <p v-show="error" class="auth-error">{{ errorMsg }}</p>
        <form @submit.prevent="handleLogin" class="auth-form">
          <!-- USERNAME -->
          <div class="auth-input-group">
            <h2 class="auth-input-title">Email</h2>
            <input type="email" v-model="email" class="auth-input" required />
          </div>
          <!-- PASSWORD -->
          <div class="auth-input-group">
            <h2 class="auth-input-title">Password</h2>
            <input
              type="password"
              v-model="password"
              class="auth-input"
              required />
          </div>

          <button
            type="submit"
            :disabled="password.length < 3"
            class="btn auth-btn">
            Login
          </button>
        </form>
      </div>
      <p class="auth-switch" v-if="!hasAccount">
        Already have an account? Click here to
        <span class="auth-switch-button" @click="switchForm">login</span>
      </p>
      <p class="auth-switch" v-if="hasAccount">
        Need an account? Click here to
        <span class="auth-switch-button" @click="switchForm">Register</span>
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";

const name = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const { login } = useAuth();
const hasAccount = ref(true);
const error = ref("false");
const errorMsg = ref("");

const handleLogin = async () => {
  const success = await login(email.value, password.value);

  if (success) {
    error.value = false;
    navigateTo("/profile");
  } else {
    error.value = true;
    errorMsg.value = "There was an error, please try again";
  }
};

const handleRegister = async () => {
  console.log("handled");
};

const switchForm = () => {
  hasAccount.value = !hasAccount.value;
  console.log(hasAccount.value);
};
</script>

<style lang="scss" scoped></style>
