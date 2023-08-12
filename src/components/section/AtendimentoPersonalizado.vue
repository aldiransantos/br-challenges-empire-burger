<template>
	<section class="atendimento" aria-label="Atendimento Personalizado">
		<picture>
			<source media="(max-width: 657.98px)" srcset="@/assets/eating-empire-burger.webp" />
			<img
				loading="lazy"
				src="@/assets/eating-empire-burger-2x.webp"
				width="571"
				height="476"
				alt="Comendo Empire Burger"
			/>
		</picture>
		<div>
			<h1 class="heading-large">
				<span class="espaco">Atendimento</span>
				<span class="destaque">personalizado</span>
			</h1>
			<p>
				Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria
				artesanal.
			</p>
			<button @click="showModal" class="btn-cta">Cardápio Imperial</button>
		</div>
	</section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	name: 'AtendimentoPersonalizado',
	methods: {
		...mapMutations(['showModal'])
	}
};
</script>

<style></style>
