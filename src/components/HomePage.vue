<template>
	<div id="main">
		<TheHeader />
		<HeroSection />
		<ServicosBox />
		<OfertasEspeciais />
		<CardapioImperial />
		<AtendimentoPersonalizado />
		<NossaRealeza />
		<PublicacoesInstagram />
		<NossasEntregas />
		<NossoCastelo />
		<TheFooter />
	</div>
</template>

<script>
export default {
	name: 'HomePage',
	components: {
		TheHeader: () => import('@/components/TheHeader.vue'),
		TheFooter: () => import('@/components/TheFooter.vue'),
		ServicosBox: () => import('@/components/ServicosBox.vue'),
		HeroSection: () => import('@/components/section/HeroSection.vue'),
		OfertasEspeciais: () => import('@/components/section/OfertasEspeciais.vue'),
		CardapioImperial: () => import('@/components/section/CardapioImperial.vue'),
		AtendimentoPersonalizado: () => import('@/components/section/AtendimentoPersonalizado.vue'),
		NossaRealeza: () => import('@/components/section/NossaRealeza.vue'),
		PublicacoesInstagram: () => import('@/components/section/PublicacoesInstagram.vue'),
		NossasEntregas: () => import('@/components/section/NossasEntregas.vue'),
		NossoCastelo: () => import('@/components/section/NossoCastelo.vue')
	}
};
</script>

<style></style>
