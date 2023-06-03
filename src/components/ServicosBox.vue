<template>
	<div class="servicos">
		<div>
			<img src="../assets/icons/burger.svg" alt="artesanal" />
			<div>
				<h3>Artesanal</h3>
				<p>Nossas receitas são feitas com todo cuidado</p>
			</div>
		</div>
		<span class="separador"></span>
		<div>
			<img src="../assets/icons/headset.svg" alt="atendimento" />
			<div>
				<h3>Atendimento</h3>
				<p>Totalmente personalizado</p>
			</div>
		</div>
		<span class="separador"></span>
		<div>
			<img src="../assets/icons/delivery.svg" alt="delivery" />
			<div>
				<h3>Delivery Speed</h3>
				<p>Entregamos menos de 45 minutos</p>
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
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	margin: 0 auto;
	padding: 17.5px 21px;
	width: 970px;
	background-color: #fff;
	box-shadow: 0px 4px 40px rgba(179, 155, 132, 0.5);
	border-radius: 10px;
	position: relative;
	top: -50px;
	z-index: 9;

	div {
		position: relative;
		display: grid;
		grid-template-areas:
			'img title'
			'img description';

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

	.separador::before {
		content: '';
		display: block;
		height: 83.53px;
		border: 1px solid rgba(73, 46, 21, 0.15);
	}
}
</style>
