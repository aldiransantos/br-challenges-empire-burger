<template>
	<section class="publicacoes">
		<h1 class="heading">Publicações do instagram</h1>
		<p>
			Todos os nossos clientes são tratados como rei e rainha, com a nossa culinária
			artesanal.
		</p>
		<div class="galery">
			<img
				v-for="i in 8"
				loading="lazy"
				width="270"
				height="218"
				:src="require('@/assets/publicacoes/empire-burger-' + i + '.webp')"
				:alt="'Empire Burger ' + i"
				:key="'empire-burger-' + i"
			/>
		</div>
		<div class="marquee"></div>
	</section>
</template>

<script>
export default {
	name: 'PublicacoesSection'
};
</script>

<style></style>
