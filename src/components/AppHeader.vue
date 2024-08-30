<template>
  <nav>
    <!-- Navbar Static -->
    <div class="navbar" :class="{ background: isMobileMenuVisible }">
      <div class="navbar-container">
        <div class="navbar-top">
          <div class="navbar-logo">
            <div class="">
              <NuxtLink to="/" @click.prevent="closeDropDown()"
                ><p class="brand-primary">fladeni</p></NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="navbar-bottom">
          <div class="navbar-left">
            <div class="navbar-item navbar-shopping">
              <div class="navbar-shopping__count">{{ shoppingCount }}</div>
              <NuxtLink
                to="/cart"
                :class="{ selected: $route.path === '/cart' }"
                @click.prevent="ScrollTop(), closeDropDown()"
                ><img
                  src="@/assets/img/cart-icon.svg"
                  alt="Shopping Cart Icon" />
              </NuxtLink>
            </div>
            <div class="navbar-item">
              <NuxtLink
                to="/profile"
                :class="{ selected: $route.path === '/profile' }"
                @click.prevent="ScrollTop(), closeDropDown()"
                >FashionPass
              </NuxtLink>
            </div>
          </div>
          <div class="navbar-middle">
            <div class="navbar-item">
              <NuxtLink
                to="/collections"
                :class="{ selected: $route.path === '/collections' }"
                @click.prevent="ScrollTop(), closeDropDown()"
                >Collections
              </NuxtLink>
            </div>
            <div class="navbar-item">
              <NuxtLink
                to="/shop"
                :class="{ selected: $route.path === '/shop' }"
                @click.prevent="ScrollTop(), closeDropDown()"
                >Shop
              </NuxtLink>
            </div>
          </div>
          <div class="navbar-right">
            <!-- Hamburger Menu -->
            <div class="hamburger-container" @click="toggleMobileMenu">
              <div
                class="hamburger"
                :class="{ 'hamburger-close': isMobileMenuVisible }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar Fixed -->
    <div
      class="navbar-fixed"
      :class="{
        visible: isVisible,
        hidden: !isVisible,
      }">
      <div class="navbar-fixed__container">
        <div class="navbar-left">
          <div class="navbar-item navbar-shopping">
            <div class="navbar-shopping__count">{{ shoppingCount }}</div>
            <NuxtLink
              to="/cart"
              :class="{ selected: $route.path === '/cart' }"
              @click.prevent="ScrollTop(), closeDropDown()"
              ><img src="@/assets/img/cart-icon.svg" alt="Shopping Cart Icon" />
            </NuxtLink>
          </div>
          <div class="navbar-item">
            <NuxtLink
              to="/profile"
              :class="{ selected: $route.path === '/profile' }"
              @click.prevent="ScrollTop(), closeDropDown()"
              >FashionPass
            </NuxtLink>
          </div>
        </div>
        <div class="navbar-middle">
          <div class="navbar-item">
            <NuxtLink
              to="/collections"
              :class="{ selected: $route.path === '/collections' }"
              @click.prevent="ScrollTop(), closeDropDown()"
              >Collections
            </NuxtLink>
          </div>
          <div class="navbar-item">
            <NuxtLink
              to="/shop"
              :class="{ selected: $route.path === '/shop' }"
              @click.prevent="ScrollTop(), closeDropDown()"
              >Shop
            </NuxtLink>
          </div>
        </div>
        <div class="navbar-logo">
          <div class="">
            <NuxtLink to="/" @click.prevent="closeDropDown()"
              ><p class="brand-primary">fladeni</p></NuxtLink
            >
          </div>
        </div>
        <div class="navbar-right">
          <!-- Hamburger Menu -->
          <div class="hamburger-container" @click="toggleMobileMenu">
            <div
              class="hamburger"
              :class="{ 'hamburger-close': isMobileMenuVisible }"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      class="mobile-menu"
      ref="mobileMenu"
      :class="{ 'mobile-menu-reveal': isMobileMenuVisible }">
      <div class="mobile-menu__content">
        <div class="mobile-menu__top">
          <div class="mobile-menu__logo">
            <div class="">
              <NuxtLink to="/" @click.prevent="closeDropDown()"
                ><p class="brand-primary">fladeni</p></NuxtLink
              >
            </div>
          </div>
          <div class="hamburger-container" @click="toggleMobileMenu">
            <div class="hamburger hamburger-close"></div>
          </div>
        </div>
        <div class="mobile-menu__middle">
          <div class="mobile-menu__item">
            <NuxtLink
              to="/"
              class="mobile-menu__link"
              :class="{ selected: $route.path === '/' }"
              @click.prevent="closeMobileMenu(), scrollTop()"
              >Home</NuxtLink
            >
          </div>
          <div class="mobile-menu__item">
            <NuxtLink
              to="/about"
              class="mobile-menu__link"
              :class="{ selected: $route.path === '/about' }"
              @click.prevent="closeMobileMenu(), scrollTop()"
              >About</NuxtLink
            >
          </div>
          <div class="mobile-menu__item">
            <NuxtLink
              to="/shop"
              class="mobile-menu__link"
              :class="{ selected: $route.path === '/shop' }"
              @click.prevent="closeMobileMenu(), scrollTop()"
              >Shop</NuxtLink
            >
          </div>
          <div class="mobile-menu__item">
            <NuxtLink
              to="/collections"
              class="mobile-menu__link"
              :class="{ selected: $route.path === '/collections' }"
              @click.prevent="closeMobileMenu(), scrollTop()"
              >Collections</NuxtLink
            >
          </div>
          <div class="mobile-menu__item">
            <NuxtLink
              to="/contact"
              class="mobile-menu__link"
              :class="{ selected: $route.path === '/contact' }"
              @click.prevent="closeMobileMenu(), scrollTop()"
              >Contact Us</NuxtLink
            >
          </div>
        </div>
        <div class="mobile-menu__bottom">
          <div class="mobile-menu__socials">
            <div class="mobile-menu__social">
              <NuxtLink to="" target="_blank" rel="noreferrer nofollow">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 2736 2736"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  xmlns:serif="http://www.serif.com/"
                  fill="#333338"
                  class="social-icon"
                  aria-label="Fladeni Instagram"
                  style="
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  ">
                  <path
                    d="M789.56,11.754l1156.56,0c434.318,0 789.475,350.797 789.475,779.302l0,1153.44c0,428.633 -355.157,779.302 -789.475,779.302l-1156.56,-0c-434.36,-0 -789.56,-350.669 -789.56,-779.302l-0,-1153.44c-0,-428.505 355.2,-779.302 789.56,-779.302Zm570.884,623.801c422.051,-0 764.513,342.505 764.513,764.555c-0,422.094 -342.462,764.555 -764.513,764.555c-422.179,0 -764.598,-342.461 -764.598,-764.555c0,-422.05 342.419,-764.555 764.598,-764.555Zm0,258.257c279.458,-0 506.298,226.755 506.298,506.298c0,279.544 -226.84,506.384 -506.298,506.384c-279.586,-0 -506.384,-226.84 -506.384,-506.384c0,-279.543 226.798,-506.298 506.384,-506.298Zm739.636,-364.218c68.561,-0 124.127,55.566 124.127,124.084c0.043,68.561 -55.566,124.17 -124.127,124.17c-68.518,0 -124.085,-55.609 -124.085,-124.17c0,-68.518 55.567,-124.084 124.085,-124.084Zm-1216.06,-296.299l967.673,-0c363.32,-0 660.517,295.7 660.517,657.012l-0,972.503c-0,361.312 -297.154,656.969 -660.517,656.969l-967.673,0c-363.321,0 -660.518,-295.657 -660.518,-656.969l0,-972.503c0,-361.312 297.197,-657.012 660.518,-657.012Z" />
                </svg>
              </NuxtLink>
            </div>
            <div class="mobile-menu__social">
              <NuxtLink to="" target="_blank" rel="noreferrer nofollow">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 3495 3495"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  xmlns:serif="http://www.serif.com/"
                  fill="#333338"
                  class="social-icon"
                  aria-label="Fladeni Facebook"
                  style="
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                  ">
                  <g id="XMLID_834_">
                    <path
                      id="XMLID_835_"
                      d="M920.808,1860.77l382.972,0l-0,1576.63c-0,31.128 25.222,56.35 56.35,56.35l649.343,0c31.129,0 56.352,-25.222 56.352,-56.35l-0,-1569.2l440.258,-0c28.627,-0 52.71,-21.481 55.979,-49.915l66.866,-580.437c1.837,-15.971 -3.223,-31.963 -13.908,-43.943c-10.695,-11.992 -26,-18.855 -42.06,-18.855l-507.113,0l-0,-363.847c-0,-109.681 59.055,-165.3 175.544,-165.3l331.569,0c31.128,0 56.351,-25.233 56.351,-56.35l0,-532.787c0,-31.129 -25.223,-56.351 -56.351,-56.351l-456.95,0c-3.223,-0.158 -10.379,-0.417 -20.928,-0.417c-79.285,0 -354.876,15.564 -572.571,215.836c-241.204,221.932 -207.676,487.661 -199.662,533.733l0,425.472l-402.041,-0c-31.128,-0 -56.352,25.223 -56.352,56.35l0,573.022c0,31.128 25.224,56.361 56.352,56.361l-0,-0.004Z" />
                  </g>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";

