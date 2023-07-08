<template>
	<section class="publicacoes">
		<h1>Publicações do instagram</h1>
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

<style lang="scss" scoped>
.publicacoes {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin: 86px auto 68px;

	h1 {
		font: 400 32px/35px 'Lilita One', cursive;
		text-transform: uppercase;
		color: rgba(29, 6, 5, 0.9);
		margin-bottom: 4px;
	}

	p {
		font: 400 16px/22px 'Lato', sans-serif;
		color: rgba(29, 6, 5, 0.69);
		margin-bottom: 16px;
	}

	.galery {
		display: flex;
		width: 100%;
		margin-bottom: -1px;
		background: linear-gradient(270.22deg, #21201b 7.41%, rgba(33, 32, 27, 0) 91.38%);
		overflow: hidden;

		img {
			width: 270px;
			height: 218px;
		}
	}

	.marquee {
		display: flex;
		align-items: center;
		width: 100%;
		height: 50px;
		background: #f59a1b;
		font: 400 28px/28px 'Lilita One', cursive;
		text-transform: uppercase;
		color: rgba(29, 6, 5, 0.9);
		overflow: hidden;
		white-space: nowrap;

		&::after {
			content: '• #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger • #empireburger ';
			animation: marquee 60s linear infinite;
		}

		@keyframes marquee {
			0% {
				transform: translate(0, 0);
			}
			100% {
				transform: translate(-100%, 0);
			}
		}
	}
}
</style>
