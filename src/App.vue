<template>
	<div id="app">
		<TheHeader />
		<HeroSection />
		<ServicosBox />
		<PromocaoSection />
		<TheAddress />
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import HeroSection from '@/components/HeroSection.vue';
import ServicosBox from '@/components/ServicosBox.vue';
import PromocaoSection from '@/components/PromocaoSection.vue';
import TheAddress from '@/components/TheAddress.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
	components: {
		TheHeader,
		HeroSection,
		ServicosBox,
		PromocaoSection,
		TheAddress,
		TheFooter
	}
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

* {
	box-sizing: border-box;
}

html {
	scroll-behavior: smooth;
}

body {
	background: #faf3f2;
}

body,
ul,
li,
h1,
h2,
h3,
h4,
p {
	padding: 0;
	margin: 0;
}

h1,
h2,
h3 {
	text-transform: uppercase;
}

ul {
	display: flex;
	align-items: center;
	list-style: none;
}

img {
	max-width: 100%;
	display: block;
}

button {
	border: transparent;
}

p {
	font: 400 18px/25px 'Lato', sans-serif;
}

a {
	list-style: none;
	text-decoration: none;
	color: #635352;
	transition: 0.2s;

	&:hover,
	&.router-link-exact-active {
		color: #34201f;
		transition: 0.2s;
		font-weight: bold;
	}
}
</style>
