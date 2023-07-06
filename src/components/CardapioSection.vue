<template>
	<section id="cardapio">
		<div class="wrap-content">
			<div class="left">
				<div class="ver-cardapio">
					<h1>Escolha o seu combo imperial, <span>peça agora!</span></h1>
					<p>
						Temos vários tipos de pratos para a nossa realeza, fique esperto porque
						temos sempre promoção!
					</p>
					<!-- fazer botao abrir um modal com o cardapio -->
					<button>Ver Cardápio Completo</button>
				</div>
			</div>
			<div class="right">
				<div class="cardapio-imperial">
					<h2>Cardápio imperial | Burger</h2>
					<div class="board" v-for="(burger, index) in cardapio" :key="index">
						<h3 class="plate">{{ burger.plate }}</h3>
						<h3 class="price">
							{{ formatPrice(burger.price) }}
						</h3>
						<p class="ingredients">{{ burger.ingredients }}</p>
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

<style lang="scss" scoped>
#cardapio {
	height: 575px;
	background: url('@/assets/banner-menu.png') no-repeat left center, #3b200b;
	margin-bottom: 72px;
	padding: 0 20px;

	p {
		font-size: 16px;
		line-height: 22.4px;
	}

	.wrap-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		max-width: 1170px;
		height: inherit;
		margin: 0 auto;
		align-items: center;

		.left {
			width: 472px;
			transition: ease-out 0.2s;

			h1 {
				font: 400 41.42px/ 45.56px 'Lilita One', cursive;
				color: #3b200b;

				span {
					background: #f59a1b;
					border-radius: 8px;
					padding: 2px 5px;
				}
			}
			p {
				width: 437.88px;
				margin-top: 9.66px;
				color: rgba(29, 6, 5, 0.69);
			}
			button {
				background: #f43127;
				border-radius: 5.21535px;
				margin-top: 18.16px;
				padding: 10.43px 20.86px;
				font: 700 16px/22px 'Lato', sans-serif;
				color: #fff;

				&:hover {
					cursor: pointer;
				}
			}
		}

		.right {
			padding-left: 30px;
			display: flex;
			align-items: center;
			height: 575px;
			background-color: #3b200b;

			.cardapio-imperial {
				h2 {
					font: 400 32px/35px 'Lilita One', cursive;
					text-transform: uppercase;
					color: #f59a1b;
					margin-bottom: 16px;
				}
				.board {
					margin-bottom: 32px;
					display: grid;
					grid-template-columns: minmax(380px, auto) 1fr;
					grid-template-areas:
						'plate price'
						'ingredients ingredients';

					&:last-child {
						margin-bottom: 0;
					}

					h3 {
						text-transform: uppercase;
						color: #fae4d0;
						float: left;
						margin-bottom: 4px;

						&.plate {
							width: 472px;
							overflow: hidden;
							white-space: nowrap;
							grid-area: plate;

							&::after {
								content: '........................................................................................................................';
								letter-spacing: 1px;
								margin-left: 4px;
							}
						}
						&.price {
							display: grid;
							grid-area: price;
							justify-content: end;
							width: 96px;
							padding-left: 4px;
							background-color: #3b200b;
						}
					}
					p {
						color: rgba(255, 255, 255, 0.9);
						width: 464px;
						grid-area: ingredients;
					}
				}
			}
		}
	}
}

@media (max-width: 1680px) {
	.left {
		background-color: rgba(255, 255, 255, 0.5);
		color: rgba(29, 6, 5, 1);
		box-shadow: -8px 4px 20px 24px rgba(255, 255, 255, 0.5);
		transition: ease-in 0.2s;
	}
}
</style>
