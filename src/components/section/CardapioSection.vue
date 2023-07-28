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

<style lang="scss" scoped>
#cardapio {
	height: 575px;
	background: url('@/assets/banner-menu.png') no-repeat left center, #3b200b;
	margin-bottom: 72px;
	padding: 0 20px;

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
				color: #3b200b;

				span {
					background: #f59a1b;
					border-radius: 8px;
					padding: 0 5px 3px;
				}
			}
			p {
				width: 437.88px;
				margin-top: 9.66px;
				font-size: clamp(14px, 1.367vw, 16px);
				line-height: 110%;
				color: rgba(29, 6, 5, 0.69);
			}
			button {
				background: #f43127;
				border-radius: 5.21535px;
				margin-top: 18.16px;
				padding: 10.43px 20.86px;
				font: 700 16px/22px 'Lato', sans-serif;
				color: #fff;
				cursor: pointer;
				transition: all 0.2s ease-in-out;

				&:hover {
					background-color: #ff0000;
					transition: all 0.2s ease-in-out;
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
				width: 100%;

				h2 {
					color: #f59a1b;
					margin-bottom: 16px;
				}
				.board {
					display: grid;
					gap: 32px;

					.item {
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
								width: 100%;
								overflow: hidden;
								white-space: nowrap;
								grid-area: plate;

								&::after {
									content: '.........................................................................................................................................................................................';
									letter-spacing: 1px;
									margin-left: 4px;
								}
							}
							&.price {
								display: grid;
								grid-area: price;
								justify-content: end;
								width: 84px;
								background-color: #3b200b;
							}
						}
						p {
							grid-area: ingredients;
							width: 464px;
							font-size: clamp(14px, 1.367vw, 16px);
							line-height: 140%;
							color: rgba(255, 255, 255, 0.9);
						}
					}
				}
			}
		}
	}
}

@media (max-width: 1023.98px) {
	#cardapio {
		height: initial;
		background: none;
		margin-bottom: 48px;
		padding: 0;

		.wrap-content {
			grid-template-columns: 1fr;

			.left,
			.right {
				width: 100%;
			}

			.left {
				background: url('@/assets/banner-menu-mobile.png') no-repeat center center;
				background-size: cover;
				padding: 40px 24px;

				h1 span {
					padding: 1px 4px;
					text-wrap: nowrap;
				}

				p {
					width: 100%;
				}
			}

			.right {
				height: auto;
				padding: 54px 24px 48px;

				.cardapio-imperial {
					h2 {
						margin-bottom: 24px;
						span {
							display: none;
						}
					}
					.board {
						gap: 16px;

						.item {
							grid-template-columns: auto;

							p {
								width: initial;
							}
						}
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
