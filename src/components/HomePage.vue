<template>
	<div id="main">
		<TheHeader />
		<HeroSection />
		<ServicosBox />
		<OfertasEspeciais />
		<CardapioSection />
		<AtendimentoSection />
		<Comentarios />
		<PublicacoesSection />
		<NossasEntregasSection />
		<NossoCasteloSection />
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import HeroSection from '@/components/section/HeroSection.vue';
import ServicosBox from '@/components/ServicosBox.vue';
import OfertasEspeciais from '@/components/section/OfertasEspeciaisSection.vue';
import CardapioSection from '@/components/section/CardapioSection.vue';
import AtendimentoSection from '@/components/section/AtendimentoSection.vue';
import Comentarios from '@/components/section/ComentariosSection.vue';
import PublicacoesSection from '@/components/section/PublicacoesSection.vue';
import NossasEntregasSection from '@/components/section/NossasEntregasSection.vue';
import NossoCasteloSection from '@/components/section/NossoCasteloSection.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
	name: 'HomePage',
	components: {
		TheHeader,
		HeroSection,
		ServicosBox,
		OfertasEspeciais,
		CardapioSection,
		AtendimentoSection,
		Comentarios,
		PublicacoesSection,
		NossasEntregasSection,
		NossoCasteloSection,
		TheFooter
	}
};
</script>

<style></style>
