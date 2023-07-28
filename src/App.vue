<template>
	<div id="app">
		<HomePage />
	</div>
</template>

<script>
import HomePage from '@/components/HomePage.vue';

export default {
	components: {
		HomePage
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

p {
	font: 400 18px/25px 'Lato', sans-serif;
}

h1,
h2,
h3 {
	font-family: 'Lilita One', cursive;
	font-weight: 400;
	line-height: 110%;
	color: rgba(29, 6, 5, 0.9);
	text-transform: uppercase;
}

.heading-large {
	font-size: clamp(25px, 3.6vw, 42px);
}

.heading {
	font-size: clamp(25px, 3.4vw, 32px);
}

.heading-small {
	font-size: clamp(18px, 2.7vw, 25px);
}

ul {
	display: flex;
	align-items: center;
	list-style: none;
}

a {
	list-style: none;
	text-decoration: none;
	color: #635352;
	transition: 0.2s;

	&:hover,
	.router-link-exact-active {
		color: #34201f;
		transition: 0.2s;
		font-weight: 700;
	}
}

button {
	border: transparent;
}

.cta {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 53px;
	padding: 0 20px;
	border-radius: 5px;
	background-color: #f43127;
	font-family: 'Lato', sans-serif;
	font-weight: 700;
	font-size: clamp(16px, 2.8vw, 24px);
	line-height: 110%;
	color: #fff;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #ff0000;
		color: #fff;
		transition: all 0.2s ease-in-out;
	}
}

@media screen and (max-width: 657.98px) {
	.cta {
		height: 43.32px;
	}
}

.container {
	display: grid;
	grid-template-columns: minmax(100%, 1170px);
	margin: 0 auto;
	padding: 0 24px;
}

img {
	width: 100%;
	display: block;
}

.medias a {
	background-color: #f59a1b;
	transition: all 0.2s ease-in-out;

	&:hover {
		scale: 1.1;
		transition: all 0.2s ease-in-out;
	}
}
.logo-ifood {
	width: 27px;
	height: 14.269px;
	-webkit-mask: url('@/assets/icons/ifood.svg') no-repeat center;
	mask: url('@/assets/icons/ifood.svg') no-repeat center;
}

.logo-instagram {
	width: 19px;
	height: 19px;

	-webkit-mask: url('@/assets/icons/instagram.svg') no-repeat center;
	mask: url('@/assets/icons/instagram.svg') no-repeat center;
}
</style>
