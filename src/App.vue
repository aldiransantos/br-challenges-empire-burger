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

h1,
h2,
h3 {
	text-transform: uppercase;
}

p {
	font: 400 18px/25px 'Lato', sans-serif;
}

h3 {
	font: 400 20px/22px 'Lilita One', cursive;
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

img {
	max-width: 100%;
	display: block;
}

button {
	border: transparent;
}

.container {
	display: grid;
	grid-template-columns: minmax(100%, 1170px);
	margin: 0 auto;
	padding: 0 20px;
}
</style>
