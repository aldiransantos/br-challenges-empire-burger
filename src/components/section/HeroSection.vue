<template>
	<section class="hero" role="main">
		<div>
			<p>Uma nova experiência!</p>
			<h1>King <span>burger</span></h1>
			<p>Para quem tem um <span>Apetite de um REI!</span></p>
			<a
				class="btn-cta"
				href="https://www.ifood.com.br/delivery/resende-rj/empire-burger-paraiso/5311b12c-54dc-46dc-9349-9537daf4ca74"
				target="_blank"
				rel="noopener"
				>Comprar Agora</a
			>
		</div>
	</section>
</template>

<script>
export default {
	name: 'HeroSection'
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 763.98px) {
	.hero {
		height: 855.465px;
		background: url('@/assets/banner-hero-mobile.webp') no-repeat center;
		background-size: cover;

		> div {
			height: auto;
			position: relative;
			top: 102px;

			p span {
				height: 24px;
			}

			a {
				margin-top: 16px;
			}
		}
	}
}

@media screen and (max-width: 360px) {
	.hero > div {
		h1 {
			font-size: 46px;
		}
		p {
			font-size: 16px;
		}
	}
}
</style>