// Reactive States
const showDropdown = ref(false);
const isClosed = ref(false);
const isMobileMenuVisible = ref(false);
const mobileMenu = ref(null);
const shoppingCount = ref("99+");
const isNavbarHidden = ref("false");
const isVisible = ref(false);
const prevScroll = ref("");

let observer;

// Define Props
const props = defineProps({
  scrollTop: { type: Function },
});

// NAVBAR LOGIC
// Dropdown
const closeDropDown = () => {
  showDropdown.value = false;
};

// FIXED NAVBAR LOGIC
const handleScroll = () => {
  isVisible.value = window.scrollY >= 300;
};

// Mobile Menu
const toggleMobileMenu = () => {
  isMobileMenuVisible.value = !isMobileMenuVisible.value;

  const bodyElement = document.body;
  bodyElement.style.overflow = isMobileMenuVisible.value ? "hidden" : "auto";
};

const closeMobileMenu = () => {
  isMobileMenuVisible.value = false;

  const bodyElement = document.body;
  bodyElement.style.overflow = "auto";
};

onMounted(() => {
  onClickOutside(mobileMenu, (event) => {
    if (!event.target.classList.contains("hamburger-close")) {
      isMobileMenuVisible.value = false;

      const bodyElement = document.body;
      bodyElement.style.overflow = "auto";
    }
  });

  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
