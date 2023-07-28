<template>
	<section id="atendimento">
		<img src="@/assets/card-woman-eating.png" alt="mulher-comendo-hamburger" />
		<div>
			<h1 class="heading-large">
				<span class="espaco">Atendimento</span>
				<span class="destaque">personalizado</span>
			</h1>
			<p>
				Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria
				artesanal.
			</p>
			<button class="cta">Cardápio Imperial</button>
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
	align-items: center;
	justify-content: center;
	gap: 32px;
	width: 1170px;
	max-width: calc(100% - 40px);
	margin: 0 auto 64px;
	padding-bottom: 128px;
	border-bottom: 1px solid rgba(29, 6, 5, 0.15);

	h1 {
		display: flex;
		flex-direction: column;
		width: fit-content;
		color: #3b200b;

		.espaco {
			margin-right: 12px;
		}

		.destaque {
			background: #f59a1b;
			border-radius: 8px;
			padding: 2px 10px;
			position: relative;
			left: -10px;
		}
	}
	p {
		width: 482.419px;
		margin-top: 10px;
		margin-bottom: 20.5px;
		font-size: clamp(16px, 2.2vw, 21px);
		line-height: 140%;
		color: rgba(29, 6, 5, 0.69);
	}
}

@media screen and (max-width: 657.98px) {
	#atendimento {
		gap: 16px;

		p {
			width: 100%;
		}
	}
}

@media (min-width: 658px) and (max-width: 946.98px) {
	#atendimento > div {
		margin: 0 auto;
		text-align: center;
	}

	#atendimento h1 {
		margin: 0 auto;

		.espaco {
			margin: 0;
		}
	}
}

@media screen and (max-width: 946.98px) {
	#atendimento {
		grid-template-columns: 1fr;
		max-width: calc(100% - 48px);
		padding-bottom: 64px;

		> img {
			max-width: 600px;
			margin: 0 auto;
		}

		p {
			margin-top: 8px;
			margin-bottom: 8.37px;
		}

		h1 .destaque {
			display: block;
			padding: 2px 5px;
			left: -5px;
		}
	}
}
</style>
