import { useAuth } from "@/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated.value && to.name === "profile") {
    console.log(isAuthenticated.value);
    return navigateTo("/auth");
  }
});
