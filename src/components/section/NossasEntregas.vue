<template>
	<section id="contato" class="nossas-entregas" aria-label="Nossas Entregas">
		<picture>
			<source media="(max-width: 657.98px)" srcset="@/assets/card-phone.webp" />
			<img
				loading="lazy"
				src="@/assets/card-phone-2x.webp"
				width="570"
				height="536"
				alt="Nossas Entregas smartphone"
			/>
		</picture>
		<div class="informacoes">
			<h1 class="heading">Nossas entregas</h1>
			<ul>
				<li>
					<img src="@/assets/icons/whatsapp.svg" alt="Whatsapp" />
					<div class="info">
						<h1 class="title">Whatsapp</h1>
						<p class="description">Vamos direto ao ponto, sem perder tempo!</p>
					</div>
				</li>
				<li>
					<img src="@/assets/icons/delivery.svg" alt="Entrega" />
					<div class="info">
						<h1 class="title">Entrega</h1>
						<p class="description">
							Entregamos menos de 45 minutos na porta da sua casa!
						</p>
					</div>
				</li>
				<li>
					<img src="@/assets/icons/ice-cream.svg" alt="Sobremesa" />
					<div class="info">
						<h1 class="title">Sobremesa</h1>
						<p class="description">Pedidos assima de 100 reais, ganham brindes.</p>
					</div>
				</li>
				<li>
					<img src="@/assets/icons/ifood.svg" alt="iFood" />
					<div class="info">
						<h1 class="title">iFood</h1>
						<p class="description">Nossa loja é Top 1 da região!</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="pedido">
			<div class="chamada">
				<img src="@/assets/icons/phone.svg" alt="Phone" />
				<div>
					<h1 class="title heading-small">faça o seu pedido agora mesmo!</h1>
					<p>
						Venha saborear a melhor experiência de hamburguenses artesanal do Empires
						Burger, com temática medieval!
					</p>
				</div>
			</div>
			<a href="https://www.ifood.com.br/" target="_blank">Solicitar pedido</a>
		</div>
	</section>
</template>

<script>
export default {
	name: 'NossasEntregas'
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

@media (min-width: 658px) and (max-width: 814.98px) {
	.nossas-entregas .pedido .chamada div p {
		width: 410px;
	}
	.nossas-entregas .pedido a {
		margin: 16px auto 0;
	}
}

@media screen and (max-width: 657.98px) {
	.nossas-entregas .pedido,
	.nossas-entregas .pedido .chamada {
		flex-direction: column;
	}

	.nossas-entregas {
		gap: 40px;

		.informacoes ul li .info {
			height: 69.558px;
		}

		.pedido {
			margin-top: 24px;
			padding: 12px 24px 16px;

			.chamada div {
				height: auto;
				margin-top: 8px;
				margin-left: 0;
				padding-top: 8px;
				padding-left: 0;
				border-left: none;
				border-top: 1px solid $brown-40;
				text-align: center;

				.title {
					margin-bottom: 4px;
				}

				p {
					width: 100%;
					padding: 0 0 16px;
				}
			}

			a {
				width: 100%;
				justify-content: center;
			}
		}
	}
}
</style>
