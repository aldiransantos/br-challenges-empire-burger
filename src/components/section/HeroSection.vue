<template>
	<section class="hero">
		<div>
			<p>Uma nova experiência!</p>
			<h1>King <span>burger</span></h1>
			<p>Para quem tem um <span>Apetite de um REI!</span></p>
			<a
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
.hero {
	height: 545px;
	background: url('@/assets/banner-hero.png') no-repeat center center;
	padding: 0 20px;

	> div {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		height: 545px;
		width: 1170px;
		max-width: 100%;
		margin: 0 auto;

		p {
			display: flex;
			font: 400 23px/32px 'Lato', sans-serif;
			color: rgba(29, 6, 5, 0.9);

			&:first-child {
				font-weight: 700;
				line-height: 23px;
			}

			span {
				height: 30.67px;
				padding: 0 4px;
				margin-left: 2px;
				background: #f59a1b;
				border-radius: 6px;
				font-weight: 700;
			}
		}

		h1 {
			font: 400 78px/85px 'Lilita One', cursive;
			color: #3b200b;

			span {
				color: #f59a1b;
			}
		}

		a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 198.64px;
			height: 52.32px;
			margin-top: 14px;
			background: #f43127;
			border-radius: 5px;
			font: 700 23px/32px 'Lato', sans-serif;
			color: #fff;
		}
	}
}
</style>
