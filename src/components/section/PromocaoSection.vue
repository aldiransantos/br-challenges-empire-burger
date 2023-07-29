<template>
	<section id="promocao">
		<div class="container">
			<h1 class="heading">Ofertas Especiais</h1>
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
						<h2 class="heading-small">Horário de Funcionamento</h2>
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

<style lang="scss" scoped></style>
