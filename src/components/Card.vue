<template>
	<div class="card card-main" :class="cardClasses">
		<h4 class="service-title__special">{{ title }}</h4>
		<p class="service-description">{{ description }}</p>
	</div>
</template>

<script setup>
defineProps({
	title: String,
	description: String,
	cardClasses: {
		type: Array,
		default: () => [],
	},
});
</script>
