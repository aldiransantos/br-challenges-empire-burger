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
	text-align: center;

	h1 {
		width: 100%;
		margin-bottom: 4px;
		padding: 0 24px;
		font-family: 'Lilita One', cursive;
		font-size: clamp(25px, 2.3vw, 32px);
		line-height: 110%;
		text-transform: uppercase;
		color: rgba(29, 6, 5, 0.9);
	}

	p {
		margin-bottom: 16px;
		padding: 0 24px;
		font: 400 16px/140% 'Lato', sans-serif;
		color: rgba(29, 6, 5, 0.69);
	}

	.galery {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-bottom: -1px;
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
		font-family: 'Lilita One', cursive;
		font-size: clamp(14px, 2.8vw, 28px);
		line-height: 100%;
		text-transform: uppercase;
		white-space: nowrap;
		color: rgba(29, 6, 5, 0.9);
		overflow: hidden;

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

@media screen and (max-width: 657.98px) {
	.publicacoes {
		.galery img {
			width: 123.79px;
			height: 99.95px;
		}

		.marquee {
			height: 24.39px;
		}
	}
}
</style>
