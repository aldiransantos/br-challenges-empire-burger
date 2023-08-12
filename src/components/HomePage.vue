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
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import ServicosBox from '@/components/ServicosBox.vue';
import HeroSection from '@/components/section/HeroSection.vue';
import OfertasEspeciais from '@/components/section/OfertasEspeciais.vue';
import CardapioImperial from '@/components/section/CardapioImperial.vue';
import AtendimentoPersonalizado from '@/components/section/AtendimentoPersonalizado.vue';
import NossaRealeza from '@/components/section/NossaRealeza.vue';
import PublicacoesInstagram from '@/components/section/PublicacoesInstagram.vue';
import NossasEntregas from '@/components/section/NossasEntregas.vue';
import NossoCastelo from '@/components/section/NossoCastelo.vue';

export default {
	name: 'HomePage',
	components: {
		TheHeader,
		TheFooter,
		ServicosBox,
		HeroSection,
		OfertasEspeciais,
		CardapioImperial,
		AtendimentoPersonalizado,
		NossaRealeza,
		PublicacoesInstagram,
		NossasEntregas,
		NossoCastelo
	}
};
</script>

<style></style>
