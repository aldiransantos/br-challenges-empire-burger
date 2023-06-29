<template>
	<section id="atendimento">
		<img src="@/assets/card-woman-eating.png" alt="mulher-comendo-hamburger" />
		<div>
			<h1>Atendimento <span>personalizado</span></h1>
			<p>
				Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria
				artesanal.
			</p>
			<button>Cardápio Imperial</button>
		</div>
	</section>
</template>

<script>
export default {
	name: 'AtendimentoSection'
};
</script>

<style lang="scss" scoped>
#atendimento {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
	align-items: center;
	justify-content: center;
	width: 1170px;
	max-width: 100%;
	margin: 0 auto 64px;
	padding-bottom: 128px;
	border-bottom: 1px solid rgba(29, 6, 5, 0.15);

	h1 {
		font: 400 41.42px/ 45.56px 'Lilita One', cursive;
		color: #3b200b;

		span {
			background: #f59a1b;
			border-radius: 8px;
			padding: 2px 10px;
			position: relative;
			left: -10px;
		}
	}
	p {
		font-size: 21px;
		line-height: 30px;
		margin-top: 10px;
		color: rgba(29, 6, 5, 0.69);
	}
	button {
		background: #f43127;
		border-radius: 5.21535px;
		margin-top: 20.53px;
		padding: 10.43px 20.86px;
		font: 700 23.47px/33px 'Lato', sans-serif;
		color: #fff;

		&:hover {
			cursor: pointer;
		}
	}
}
</style>
