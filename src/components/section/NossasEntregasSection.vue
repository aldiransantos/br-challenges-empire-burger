<template>
	<section id="contato" class="nossas-entregas">
		<img src="@/assets/card-phone.png" alt="delivery" />
		<div class="informacoes">
			<h1 class="heading">Nossas entregas</h1>
			<ul>
				<li>
					<img src="@/assets/icons/whatsapp.svg" alt="Whatsapp" />
					<div class="descricao">
						<h3>Whatsapp</h3>
						<p>Vamos direto ao ponto, sem perder tempo!</p>
					</div>
				</li>
				<li>
					<img src="@/assets/icons/delivery.svg" alt="Entrega" />
					<div class="descricao">
						<h3>Entrega</h3>
						<p>Entregamos menos de 45 minutos na porta da sua casa!</p>
					</div>
				</li>
				<li>
					<img src="@/assets/icons/ice-cream.svg" alt="Sobremesa" />
					<div class="descricao">
						<h3>Sobremesa</h3>
						<p>Pedidos assima de 100 reais, ganham brindes.</p>
					</div>
				</li>
				<li>
					<img src="@/assets/icons/ifood.svg" alt="iFood" />
					<div class="descricao">
						<h3>iFood</h3>
						<p>Nossa loja é Top 1 da região!</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="pedido">
			<div class="chamada">
				<img src="@/assets/icons/phone.svg" alt="Phone" />
				<div>
					<h3 class="heading-small">faça o seu pedido agora mesmo!</h3>
					<p>
						Venha saborear a melhor experiência de hamburguenses artesanal do Empires
						Burger, com temática medieval!
					</p>
				</div>
			</div>
			<button>Solicitar pedido</button>
		</div>
	</section>
</template>

<script>
export default {
	name: 'NossasEntregasSection'
};
</script>

<style lang="scss" scoped></style>
