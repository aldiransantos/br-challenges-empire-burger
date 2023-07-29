<template>
	<section id="cardapio">
		<div class="wrap-content">
			<div class="left">
				<div class="ver-cardapio">
					<h1 class="heading-large">
						Escolha o seu combo imperial, <span>peça agora!</span>
					</h1>
					<p>
						Temos vários tipos de pratos para a nossa realeza, fique esperto porque
						temos sempre promoção!
					</p>
					<button>Ver Cardápio Completo</button>
				</div>
			</div>
			<div class="right">
				<div class="cardapio-imperial">
					<h2 class="heading">Cardápio imperial <span>| Burger</span></h2>
					<div class="board">
						<div class="item" v-for="(burger, index) in cardapio" :key="index">
							<h3 class="plate">{{ burger.plate }}</h3>
							<h3 class="price">
								{{ formatPrice(burger.price) }}
							</h3>
							<p class="ingredients">{{ burger.ingredients }}</p>
						</div>
					</div>
				</div>
			</div>
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
	created() {
		this.getCardapio();
	}
};
</script>

<style lang="scss" scoped></style>
