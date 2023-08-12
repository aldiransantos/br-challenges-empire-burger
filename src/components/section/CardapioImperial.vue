<template>
	<section id="cardapio" aria-label="Cardápio Imperial">
		<CatalogModal />

		<div class="wrap-content">
			<div class="left">
				<div class="ver-cardapio">
					<h1 class="heading-large">
						Escolha o seu combo imperial, <span>peça agora!</span>
					</h1>
					<p>
						Temos vários tipos de pratos para a nossa realeza, fique esperto porque
						temos sempre promoção!
					</p>
					<button @click="showModal">Ver Cardápio Completo</button>
				</div>
			</div>
			<div class="right">
				<CatalogSlot> Cardápio imperial <span>| Burger</span> </CatalogSlot>
			</div>
		</div>
	</section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	name: 'CardapioImperial',
	components: {
		CatalogModal: () => import('@/components/CatalogModal.vue'),
		CatalogSlot: () => import('@/components/CatalogSlot.vue')
	},
	methods: {
		...mapMutations(['showModal'])
	}
};
</script>

<style></style>
