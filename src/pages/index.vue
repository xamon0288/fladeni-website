<template>
  <main>
    <section class="hero" :style="`--hero-bg-url: url(${imageUrl})`">
      <div class="hero-container">
        <div class="hero-card">
          <div class="hero-img">
            <img src="@/assets/img/FLADENI-1704.jpg" alt="Fladeni Item" />
          </div>
          <div class="hero-cta">
            <h3 class="section-title">Brand New</h3>
            <h1 class="page-title">
              GORGEOUS FASHION TRENDS <br />
              FOR THE SUMMER
            </h1>
            <a href="/collections/summer2024" class="btn btn-primary"
              >Shop Now</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED SECTION -->
    <section class="featured">
      <div class="featured-container">
        <div class="featured-header">
          <h2 class="section-title">Featured Items</h2>
          <p class="section-subtitle">
            Unveil Your Elegance with the Fall Collection
          </p>
        </div>

        <div class="featured-content">
          <!-- Cards -->
          <div
            class="featured-item"
            v-for="(item, index) in highlightedItems"
            :key="index">
            <NuxtLink :to="`/products/${item.name}`" class="featured-links">
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
              <p class="featured-item__name brand-secondary">{{ item.name }}</p>
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
        </div>
      </div>
    </section>

    <section class="explore">
      <div class="explore-container">
        <NuxtLink to="/collections">Explore Our Collection</NuxtLink>
        <NuxtLink to="/collections/fall">Fall 2024</NuxtLink>
      </div>
    </section>

    <!-- VIDEO SHOWCASE SECTION -->
    <section class="video">
      <div class="video-container">
        <video
          src="@/assets/vids/pexels-mikhail-nilov-7626887.mp4"
          loop
          muted
          autoplay
          playsinline
          webkit-playsinline></video>
      </div>
    </section>

    <!-- PRODUCTS SHOWCASE SECTION -->
    <div class="products-showcase">
      <div class="products-showcase__container">
        <div class="products-showcase__header">
          <h3 class="section-title">Categories</h3>
        </div>

        <div class="products-showcase__contents">
          <div class="products-showcase__nav">
            <ul>
              <li
                v-for="(title, index) in catTitles"
                :key="index"
                class="brand-title"
                :class="{ selected: index === selectedTitleIndex }"
                @click="selectedTitle(index, title)">
                {{ title }}
              </li>
            </ul>
          </div>
          <div class="products-showcase__content" v-if="loading">
            This is loading
          </div>
          <div class="products-showcase__content" v-else>
            <div
              v-for="(item, index) in paginatedItems"
              :key="index"
              class="product-item">
              <div class="featured-item">
                <NuxtLink :to="`/products/${item.name}`" class="featured-links">
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
            </div>
            <div class="pagination-controls">
              <button @click="prevPage" :disabled="currentPage === 1">
                &lt;
              </button>
              <button @click="nextPage" :disabled="currentPage === totalPages">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="explore">
      <div class="explore-container">
        <NuxtLink :to="`/collections/${selectedCat}`"
          >Explore Our {{ selectedCat }} Collection</NuxtLink
        >
      </div>
    </section>

    <!-- Collection showcase-->
    <section
      class="hero showcase"
      :style="`--showcase-bg-url: url(${showcaseUrl})`">
      <div class="hero-container">
        <div class="hero-card">
          <div class="hero-img">
            <img src="@/assets/img/FLADENI-1572.jpg" alt="Fladeni Item" />
          </div>
          <div class="hero-cta">
            <h3 class="section-title">Summer 2024</h3>
            <h1 class="page-title">
              Elegance Redefined <br />
              Discover Your Signature Look
            </h1>
            <a href="/collections" class="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </section>

    <!--Random Item  -->
    <section class="all">
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
        <swiper-slide v-for="(item, index) in paginatedAllItems" :key="index">
          <div class="featured-item">
            <NuxtLink :to="`/products/${item.name}`" class="featured-links">
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
    </section>
  </main>
</template>

<script setup>
import bgImg from "@/assets/img/FLADENI-1704.jpg";
import showcaseImg from "@/assets/img/FLADENI-1572.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Reactives
const imageUrl = ref(bgImg);
const showcaseUrl = ref(showcaseImg);
const catTitles = ref(["Dresses", "Skirts", "Jewelry"]);
const selectedTitleIndex = ref(0);
const selectedCat = ref(catTitles.value[0]);
const items = ref([]);
const Allitems = ref([]);
const highlightedItems = ref([]);
const currentPage = ref(1);
const itemsPerPage = 4;
const loading = ref(true);

// CATEGORIES SECTION LOGIC
const selectedTitle = async (index, title) => {
  loading.value = true;
  selectedTitleIndex.value = index;
  selectedCat.value = title;

  await fetchShowcase();
};
const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage));

// Fetch items based on category
const fetchItems = async () => {
  try {
    await fetchShowcase(), await fetchAll();
  } catch (err) {
    console.error("There was an error:", err);
  } finally {
    loading.value = false;
  }
};

const fetchShowcase = async () => {
  const currentTitle = selectedCat.value;
  currentPage.value = 1;

  try {
    const data = await $fetch(`/json/${currentTitle.toLowerCase()}.json`);

    items.value = data;
  } catch (err) {
    console.error("There was an error:", err);
  } finally {
    loading.value = false;
  }
};

const fetchAll = async () => {
  try {
    const data = await $fetch(`/json/all.json`);

    Allitems.value = data.sort(() => Math.random() - 0.5);

    const highlightedProducts = data.filter((item) => item.highlight);

    // Randomly select 4 highlightedItems
    highlightedItems.value = highlightedProducts
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
  } catch (err) {
    console.error("There was an error:", err);
  } finally {
    loading.value = false;
  }
};

// Pagination controls
const nextPage = async () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    // items.value = await $fetch(`/json/${currentTitle.toLowerCase()}.json`);
  }
};

const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    // items.value = await $fetch(`/json/${currentTitle.toLowerCase()}.json`);
  }
};

// Fetch the initial category data on mount
onMounted(async () => {
  await fetchItems();
});

// Computed properties for pagination
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return items.value.slice(start, end);
});

const paginatedAllItems = computed(() => {
  const maxPages = 5;
  const itemsPerPageAll = 3;

  return Allitems.value.slice(0, itemsPerPageAll * maxPages);
});
</script>
