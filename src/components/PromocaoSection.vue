<template>
	<section id="promocao">
		<div class="container">
			<h1>Ofertas Especiais</h1>
			<p>
				Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque sempre estamos
				mudando o nosso cardápio.
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
						<p>Segunda-feira a Sexta-feira: <span>17h00 - 23h00</span></p>
						<p>Sábado a Domingo: <span>18h00 - 23h00</span></p>
					</div>
					<div class="tarja">{{ status }}</div>
				</div>
				<div>
					<p>Não esqueça de marcar a gente no Instagram:</p>
					<h3>#empireburger</h3>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'PromocaoSection',
	data() {
		return {
			day: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			status: 'fechado'
		};
	},
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
			this.day = weekday[dayNumber];
			this.hours = new Date().getHours();
			this.minutes = new Date().getMinutes();
			this.seconds = new Date().getSeconds();

			if (this.day == 'Saturday' || this.day === 'Sunday') {
				if (
					this.hours >= 17 &&
					this.hours <= 22 &&
					this.minutes < 60 &&
					this.seconds < 60
				) {
					this.status = 'aberto';
					return (document.querySelector('.card').style.backgroundColor = '#bedd15');
				}
			} else {
				if (
					this.hours >= 18 &&
					this.hours <= 22 &&
					this.minutes < 60 &&
					this.seconds < 60
				) {
					this.status = 'aberto';
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
	display: flex;
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
		grid-template-columns: 2fr auto;
		gap: 30px;
		margin-bottom: 64px;

		div {
			position: relative;
			padding: 12.43px 20.37px;
		}

		div:first-child {
			grid-row: span 2;
			width: min(100%, 770px);
			height: 430px;
			background: url(../assets/ofertas/oferta-1.png) no-repeat center center;
			border-radius: 10px;

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
			position: relative;

			.tarja {
				width: 120px;
				height: 20px;
				background-color: rgb(250 243 242 / 60%);
				position: absolute;
				top: 25px;
				left: -25px;
				transform: rotate(315deg);
				font: 400 12px/13px 'Lilita One', cursive;
				color: rgba(29, 6, 5, 0.69);
				text-align: center;
				text-transform: uppercase;
			}

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
