<template>
	<div id="app">
		<HomePage />
	</div>
</template>

<script>
export default {
	components: {
		HomePage: () => import('@/components/HomePage.vue')
	}
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
