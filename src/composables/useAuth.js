import { ref, computed } from "vue";

const loggedInUser = ref(null);

export function useAuth() {
  const isAuthenticated = computed(() => !!loggedInUser.value);

  const login = async (email, password) => {
    const users = await $fetch("/json/users.json");
    const user = users.find((u) => u.email && u.password === password);

    if (user) {
      loggedInUser.value = user;
      return true;
    }
    return false;
  };

  const logout = () => {
    loggedInUser.value = null;
  };

  const addFavorite = (itemName) => {
    if (loggedInUser.value) {
      loggedInUser.value.favorites.push(itemName);
    }
  };

  const resetPassword = async (email, newPassword) => {
    const users = await $fetch("/json/users.json");
    const user = users.find((u) => u.email === email);

    if (user) {
      user.password = newPassword;
      return true;
    }

    return false;
  };

  return {
    isAuthenticated,
    loggedInUser,
    login,
    logout,
    addFavorite,
    resetPassword,
  };
}
