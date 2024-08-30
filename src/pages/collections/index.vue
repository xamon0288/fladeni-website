<template>
  <main>
    <div class="collections">
      <div class="collections-container">
        <div class="collections-header">
          <h1 class="brand-primary">Collections</h1>
        </div>
        <div v-if="loading">Loading...</div>
        <div v-else>
          <section class="hero" :style="`--hero-bg-url: url(${imageUrl})`">
            <div class="hero-container">
              <swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :slides-per-view="1"
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
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }">
                <swiper-slide
                  v-for="(item, index) in availableCollections"
                  :key="index">
                  <div class="hero-card">
                    <div class="hero-img">
                      <img
                        src="@/assets/img/FLADENI-1704.jpg"
                        alt="Fladeni Item" />
                    </div>
                    <div class="hero-cta">
                      <h3 class="section-title">{{ item }}</h3>
                      <h1 class="page-title">
                        GORGEOUS FASHION TRENDS <br />
                        FOR THE SUMMER
                      </h1>
                      <a :href="`/collections/${item}`" class="btn btn-primary"
                        >Shop Now</a
                      >
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </section>

          <Gallery />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import bgImg from "@/assets/img/FLADENI-1704.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Reactive States
const imageUrl = ref(bgImg);
const availableCollections = ref([]);
const loading = ref(false);

// Fetch items based on category
const fetchAll = async () => {
  try {
    const data = await $fetch(`/json/all.json`);

    const findCollections = [...new Set(data.map((item) => item.collections))];

    availableCollections.value = findCollections;
  } catch (err) {
    console.error("There was an error:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await fetchAll();
});
</script>

<style lang="scss" scoped>
#slider {
  height: 10px;
}

#slider .noUi-connect {
  background: #c4b553;
}

#slider .noUi-handle {
  height: 18px;
  width: 18px;
  top: -5px;
  right: -9px; /* half the width */
  border-radius: 9px;
}
</style>
