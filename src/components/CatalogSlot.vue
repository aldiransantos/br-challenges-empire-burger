<template>
	<div class="cardapio-imperial">
		<h2 class="heading">
			<slot>{{ title }}</slot>
		</h2>
		<div class="board" v-if="catalog.length >= 1">
			<div class="item" v-for="(burger, index) in catalog" :key="index">
				<h3 class="plate">{{ burger.plate }}</h3>
				<h3 class="price">
					{{ formatPrice(burger.price) }}
				</h3>
				<p class="ingredients">{{ burger.ingredients }}</p>
			</div>
		</div>
		<div class="board" v-else>
			<div class="item">
				<h3>Estamos preparando o Cardápio...</h3>
			</div>
		</div>
	</div>
</template>

<script defer>
export default {
	name: 'CatalogSlot',
	props: {
		title: {
			type: String,
			default: 'Cardápio Imperial'
		}
	},
	data() {
		return {
			catalog: []
		};
	},
	methods: {
		async getCatalog() {
			await fetch('https://api.brchallenges.com/api/empire-burger/menu')
				.then((resp) => resp.json())
				.then((resp) => {
					this.catalog = resp;
				});
		},
		formatPrice(value) {
			value = Number(value);
			if (!isNaN(value)) {
				return new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				}).format(value);
			} else return '';
		}
	},
	mounted() {
		this.getCatalog();
	}
};
</script>

<style></style>
