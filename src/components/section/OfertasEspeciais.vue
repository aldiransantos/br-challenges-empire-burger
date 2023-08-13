<template>
	<section id="promocao" aria-label="Ofertas Especiais">
		<div class="container">
			<h1 class="heading">Ofertas Especiais</h1>
			<p>
				Aproveitem todas as nossas ofertas, fiquem de olhos abertos, pois sempre mudamos o
				nosso cardápio.
			</p>
			<div class="produtos">
				<div class="burger">
					<h1>Burger imperial+batata</h1>
					<p>250kg</p>
					<p class="destaque">Apenas <span>hoje</span></p>
				</div>
				<div class="burger">
					<h1>Batata</h1>
					<p>150kg</p>
				</div>
				<div class="burger">
					<h1>Sorvete</h1>
					<p>50kg</p>
				</div>
			</div>
			<div class="horario-funcionamento">
				<div class="card" :class="isBetweenTime ? 'aberto' : ''">
					<img src="@/assets/icons/timer.svg" alt="horario" />
					<span class="separador"></span>
					<div class="info">
						<h2 class="heading-small">Horário de Funcionamento</h2>
						<p>
							Segunda<span class="feira">-feira</span> a Sexta<span class="feira"
								>-feira</span
							>: <span class="horario">17h00 - 23h00</span>
						</p>
						<p>Sábado a Domingo: <span class="horario">18h30 - 23h00</span></p>
					</div>
					<div class="tarja">{{ isBetweenTime ? 'aberto' : 'fechado' }}</div>
				</div>
				<div class="seguir">
					<p>Não esqueça de marcar a gente no Instagram:</p>
					<h3>#empireburger</h3>
				</div>
			</div>
		</div>
	</section>
</template>

<script defer>
export default {
	name: 'OfertasEspeciais',
	data() {
		return {
			currentDay: new Date().getDay(),
			startTime: null,
			endTime: null,
			isBetweenTime: false
		};
	},
	created() {
		this.updateWorkingTime();
		setInterval(this.updateWorkingTime, 1000);
	},
	methods: {
		updateWorkingTime() {
			this.setWorkingTime();
			this.checkBetweenTime();
		},
		setWorkingTime() {
			if (this.currentDay === 0 || this.currentDay === 6) {
				this.startTime = this.createTime(18, 30, 0);
				this.endTime = this.createTime(23, 0, 0);
			} else {
				this.startTime = this.createTime(17, 0, 0);
				this.endTime = this.createTime(23, 0, 0);
			}
		},
		createTime(hours, minutes, seconds) {
			const date = new Date();
			date.setHours(hours);
			date.setMinutes(minutes);
			date.setSeconds(seconds);
			return date;
		},
		checkBetweenTime() {
			const now = new Date();
			this.isBetweenTime = now >= this.startTime && now <= this.endTime;
		}
	}
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 657.98px) {
	#promocao .container {
		width: 100%;

		.produtos {
			grid-template-columns: 1fr;
			gap: 8px;
			margin-bottom: 38px;

			.burger {
				@for $i from 1 through 3 {
					&:nth-child(#{$i}) {
						width: 100%;
						height: 205px;
					}
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
				height: auto;
				padding: 20px 16px;

				img {
					padding: 14px;
				}
				.separador::before {
					margin: 0 8px;
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

@media screen and (max-width: 389.98px) {
	#promocao .container .horario-funcionamento {
		.card {
			img {
				width: clamp(78px, 8vw, 94.83px);
				height: clamp(70px, 8vw, 94.83px);
				clip-path: circle(47%);
			}

			.info p span.horario {
				white-space: nowrap;
			}
		}
		.seguir h3 {
			font-size: 2.2rem;
		}
	}
}
</style>
