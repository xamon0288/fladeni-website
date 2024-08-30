<template>
  <div class="gallery">
    <div class="gallery-container">
      <div class="gallery-grid">
        <div class="gallery-img-first gallery-wrapper">
          <picture class="">
            <img src="@/assets/img/FLADENI-1537.jpg" alt="" loading="lazy" />
          </picture>
        </div>
        <div class="gallery-img-second gallery-wrapper">
          <picture class="">
            <img src="@/assets/img/FLADENI-1623.jpg" alt="" loading="lazy" />
          </picture>
        </div>
        <div class="gallery-img-third gallery-wrapper">
          <picture class="">
            <img src="@/assets/img/FLADENI-1665.jpg" alt="" loading="lazy" />
          </picture>
        </div>
        <div class="gallery-img-fourth gallery-wrapper">
          <picture class="">
            <img src="@/assets/img/FLADENI-1753.jpg" alt="" loading="lazy" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.gallery {
  &-container {
    max-width: 1600px;
    margin: 0 auto;
  }

  &-grid {
    display: grid;
    width: 100%;
    margin-top: 5rem;
    height: 600px;
    grid-template-rows: repeat(2, 1fr);
  }

  & picture {
    height: 100%;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &-img {
    &-first {
      grid-area: 1/1/3/2;
    }

    &-second {
      grid-area: 1/2/2/2;
    }

    &-third {
      grid-area: 2/2/3/3;
    }

    &-fourth {
      grid-area: 1/3/3/3;
    }
  }

  &-wrapper {
    width: 100%;
    overflow: hidden;
  }
}

@media screen and (min-width: 1920px) {
  .gallery {
    &-container {
      max-width: 1600px;
    }
  }
}

@media screen and (max-width: 768px) {
  .gallery {
    &-grid {
      height: 300px;
    }
  }
}
</style>
