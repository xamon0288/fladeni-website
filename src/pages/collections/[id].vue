<template>
  <main>
    <div class="collections">
      <div class="collections-container">
        <div class="collections-header">
          <h1 class="brand-primary">{{ $route.params.id }}</h1>
        </div>
        <div v-if="loading">Loading...</div>
        <div v-else>
          <!-- Filters Section -->
          <div class="collections-filters">
            <!-- Custom Dropdown for Sorting -->
            <div class="dropdown" @click="toggleDropdown('sort')">
              <button class="dropdown-button">
                {{
                  selectedSort === "default"
                    ? "Default Sorting"
                    : selectedSort === "price_low_high"
                    ? "Price: Low to High"
                    : "Price: High to Low"
                }}
              </button>
              <ul v-if="isDropdownOpen.sort" class="dropdown-menu">
                <li @click="selectOption('sort', 'default')">
                  Default Sorting
                </li>
                <li @click="selectOption('sort', 'price_low_high')">
                  Price: Low to High
                </li>
                <li @click="selectOption('sort', 'price_high_low')">
                  Price: High to Low
                </li>
              </ul>
            </div>

            <!-- Custom Dropdown for View -->
            <div class="dropdown" @click="toggleDropdown('view')">
              <button class="dropdown-button">
                {{ selectedView }} Items per Row
              </button>
              <ul v-if="isDropdownOpen.view" class="dropdown-menu">
                <li @click="selectOption('view', 2)">2 Items per Row</li>
                <li @click="selectOption('view', 4)">4 Items per Row</li>
              </ul>
            </div>

            <!-- Price Slider -->

            <!-- Custom Dropdown for Size -->
            <div class="dropdown" @click="toggleDropdown('size')">
              <button class="dropdown-button">
                {{ selectedSize || "All Sizes" }}
              </button>
              <ul v-if="isDropdownOpen.size" class="dropdown-menu">
                <li @click="selectOption('size', '')">All Sizes</li>
                <li
                  v-for="size in availableSizes"
                  :key="size"
                  @click="selectOption('size', size)">
                  {{ size }}
                </li>
              </ul>
            </div>

            <!-- Custom Dropdown for Category -->
            <div class="dropdown" @click="toggleDropdown('category')">
              <button class="dropdown-button">
                {{ selectedCategory || "All Categories" }}
              </button>
              <ul v-if="isDropdownOpen.category" class="dropdown-menu">
                <li @click="selectOption('category', '')">All Categories</li>
                <li
                  v-for="category in availableCategories"
                  :key="category"
                  @click="selectOption('category', category)">
                  {{ category }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Product Display Section -->
          <div class="products-showcase__content">
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
          </div>

          <!-- Pagination Section -->
          <div class="collections-pagination">
            <button
              @click="changePage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="btn btn-secondary btn-secondary__special"
              :class="{ 'btn-disabled': currentPage === 1 }">
              Back
            </button>
            <button
              v-for="page in totalPages"
              :key="page"
              @click="changePage(page)"
              class="btn btn-secondary btn-secondary__special">
              {{ page }}
            </button>
            <button
              @click="changePage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="btn btn-secondary btn-secondary__special"
              :class="{ 'btn-disabled': currentPage === totalPages }">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const route = useRoute();

// Reactive State
const itemsPerPage = 12;
const currentPage = ref(1);
const totalPages = ref("");
const selectedSort = ref("default");
const selectedView = ref(4);
const selectedPriceRange = ref([0, 500]); // Default range, will be updated dynamically
const minPrice = ref(0);
const maxPrice = ref(500);
const selectedSize = ref("");
const selectedCategory = ref("");
const filteredItems = ref([]);
const allItems = ref([]);
const loading = ref(true);
const availableSizes = ref([]);
const availableCategories = ref([]);

const isDropdownOpen = ref({
  sort: false,
  view: false,
  size: false,
  category: false,
});

const toggleDropdown = (type) => {
  isDropdownOpen.value[type] = !isDropdownOpen.value[type];
};

const closeAllDropdowns = () => {
  isDropdownOpen.value = {
    sort: false,
    view: false,
    size: false,
    category: false,
  };
};

const selectOption = (type, value) => {
  switch (type) {
    case "sort":
      selectedSort.value = value;
      break;
    case "view":
      selectedView.value = value;
      break;
    case "size":
      selectedSize.value = value;
      break;
    case "category":
      selectedCategory.value = value;
      break;
  }
  applyFilters();
  closeAllDropdowns(); // Close the dropdown after selection
};

// Detect clicks outside of dropdowns
const handleClickOutside = (event) => {
  const dropdowns = document.querySelectorAll(".dropdown");
  let clickedInside = false;

  dropdowns.forEach((dropdown) => {
    if (dropdown.contains(event.target)) {
      clickedInside = true;
    }
  });

  if (!clickedInside) {
    closeAllDropdowns();
  }
};

// Fetch items based on category
const fetchAll = async () => {
  try {
    const data = await $fetch(`/json/all.json`);

    const foundProduct = data.filter(
      (item) => item.collections === route.params.id
    );

    if (foundProduct) {
      allItems.value = foundProduct;
    }

    // Set total Page
    totalPages.value = Math.ceil(allItems.value.length / 12);
    
    // Determine the price range based on the data
    const prices = foundProduct.map((item) => item.price);
    minPrice.value = Math.min(...prices);
    maxPrice.value = Math.max(...prices);
    selectedPriceRange.value = [minPrice.value, maxPrice.value];

    // Extract available categories
    availableCategories.value = [
      ...new Set(foundProduct.map((item) => item.category)),
    ];

    // Extract available sizes (ignore sizes with quantity 0)
    const sizesSet = new Set();
    foundProduct.forEach((item) => {
      for (const [size, quantity] of Object.entries(item.sizes)) {
        if (quantity > 0) {
          sizesSet.add(size);
        }
      }
    });
    availableSizes.value = [...sizesSet];

    applyFilters();
  } catch (err) {
    console.error("There was an error:", err);
  } finally {
    loading.value = false;
  }
};

// Initialize NoUiSlider

// Apply filters and sorting
const applyFilters = () => {
  let filtered = [...allItems.value];

  // Apply category filter
  if (selectedCategory.value) {
    filtered = filtered.filter(
      (item) => item.category === selectedCategory.value
    );
  }

  // Apply size filter
  if (selectedSize.value) {
    filtered = filtered.filter((item) => item.sizes[selectedSize.value] > 0);
  }

  // Apply price range filter
  filtered = filtered.filter(
    (item) =>
      item.price >= selectedPriceRange.value[0] &&
      item.price <= selectedPriceRange.value[1]
  );

  // Apply sorting
  if (selectedSort.value === "price_low_high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort.value === "price_high_low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  filteredItems.value = filtered;
  totalPages.value = Math.ceil(filteredItems.value.length / 12);
};

// Computed property for paginated items
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredItems.value.slice(start, start + itemsPerPage);
});

// Handle page change
const changePage = (page) => {
  if (
    page > 0 &&
    page <= Math.ceil(filteredItems.value.length / itemsPerPage)
  ) {
    currentPage.value = page;
  }
};

// Handle view change
const changeView = (view) => {
  selectedView.value = view;
};

// Handle sort change
const changeSort = (sort) => {
  selectedSort.value = sort;
  applyFilters();
};

// Handle size change
const changeSize = (size) => {
  selectedSize.value = size;
  applyFilters();
};

// Handle category change
const changeCategory = (category) => {
  selectedCategory.value = category;
  applyFilters();
};

onMounted(async () => {
  await fetchAll();
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
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
