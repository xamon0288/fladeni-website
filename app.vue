<template>
	<main>
		<AppHeader :scrollTop="scrollTop" />
		<NuxtLayout>
			<NuxtPage :scrollTop="scrollTop" />
		</NuxtLayout>
		<AppFooter :scrollTop="scrollTop" />
	</main>
</template>

<script setup>
import { ref, onUnmounted } from "vue";

// Reactive States

// Scroll to the top of the page
const scrollTop = () => {
	window.scrollTo(0, 0);
};

// SEO META's
//
useSeoMeta({
	title: "Fladeni",
	ogTitle: "metaTitle",
	description: "metaMission",
	ogDescription: "metaMission",
	ogImage: "",
	ogUrl: "https://fladeni.com",
	twitterCard: "summary_large_image",
	twitterTitle: "metaTitle",
	twitterDescription: "metaMission",
	twitterImage: "",
});
</script>
