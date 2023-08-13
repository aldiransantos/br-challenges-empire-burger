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

<style></style>
