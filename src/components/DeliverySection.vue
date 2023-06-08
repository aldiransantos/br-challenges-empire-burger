<template>
	<section id="delivery">
		<div class="container">
			<img src="@/assets/card-phone.png" alt="delivery" />
			<div>
				<h1>Nossas entregas</h1>
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
		</div>
		<div class="pedido">
			<div class="chamada">
				<img src="@/assets/icons/phone.svg" alt="Phone" />
				<div>
					<h3>faça o seu pedido agora mesmo!</h3>
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
	name: 'DeliverySection'
};
</script>

<style lang="scss" scoped>
#delivery {
	width: 1170px;
	max-width: 100%;
	margin: 0 auto;

	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 29px;

		div h1 {
			font: 400 32px/35px 'Lilita One', cursive;
			color: rgba(29, 6, 5, 0.9);
			margin-bottom: 16px;
		}

		div ul {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 8px;

			li {
				display: flex;
				align-items: center;
				width: 569.44px;
				height: 90px;
				padding: 15px 23px;
				background: #fff;
				border-radius: 10px;
				transition: all 0.4s;

				&:hover {
					box-shadow: 0px 4px 40px rgba(179, 155, 132, 0.5);
					cursor: pointer;
				}

				img {
					background: #fae2cb;
					clip-path: circle(50%);
					height: 60px;
					width: 60px;
					object-fit: none;
				}

				.descricao {
					display: flex;
					justify-content: center;
					flex-direction: column;
					height: 45.3px;
					margin-left: 18px;
					padding-left: 24px;
					border-left: 1px solid rgba(29, 6, 5, 0.4);

					h3 {
						margin-bottom: 4px;
						font: 400 20px/22px 'Lilita One', cursive;
						color: rgba(29, 6, 5, 0.9);
					}

					p {
						font: 400 16px/19px 'Lato', sans-serif;
						color: rgba(29, 6, 5, 0.69);
					}
				}
			}
		}
	}

	.pedido {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 99.12px;
		padding: 14.11px 35.86px 14.11px 22.3px;
		background: #f43127;
		border-radius: 10px;

		.chamada {
			display: flex;
			align-items: center;

			img {
				background: rgba(29, 6, 5, 0.2);
				clip-path: circle(50%);
				height: 94.83px;
				width: 94.83px;
				object-fit: none;
			}

			div {
				display: flex;
				justify-content: center;
				flex-direction: column;
				height: 82.74px;
				margin-left: 15.45px;
				padding-left: 15.45px;
				border-left: 1px solid rgba(29, 6, 5, 0.4);

				h3 {
					font: 400 25px/28px 'Lilita One', cursive;
					text-transform: uppercase;
					color: rgba(29, 6, 5, 0.69);
					margin-bottom: 5.57px;
				}

				p {
					width: 466.27px;
					font: 400 16px/19px 'Lato', sans-serif;
					color: rgba(255, 255, 255, 0.9);

					span {
						font-weight: 700;
					}
				}
			}
		}
		button {
			padding: 9px 16px 7px 16px;
			background: #fae4d0;
			border-radius: 4px;
			font: 900 18px/25px 'Lato', sans-serif;
			text-transform: uppercase;
			color: #f43127;

			&:hover {
				cursor: pointer;
			}
		}
	}
}
</style>
