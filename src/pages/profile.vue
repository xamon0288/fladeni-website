<template>
  <main>
    <h1>Profile</h1>
    <p v-if="user">Welcome, {{ user.firstName }} {{ user.lastName }}</p>
    <h2>Your Favorites</h2>
    <!-- <ul>
      <li v-for="favorite in user.favorites" :key="favorite">{{ favorite }}</li>
    </ul> -->
    <button @click="logout">Logout</button>
  </main>
</template>

<script setup>
import { useAuth } from "@/composables/useAuth";

const { loggedInUser, logout } = useAuth();
const user = loggedInUser.value;

const handleLogout = () => {
  logout();
  navigateTo("/auth");
};
</script>

<style lang="scss" scoped></style>
