<template>
	<section id="promocao">
		<div class="container">
			<h1>Ofertas Especiais</h1>
			<p>
				Aproveitem todas as nossas ofertas, fiquem de olhos abertos, pois sempre mudamos o
				nosso cardápio.
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
					<img src="@/assets/icons/timer.svg" alt="horario" />
					<span class="separador"></span>
					<div class="info">
						<h2>Horário de Funcionamento</h2>
						<p>
							Segunda<span class="feira">-feira</span> a Sexta<span class="feira"
								>-feira</span
							>: <span class="horario">17h00 - 23h00</span>
						</p>
						<p>Sábado a Domingo: <span class="horario">18h30 - 23h00</span></p>
					</div>
					<div class="tarja">{{ status }}</div>
				</div>
				<div class="seguir">
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

	.container {
		> h1 {
			font-family: 'Lilita One', cursive;
			font-weight: 400;
			font-size: clamp(25px, 2.6vw, 32px);
			line-height: 110%;
			color: rgba(29, 6, 5, 0.9);
			margin-top: 14px;
			margin-bottom: 4px;
		}
		> p {
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
				border-radius: 10px;

				h1 {
					font-family: 'Lilita One', cursive;
					font-weight: 400;
					font-size: clamp(20px, 2.2vw, 25px);
					line-height: 110%;
					color: rgba(29, 6, 5, 0.9);
				}

				p {
					color: rgba(29, 6, 5, 0.69);
				}

				&:first-child {
					grid-row: span 2;
					width: min(100%, 770px);
					height: 430px;
					background: url('@/assets/ofertas/oferta-1.png') no-repeat center center;

					h1 {
						color: rgba(255, 255, 255, 0.9);
					}
					p {
						color: rgba(255, 255, 255, 0.69);

						&.destaque {
							display: flex;
							flex-direction: column;
							position: absolute;
							right: 25.5px;
							bottom: 23px;
							font-family: 'Lato', sans-serif;
							font-weight: 400;
							font-size: clamp(11px, 1.4vw, 23px);
							line-height: 100%;

							span {
								margin-top: 6px;
								font-family: 'Lilita One', cursive;
								font-weight: 400;
								font-size: clamp(20px, 3.516vw, 42px);
								line-height: 65%;
								text-transform: uppercase;
								color: rgba(255, 255, 255, 0.9);
							}
						}
					}
				}

				&:nth-child(2),
				&:last-child {
					width: 370.96px;
					height: 200px;
				}

				&:nth-child(2) {
					background: url('@/assets/ofertas/oferta-2.png') no-repeat center center;
				}

				&:last-child {
					background: url('@/assets/ofertas/oferta-3.png') no-repeat center center;
				}
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
				width: 100%;
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
					width: clamp(73px, 8vw, 94.83px);
					height: clamp(73px, 8vw, 94.83px);
					padding: calc(8px + 0.5vw);
					background: rgba(29, 6, 5, 0.2);
					clip-path: circle(50%);
					object-fit: fill;
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
						font-family: 'Lilita One', cursive;
						font-weight: 400;
						font-size: 1.313rem;
						line-height: clamp(25px, 2.2rem, 27.5px);
						color: rgba(29, 6, 5, 0.69);
						margin-bottom: 5px;
					}
					p {
						font-family: 'Lato', sans-serif;
						font-weight: 700;
						font-size: clamp(14px, 1.465vw, 16px);
						line-height: clamp(19px, 1.953vw, 22px);
						color: rgba(255, 255, 255, 0.85);
						margin: 0;

						span.horario {
							font-weight: 900;
						}
					}
				}
			}
			.seguir {
				display: flex;
				justify-content: center;
				flex-direction: column;

				p {
					margin-bottom: 4px;
					font-family: 'Lato', sans-serif;
					font-weight: 400;
					font-size: 1.125rem;
					line-height: 140%;
					color: rgba(29, 6, 5, 0.69);
				}
				h3 {
					margin: 0;
					font-family: 'Lilita One', cursive;
					font-weight: 400;
					font-size: 1.75rem;
					line-height: clamp(68%, 84%, 100%);
					color: #f43127;
				}
			}
		}
	}
}

@media screen and (max-width: 657.98px) {
	#promocao .container {
		width: 100%;

		.produtos {
			grid-template-columns: 1fr;
			gap: 8px;
			margin-bottom: 38px;

			div {
				&:first-child,
				&:nth-child(2),
				&:last-child {
					width: 100%;
					height: 205px;
					background-size: cover;
				}

				&:first-child p.destaque {
					right: 16.13px;
					bottom: 16.84px;
				}
			}
		}

		.horario-funcionamento {
			gap: 64px;

			.card {
				height: 110.704px;
				padding: 20px 16px;

				img {
					padding: 14px;
				}
				.separador::before {
					margin: 0 12px;
				}
				.info {
					h2 {
						font-size: 1.125rem;
					}
					p {
						font-weight: 400;

						span.feira {
							display: none;
						}

						span.horario {
							font-weight: 400;
						}
					}
				}
			}
		}
	}
}

@media (min-width: 658px) and (max-width: 945.98px) {
	#promocao .container {
		width: 100%;

		.produtos {
			grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
			justify-items: center;

			> div {
				width: 100%;

				&:first-child,
				&:nth-child(2),
				&:last-child {
					width: 100%;
					background-size: cover;
				}

				&:first-child {
					grid-column: span 2;
				}
			}
		}
	}
}

@media screen and (max-width: 945.98px) {
	#promocao .container .horario-funcionamento {
		grid-template-columns: 1fr;

		.seguir {
			align-items: center;

			h3 {
				font-size: 2.563rem;
			}
		}
	}
}
</style>
