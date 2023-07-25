<template>
	<section id="contato" class="nossas-entregas">
		<img src="@/assets/card-phone.png" alt="delivery" />
		<div class="informacoes">
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
	name: 'NossasEntregasSection'
};
</script>

<style lang="scss" scoped>
.nossas-entregas {
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: center;
	width: 1170px;
	max-width: calc(100% - 40px);
	gap: 32px;
	margin: 0 auto;

	.informacoes {
		h1 {
			margin-bottom: 16px;
			font-family: 'Lilita One', cursive;
			font-weight: 400;
			font-size: clamp(25px, 3.4vw, 32px);
			line-height: 110%;
			color: rgba(29, 6, 5, 0.9);
		}

		ul {
			display: grid;
			grid-template-columns: 1fr;
			gap: 8px;

			li {
				display: flex;
				align-items: center;
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
					max-width: 60px;
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
						font-family: 'Lilita One', cursive;
						font-weight: 400;
						font-size: clamp(18px, 2.7vw, 20px);
						line-height: 110%;
						color: rgba(29, 6, 5, 0.9);
					}

					p {
						font-family: 'Lato', sans-serif;
						font-weight: 400;
						font-size: clamp(14px, 2vw, 16px);
						line-height: 140%;
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
		grid-column: span 2;
		margin-top: 68px;
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
					font-family: 'Lilita One', cursive;
					font-weight: 400;
					font-size: clamp(18px, 2.7vw, 25px);
					line-height: 140%;
					text-transform: uppercase;
					color: rgba(29, 6, 5, 0.69);
					margin-bottom: 5.57px;
				}

				p {
					width: 466.27px;
					padding-right: 24px;
					font-family: 'Lato', sans-serif;
					font-weight: 400;
					font-size: clamp(14px, 1.7vw, 16px);
					line-height: 140%;
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
			font-family: 'Lato', sans-serif;
			text-transform: uppercase;
			font-weight: 900;
			font-size: clamp(16px, 1.95vw, 18px);
			color: #f43127;

			&:hover {
				cursor: pointer;
			}
		}
	}
}

@media screen and (max-width: 657.98px) {
	.nossas-entregas .pedido,
	.nossas-entregas .pedido .chamada {
		flex-direction: column;
	}

	.nossas-entregas {
		gap: 40px;

		.informacoes ul li .descricao {
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
				border-top: 1px solid rgba(29, 6, 5, 0.4);
				text-align: center;

				p {
					width: 300px;
					padding: 0 0 16px;
				}
			}

			button {
				width: 100%;
			}
		}
	}
}

@media (min-width: 658px) and (max-width: 946.98px) {
	.nossas-entregas {
		.informacoes ul {
			grid-template-columns: 1fr 1fr;
			gap: 12px;
		}

		.pedido {
			flex-wrap: wrap;

			.chamada {
				img {
					clip-path: circle(48%);
					height: 83.83px;
					width: 100.83px;
				}
				div {
					width: 100%;

					p {
						padding: 0;
					}
				}
			}

			button {
				margin: 12px auto 0;
			}
		}
	}
}

@media screen and (max-width: 946.98px) {
	.nossas-entregas {
		grid-template-columns: 1fr;
		max-width: calc(100% - 48px);

		> img {
			max-width: 600px;
			margin: 0 auto;
		}

		.informacoes ul li {
			width: 100%;
		}

		.pedido {
			grid-column: 1;

			.chamada div p {
				width: 100%;
			}
		}
	}
}
</style>
