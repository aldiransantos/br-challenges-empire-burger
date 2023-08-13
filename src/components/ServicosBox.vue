<template>
	<div class="servicos" aria-label="Serviços">
		<div class="wrap-content">
			<div>
				<img src="../assets/icons/burger.svg" alt="artesanal" />
				<div>
					<h1 class="title">Artesanal</h1>
					<p class="description">Nossas receitas são feitas com todo cuidado</p>
				</div>
			</div>
			<div>
				<img src="../assets/icons/headset.svg" alt="atendimento" />
				<div>
					<h1 class="title">Atendimento</h1>
					<p class="description">Totalmente personalizado</p>
				</div>
			</div>
			<div>
				<img src="../assets/icons/delivery.svg" alt="delivery" />
				<div>
					<h1 class="title">Delivery Speed</h1>
					<p class="description">Entregamos menos de 45 minutos</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ServicosBox'
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

@media screen and (max-width: 657.98px) {
	.servicos {
		width: 100%;
		height: 236px;
		padding: 0 36.21px;

		.wrap-content {
			grid-template-columns: repeat(auto, minmax(var(--auto-grid-min-size), 1fr));
			top: -108px;

			> div {
				&:nth-of-type(2) {
					height: 101px;
					grid-template-rows: 1fr;

					div {
						align-items: center;
					}
				}

				&:nth-of-type(2) img {
					margin-left: 0;
				}

				&:nth-of-type(2):before,
				&:nth-of-type(2):after {
					content: '';
					width: 100%;
					height: inherit;
					position: absolute;
					border-top: 1px solid $brown-15;
					border-bottom: 1px solid $brown-15;
				}

				&:nth-of-type(2):before {
					border-left: 0 solid;
					border-right: 0 solid;
				}
			}
		}
	}
}

@media screen and (max-width: 389.98px) {
	.servicos .wrap-content {
		grid-gap: 12px;
		padding: 12px;

		> div {
			justify-content: start;

			img {
				margin-right: 12px;
			}

			div p {
				font-size: 14px;
			}
		}
	}
}
</style>
