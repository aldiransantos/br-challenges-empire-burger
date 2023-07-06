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

	.wrap-content {
		display: grid;
		grid-auto-flow: column;
		width: 100%;
		max-width: 970px;
		height: 118.538px;
		align-items: center;
		margin: 0 auto;
		padding: 17.5px 21px;
		background-color: #fff;
		box-shadow: 0px 4px 40px rgba(179, 155, 132, 0.5);
		border-radius: 10px;
		position: relative;
		top: -50px;

		div {
			display: grid;
			grid-template-areas:
				'img title'
				'img description';
			align-items: center;
			justify-content: center;
			position: relative;

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
}
</style>
