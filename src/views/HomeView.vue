<template>
	<div>
		<section class="hero-section">
			<div>
				<p>Uma nova experiência!</p>
				<h1>King <span>burger</span></h1>
				<p>Para quem tem um <span>Apetite de um REI!</span></p>
				<button>Comprar Agora</button>
			</div>
		</section>

		<section class="servicos">
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
		</section>

		<section id="promocao">
			<h1>Ofertas Especiais</h1>
			<p>
				Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque sempre estamos
				mudando o nosso cardapio.
			</p>
			<div class="produtos">
				<div>
					<img src="../assets/ofertas/oferta-1.png" alt="oferta-1" />
				</div>
				<div>
					<img src="../assets/ofertas/oferta-2.png" alt="oferta-2" />
				</div>
				<div>
					<img src="../assets/ofertas/oferta-3.png" alt="oferta-3" />
				</div>
			</div>
			<div class="horario-funcionamento">
				<div>
					<img src="../assets/icons/timer.svg" alt="horario" />
					<span class="separador"></span>
					<div class="info">
						<h2>Horário de Funcionamento</h2>
						<p>Segunda-feira a sexta-feira: <span>17h00 - 23h00</span></p>
						<p>Sabado a Domíngo: <span>18h00 - 23h00</span></p>
					</div>
				</div>
				<div>
					<p>Não esqueça de marcar a gente no Instagram:</p>
					<h3>#empireburger</h3>
				</div>
			</div>
		</section>

		<section id="endereco">
			<h1>Onde fica o nosso castelo</h1>
			<p>Estaremos de portas abertas para a nossa realeza.</p>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.52838345808686!2d-46.64279227710372!3d-23.588040655302546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1685561942515!5m2!1spt-BR!2sbr"
				width="100%"
				height="207.28"
				style="border: 0"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</section>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'HomeView'
};
</script>

<style lang="scss" scoped>
@mixin flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}

.hero-section {
	background: url(../assets/banner-hero.png) no-repeat center center;
	height: 545px;

	> div {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		height: 545px;
		width: 1170px;
		max-width: 100%;
		margin: 0 auto;

		p {
			display: flex;
			font: 400 23px/32px 'Lato', sans-serif;
			color: rgba(29, 6, 5, 0.9);

			&:first-child {
				font-weight: 700;
				line-height: 23px;
			}

			span {
				@include flex-center;
				width: 201.85px;
				height: 30.67px;
				background: #f59a1b;
				border-radius: 6.35029px;
				font-weight: 700;
				margin-left: 2px;
			}
		}

		h1 {
			font: 400 78px/85px 'Lilita One', cursive;
			color: #3b200b;

			span {
				color: #f59a1b;
			}
		}

		button {
			@include flex-center;
			width: 198.64px;
			height: 52.32px;
			margin-top: 14px;
			background: #f43127;
			border-radius: 5px;
			font: 700 23px/32px 'Lato', sans-serif;
			color: #fff;
		}
	}
}

.servicos {
	display: flex;
	align-items: center;
	justify-content: space-between;
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

#promocao {
	display: grid;
	width: 1170px;
	max-width: 100%;
	margin: 0 auto;

	h1 {
		font: 400 32px/35px 'Lilita One', cursive;
		color: rgba(29, 6, 5, 0.9);
		margin-top: 14px;
		margin-bottom: 4px;
	}
	p {
		font: 400 16px/22px 'Lato', sans-serif;
		color: rgba(29, 6, 5, 0.69);
		margin-bottom: 16px;
	}
	.produtos {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 30px;
		margin-bottom: 64px;

		div:first-child {
			grid-row: span 2;
			width: 770px;
			height: 430px;
		}

		div:nth-child(2),
		div:last-child {
			width: 370.96px;
			height: 200px;
		}
	}

	.horario-funcionamento {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
		margin-bottom: 50px;

		div:first-child {
			display: flex;
			justify-content: flex-start;
			width: 570px;
			height: 130.93px;
			background: #f43127;
			border-radius: 10px;
			padding: 18px 22px;

			img {
				grid-area: img;
				background: rgba(29, 6, 5, 0.2);
				clip-path: circle(50%);
				width: 94.83px;
				height: 94.83px;
				object-fit: none;
			}

			.separador::before {
				content: '';
				display: block;
				height: 82.74px;
				border: 1px solid rgba(73, 46, 21, 0.15);
				margin: 0 15.5px;
			}

			.info {
				h2 {
					font: 400 25px/28px 'Lilita One', cursive;
					color: rgba(29, 6, 5, 0.69);
					margin-bottom: 5px;
				}
				p {
					font: 700 16px/22px 'Lato', sans-serif;
					color: rgba(255, 255, 255, 0.85);
					margin: 0;

					span {
						font-weight: 900;
					}
				}
			}
		}
		div:last-child {
			display: flex;
			justify-content: center;
			flex-direction: column;

			p {
				margin-bottom: 4px;
				font-family: 400 16px/19px 'Lato', sans-serif;
				color: rgba(29, 6, 5, 0.69);
			}
			h3 {
				margin: 0;
				font: 400 28px/28px 'Lilita One', cursive;
				color: #f43127;
			}
		}
	}
}

#endereco {
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 50px;

	h1 {
		font: 400 32px/35px 'Lilita One', cursive;
		color: rgba(29, 6, 5, 0.9);
		margin-bottom: 4px;
	}

	p {
		font: 400 16px/19px 'Lato', sans-serif;
		color: rgba(29, 6, 5, 0.69);
		margin-bottom: 32px;
	}
}
</style>
