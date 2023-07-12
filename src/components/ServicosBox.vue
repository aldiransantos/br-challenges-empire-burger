<template>
	<div class="servicos">
		<div class="wrap-content">
			<div>
				<img src="../assets/icons/burger.svg" alt="artesanal" />
				<div>
					<h3>Artesanal</h3>
					<p>Nossas receitas são feitas com todo cuidado</p>
				</div>
			</div>
			<div>
				<img src="../assets/icons/headset.svg" alt="atendimento" />
				<div>
					<h3>Atendimento</h3>
					<p>Totalmente personalizado</p>
				</div>
			</div>
			<div>
				<img src="../assets/icons/delivery.svg" alt="delivery" />
				<div>
					<h3>Delivery Speed</h3>
					<p>Entregamos menos de 45 minutos</p>
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
.servicos {
	display: grid;
	padding: 0 20px;
	width: 100%;
	max-width: 970px;
	height: 118.538px;
	margin: 0 auto;

	@media screen and (max-width: 657.98px) {
		width: 355px;
		max-width: 100%;
	}

	.wrap-content {
		display: grid;
		--auto-grid-min-size: 17rem;
		grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
		grid-gap: 1rem;
		align-items: center;
		padding: 17.5px 21px;
		background-color: #fff;
		box-shadow: 0px 4px 40px rgba(179, 155, 132, 0.5);
		border-radius: 10px;
		position: relative;
		top: -50px;

		@media screen and (max-width: 657.98px) {
			top: -108px;
		}

		& > * {
			max-width: 400px;
		}

		& > * + * {
			margin-top: 1rem;
		}

		> div {
			display: grid;
			grid-template-areas:
				'img title'
				'img description';
			align-items: center;
			justify-content: center;
			position: relative;

			&:nth-of-type(2) img {
				margin-left: 21px;
			}

			&:nth-of-type(2):before,
			&:nth-of-type(2):after {
				content: '';
				height: 83.53px;
				position: absolute;
				border-left: 1px solid rgba(73, 46, 21, 0.15);
				border-right: 1px solid rgba(73, 46, 21, 0.15);
			}

			&:nth-of-type(2):after {
				right: 0;
			}

			@media screen and (max-width: 657.98px) {
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
				&:nth-of-type(2):before {
					border-left: 0 solid;
					border-right: 0 solid;
				}
				&:nth-of-type(2):before,
				&:nth-of-type(2):after {
					content: '';
					width: 100%;
					height: inherit;
					position: absolute;
					border-top: 1px solid rgba(73, 46, 21, 0.15);
					border-bottom: 1px solid rgba(73, 46, 21, 0.15);
				}
			}

			@media (min-width: 657.98px) and (max-width: 945.98px) {
				&:last-child {
					grid-column: span 2;
					grid-row: 2;
					margin-top: 8px;
				}
			}

			@media (max-width: 946px) {
				&:nth-of-type(2):after {
					display: none;
				}
			}

			img {
				grid-area: img;
				background: #fae2cb;
				clip-path: circle(50%);
				height: 60px;
				width: 60px;
				object-fit: none;
				margin-right: 18px;
			}

			div {
				h3 {
					grid-area: title;
					font: 400 20px/22px 'Lilita One', cursive;
					margin: 0 0 5px 0;
				}
				p {
					grid-area: description;
					width: 170px;
					font: 400 16px/19px 'Lato', sans-serif;
					color: rgba(29, 6, 5, 0.69);
					opacity: 0.6;
				}
			}
		}
	}

	@supports (display: grid) {
		.wrap-content {
			grid-template-columns: repeat(auto-fit, minmax(var(--auto-grid-min-size), 1fr));
		}

		.wrap-content > * {
			max-width: unset;
		}

		.wrap-content > * + * {
			margin-top: unset;
		}
	}
}
</style>
