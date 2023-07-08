<template>
	<div id="main">
		<TheHeader />
		<HeroSection />
		<ServicosBox />
		<PromocaoSection />
		<CardapioSection />
		<AtendimentoSection />
		<Comentarios />
		<PublicacoesSection />
		<NossasEntregasSection />
		<EnderecoSection />
		<TheFooter />
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import HeroSection from '@/components/section/HeroSection.vue';
import ServicosBox from '@/components/ServicosBox.vue';
import PromocaoSection from '@/components/section/PromocaoSection.vue';
import CardapioSection from '@/components/section/CardapioSection.vue';
import AtendimentoSection from '@/components/section/AtendimentoSection.vue';
import Comentarios from '@/components/section/ComentariosSection.vue';
import PublicacoesSection from '@/components/section/PublicacoesSection.vue';
import NossasEntregasSection from '@/components/section/NossasEntregasSection.vue';
import EnderecoSection from '@/components/section/EnderecoSection.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
	name: 'HomePage',
	components: {
		TheHeader,
		HeroSection,
		ServicosBox,
		PromocaoSection,
		CardapioSection,
		AtendimentoSection,
		Comentarios,
		PublicacoesSection,
		NossasEntregasSection,
		EnderecoSection,
		TheFooter
	}
};
</script>

<style></style>
