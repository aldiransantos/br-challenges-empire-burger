<template>
	<section id="promocao">
		<h1>Ofertas Especiais</h1>
		<p>
			Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque sempre estamos
			mudando o nosso cardapio.
		</p>
		<div class="produtos">
			<div>
				<h1>Burger imperial+batata</h1>
				<p>250kg</p>
				<p class="destaque">Apenas <span>hoje</span></p>
			</div>
			<div>
				<h1>Batata</h1>
				<p>150kg</p>
			</div>
			<div>
				<h1>Sorvete</h1>
				<p>50kg</p>
			</div>
		</div>
		<div class="horario-funcionamento">
			<div class="card">
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
</template>

<script>
export default {
	name: 'PromocaoSection',
	methods: {
		dateNow() {
			const weekday = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			];
			let dayNumber = new Date().getDay();
			let day = weekday[dayNumber];
			let hours = new Date().getHours();
			let minutes = new Date().getMinutes();
			let seconds = new Date().getSeconds();

			if (day === 'Sunday' || day == 'Saturday') {
				if (hours > 17 && minutes >= 30 && hours <= 22 && minutes < 60 && seconds < 60) {
					return (document.querySelector('.card').style.backgroundColor = '#bedd15');
				}
			} else {
				if (hours > 16 && hours <= 22 && minutes < 60 && seconds < 60) {
					return (document.querySelector('.card').style.backgroundColor = '#bedd15');
				}
			}
		}
	},
	mounted() {
		this.dateNow();
	}
};
</script>

<style lang="scss" scoped>
#promocao {
	display: grid;
	width: 1170px;
	max-width: 100%;
	margin: 0 auto 64px;

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

		div {
			position: relative;
			padding: 12.43px 20.37px;
		}

		div:first-child {
			grid-row: span 2;
			width: 770px;
			height: 430px;
			background: url(../assets/ofertas/oferta-1.png) no-repeat center center;

			h1 {
				margin: 0;
				font: 400 25px/28px 'Lilita One', cursive;
				color: rgba(255, 255, 255, 0.9);
			}
			p {
				margin: 0;
				color: rgba(255, 255, 255, 0.69);

				&.destaque {
					display: flex;
					flex-direction: column;
					position: absolute;
					right: 25.5px;
					bottom: 23px;
					font: 400 23px/25px 'Lato', sans-serif;

					span {
						margin-top: 6px;
						font: 400 42px/28px 'Lilita One', cursive;
						text-transform: uppercase;
						color: rgba(255, 255, 255, 0.9);
					}
				}
			}
		}

		div:nth-child(2),
		div:last-child {
			width: 370.96px;
			height: 200px;

			h1 {
				margin: 0;
				font: 400 20px/22px 'Lilita One', cursive;
			}
		}

		div:nth-child(2) {
			background: url(../assets/ofertas/oferta-2.png) no-repeat center center;
		}

		div:last-child {
			background: url(../assets/ofertas/oferta-3.png) no-repeat center center;
		}
	}

	.horario-funcionamento {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;

		.card {
			display: flex;
			align-items: center;
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
</style>
