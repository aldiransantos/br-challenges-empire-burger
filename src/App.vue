<template>
	<div id="app">
		<TheHeader />
		<main id="main">
			<transition mode="out-in">
				<router-view />
			</transition>
		</main>
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
	components: {
		TheHeader,
		TheFooter
	}
};
</script>

<style lang="scss">
* {
	box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
	padding: 0;
	margin: 0;
}

ul {
	display: flex;
	list-style: none;
}

img {
	max-width: 100%;
	display: block;
}
a {
	list-style: none;
	text-decoration: none;

	&.router-link-exact-active {
		color: rgba(52, 32, 31, 1);
		font-weight: bold;
	}
}
a:hover {
	color: rgba(52, 32, 31, 1);
	font-weight: bold;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
