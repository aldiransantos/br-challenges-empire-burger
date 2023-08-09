<template>
	<section class="atendimento">
		<img
			src="@/assets/eating-empire-burger-2x.webp"
			srcset="
				@/assets/eating-empire-burger.webp    657.98w,
				@/assets/eating-empire-burger-2x.webp 946.98w
			"
			width="571"
			height="476"
			alt="Comendo Empire Burger"
		/>
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
