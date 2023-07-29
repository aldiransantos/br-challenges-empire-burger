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
				:key="i"
				:src="require('@/assets/publicacoes/burger' + i + '.png')"
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

<style lang="scss" scoped></style>
