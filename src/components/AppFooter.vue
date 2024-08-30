<template>
  <footer>
    <div class="footer">
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-company">
            <div class="footer-brand">
              <h3 class="brand-secondary">fladeni</h3>
              <p class="section-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                molestias! Laudantium corporis delectus laboriosam voluptate
                incidunt doloremque quam suscipit, excepturi consectetur
                possimus sunt alias temporibus?
              </p>
            </div>
            <div class="footer-contact">
              <a href="tel:+555555555">+(225) 555 555 5555</a>
            </div>
          </div>
          <div class="footer-shop">
            <h3 class="brand-primary">Collections</h3>
            <div class="footer-links">
              <NuxtLink
                v-for="(item, index) in availableCollections"
                :key="index"
                class="footer-link"
                :to="`/collections/${item}`"
                >{{ item }}</NuxtLink
              >
            </div>
          </div>
          <div class="footer-highlights">
            <h3 class="brand-primary">Highlights</h3>
            <div class="footer-highlights__container">
              <NuxtLink to="" class="footer-highlight">
                <img src="@/assets/img/FLADENI-1704.jpg" alt="" />
              </NuxtLink>
              <NuxtLink to="" class="footer-highlight">
                <img src="@/assets/img/FLADENI-1704.jpg" alt="" />
              </NuxtLink>
              <NuxtLink to="" class="footer-highlight">
                <img src="@/assets/img/FLADENI-1704.jpg" alt="" />
              </NuxtLink>
              <NuxtLink to="" class="footer-highlight">
                <img src="@/assets/img/FLADENI-1704.jpg" alt="" />
              </NuxtLink>
              <NuxtLink to="" class="footer-highlight">
                <img src="@/assets/img/FLADENI-1704.jpg" alt="" />
              </NuxtLink>
              <NuxtLink to="" class="footer-highlight">
                <img src="@/assets/img/FLADENI-1704.jpg" alt="" />
              </NuxtLink>
              <NuxtLink to="" class="footer-highlight">
                <img src="@/assets/img/FLADENI-1704.jpg" alt="" />
              </NuxtLink>
              <NuxtLink to="" class="footer-highlight">
                <img src="@/assets/img/FLADENI-1704.jpg" alt="" />
              </NuxtLink>
              <NuxtLink to="" class="footer-highlight">
                <img src="@/assets/img/FLADENI-1704.jpg" alt="" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>
              &copy;2024. <span class="brand-tertiary">Fladeni</span> All Rights
              Reserved
            </p>
            <div class="footer-copyright__links">
              <h3 class="brand-tertiary">Follow Us</h3>
              <div class="footer-social">
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
                    fill="#f8f7f7"
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
              <div class="footer-social">
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
                    fill="#f8f7f7"
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
    </div>
  </footer>
</template>

<script setup>
// Reactive States
const isMobileMenuVisible = ref(false);
const availableCollections = ref([]);
const loading = ref(false);

// Define Props
const props = defineProps({
  scrollTop: { type: Function },
});

// Fetch items based on category
const fetchAll = async () => {
  try {
    const data = await $fetch(`/json/all.json`);

    const findCollections = [...new Set(data.map((item) => item.collections))];

    availableCollections.value = findCollections;
    console.log(availableCollections.value);
  } catch (err) {
    console.error("There was an error:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await fetchAll();
});

// Mobile Menu
const closeMobileMenu = () => {
  isMobileMenuVisible.value = false;
};
</script>

<style lang="scss" scoped></style>
