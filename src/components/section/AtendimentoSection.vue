<template>
	<section class="atendimento">
		<img src="@/assets/card-woman-eating.png" alt="mulher-comendo-hamburger" />
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
	name: 'AtendimentoSection',
	methods: {
		...mapMutations(['showModal'])
	}
};
</script>

<style></style>
