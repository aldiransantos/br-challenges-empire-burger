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
				<div class="card" :class="isStoreOpened ? 'aberto' : ''">
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
					<div class="tarja">{{ isStoreOpened ? 'aberto' : 'fechado' }}</div>
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
			day: '',
			hour: 0,
			minute: 0,
			second: 0,
			interval: null,
			isStoreOpened: false
		};
	},
	beforeUnmount() {
		clearInterval(this.interval);
	},
	created() {
		this.interval = setInterval(() => {
			const options = {
				weekday: 'long',
				hour: 'numeric',
				hour12: false,
				minute: 'numeric',
				second: 'numeric'
			};

			const time = Intl.DateTimeFormat('en', options);
			const date = new Date();
			const parts = time.formatToParts(date);

			this.day = parts[0].value;
			this.hour = parts[2].value;
			this.minute = parts[4].value;
			this.second = parts[6].value;

			if (this.day == 'Saturday' || this.day == 'Sunday') {
				if (this.hour >= 18 && this.minute >= 30 && this.second > 0) {
					if (this.hour <= 22 && this.minute <= 59 && this.second <= 59) {
						this.isStoreOpened = true;
					}
				} else this.isStoreOpened = false;
			} else {
				if (this.hour >= 17 && this.hour <= 22 && this.minute <= 59 && this.second <= 59) {
					this.isStoreOpened = true;
				} else this.isStoreOpened = false;
			}
		}, 1000);
	}
};
</script>

<style lang="scss" scoped></style>
