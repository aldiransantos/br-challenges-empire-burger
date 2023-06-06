<template>
	<section id="cardapio">
		<p>Cardapio</p>
		<button @click="getCardapio">Click</button>
		<div id="menuBoard" v-for="(burger, index) in cardapio" :key="index">
			<p>{{ burger.plate }}</p>
			<p>{{ burger.price }}</p>
			<p>{{ burger.ingredients }}</p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'CardapioSection',
	data() {
		return {
			cardapio: ''
		};
	},
	methods: {
		async getCardapio() {
			await fetch('https://api.brchallenges.com/api/empire-burger/menu')
				.then((resp) => resp.json())
				.then((resp) => {
					this.cardapio = resp;
				});
		}
	},
	created() {
		this.getCardapio();
	}
};
</script>

<style></style>
