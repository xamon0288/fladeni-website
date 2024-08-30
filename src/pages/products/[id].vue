<template>
  <main>
    <section class="article">
      <div class="article-container">
        <!-- Images -->
        <div class="article-img">
          <div class="article-img__left">
            <div
              v-if="altImages"
              v-for="(altImage, index) in altImages"
              :key="index">
              <img
                :src="altImage"
                :alt="product.name"
                class="article-img__preview"
                @click="swapImages(index)" />
            </div>
          </div>
          <div
            class="article-img__right"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave">
            <img
              :src="mainImage"
              :alt="product.name"
              class="article-img__display" />
            <img
              :src="mainImage"
              :alt="product.name"
              class="article-img__zoom"
              ref="zoomImage" />
          </div>
        </div>

        <!-- Product Description and purchase -->
        <div class="article-details">
          <!-- Header -->
          <div class="article-details__header">
            <h2 class="brand-primary">{{ product.name }}</h2>
            <p class="brand-title article-price" v-if="product.salePrice">
              <del>${{ product.price }}</del>
              <span class="brand-sale"> ${{ product.salePrice }}</span>
            </p>
            <p class="brand-title article-price" v-else>${{ product.price }}</p>
          </div>
          <!-- Body -->
          <div class="article-details__body">
            <p class="section-description article-desc">
              {{ product.productDescription }}
            </p>
            <div class="article-order">
              <div class="article-sizes">
                <label for="size" class="brand-title">Sizes</label>
                <div
                  v-for="(qty, size) in product.sizes"
                  :key="size"
                  :value="size"
                  class="article-size"
                  :class="{
                    isSoldOut: qty === 0,
                    isSelected: selectedSize === size,
                  }"
                  @click="selectSize(size)">
                  {{ size }}
                </div>
              </div>
              <div class="article-cart">
                <input
                  type="number"
                  v-model.number="selectedQty"
                  :min="1"
                  :max="availableQty" />
                <button
                  @click="addToCart"
                  class="btn btn-primary"
                  :disabled="!selectedSize"
                  :class="{ greyout: !selectedSize }">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <!-- Footer -->
          <div class="article-footer">
            <nuxt-link
              :to="`/collections/${product.category}`"
              class="article-link brand-tertiary"
              >{{ product.category }}</nuxt-link
            >
            <NuxtLink
              :to="`/collections/${product.collections}`"
              class="article-link brand-tertiary"
              >{{ product.collections }}</NuxtLink
            >
          </div>
        </div>
      </div>

      <!-- Related -->
      <div class="related">
        <div class="related-container">
          <p class="brand-secondary">YOU MAY ALSO LIKE</p>
          <div class="all">
            <!-- loop here -->
            <swiper
              :modules="[Navigation, Pagination, Autoplay]"
              :slides-per-view="3"
              :space-between="20"
              :loop="false"
              :pagination="{ clickable: true }"
              :navigation="false"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: true,
              }"
              :breakpoints="{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }">
              <swiper-slide v-for="(item, index) in similar" :key="index">
                <div class="featured-item">
                  <NuxtLink
                    :to="`/products/${item.name}`"
                    class="featured-links">
                    <div class="featured-links__overlay"></div>
                    <img
                      :src="item.imgSrc"
                      :alt="item.name"
                      class="item-img"
                      loading="lazy" />
                  </NuxtLink>
                  <div class="featured-item__top">
                    <i class="featured-icon"
                      ><img src="@/assets/img/view-icon.svg" alt=""
                    /></i>
                    <i class="featured-icon"
                      ><img src="@/assets/img/wishlist-icon.svg" alt=""
                    /></i>
                  </div>
                  <div class="featured-item__bottom">
                    <p class="featured-item__name brand-secondary">
                      {{ item.name }}
                    </p>
                    <p class="featured-item__price brand-tertiary">
                      ${{ item.price }}
                    </p>
                  </div>
                  <div
                    class="item-badge featured-item__badge"
                    :class="`item-badge__${item.badgeType}`">
                    <p>{{ item.badgeValue }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useLocalStorage } from "@vueuse/core";

const route = useRoute();

// Reactive State
const product = ref([]);
const similar = ref([]);
const mainImage = ref("");
const altImages = ref([
  "/_nuxt/src/assets/img/wool-pants-img-6-600x795.jpg",
  "/_nuxt/src/assets/img/fuzzy-slipper-img-4-600x795.jpg",
  "/_nuxt/src/assets/img/Fashzen-img-7-600x795.jpg",
]);
const zoomImage = ref(null);
const qty = ref(1);
const maxQty = ref("");
const selectedSize = ref(null);
const selectedQty = ref(1);
const cart = useLocalStorage("cart", []);
const loading = ref(true);

// Fetch items based on category
const fetchAll = async () => {
  try {
    const data = await $fetch(`/json/all.json`);

    // Find the product that matches the route.params.id
    const foundProduct = data.find((item) => item.name === route.params.id);

    if (foundProduct) {
      product.value = foundProduct;

      // Set the main img
      mainImage.value = product.value.imgSrc;

      // Set Quantity
      maxQty.value = product.value.quantity;

      // Find similar items with the same category
      const similarItems = data.filter(
        (item) =>
          item.category === foundProduct.category &&
          item.name !== foundProduct.name
      );

      // Randomly select 5 similar items
      similar.value = similarItems.sort(() => 0.5 - Math.random()).slice(0, 5);
    }
  } catch (err) {
    console.error("There was an error:", err);
  } finally {
    loading.value = false;
  }
};

// Images Logic
const swapImages = (index) => {
  const currentMainImage = mainImage.value;

  mainImage.value = altImages.value[index];

  altImages.value[index] = currentMainImage;
};

const handleMouseMove = (e) => {
  const zoom = zoomImage.value;
  const { top, left, width, height } = e.target.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;
  const xPercent = (x / width) * 100;
  const yPercent = (y / height) * 100;

  zoom.style.transform = `translate(-${xPercent}%, -${yPercent}%)`;
};

const handleMouseLeave = () => {
  zoomImage.value.style.transform = `translate(-50%, -50%)`;
};

// Order Logic
const availableQty = computed(() => {
  return selectedSize.value ? product.value.sizes[selectedSize.value] : 0;
});

const selectSize = (size) => {
  if (product.value.sizes[size] !== 0) {
    selectedSize.value = size;
  }
  console.log(selectedSize.value);
};

const addToCart = () => {
  if (!selectedSize.value) {
    alert("Please select a size.");
    return;
  }

  if (selectedQty.value > availableQty.value) {
    alert("Selected quantity exceeds available stock.");
    return;
  }

  // Add item to cart in localStorage
  const item = {
    id: product.id,
    size: selectedSize.value,
    quantity: selectedQty.value,
  };

  cart.value.push(item);
  alert("Item added to cart!");
};

onMounted(async () => {
  await fetchAll();
});
</script>

<style lang="scss" scoped></style>
