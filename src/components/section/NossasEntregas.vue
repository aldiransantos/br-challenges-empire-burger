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

<style></style>
