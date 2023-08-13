<template>
	<section class="publicacoes" aria-label="Publicações do Instagram">
		<h1 class="heading">Publicações do Instagram</h1>
		<p>
			Todos os nossos clientes são tratados como rei e rainha, com a nossa culinária
			artesanal.
		</p>
		<div class="galery">
			<picture class="picture">
				<img
					loading="lazy"
					width="150"
					height="219"
					src="@/assets/publicacoes/empire-burger-desktop-1.webp"
					alt="Empire Burger 1"
				/>
			</picture>

			<picture class="picture">
				<img
					loading="lazy"
					width="270"
					height="219"
					src="@/assets/publicacoes/empire-burger-desktop-2.webp"
					alt="Empire Burger 2"
				/>
			</picture>

			<picture class="picture">
				<source
					media="(max-width: 657.98px)"
					srcset="@/assets/publicacoes/empire-burger-mobile-3.webp"
				/>
				<img
					loading="lazy"
					width="270"
					height="219"
					src="@/assets/publicacoes/empire-burger-desktop-3.webp"
					alt="Empire Burger 3"
				/>
			</picture>

			<picture class="picture">
				<source
					media="(max-width: 657.98px)"
					srcset="@/assets/publicacoes/empire-burger-mobile-4.webp"
				/>
				<img
					loading="lazy"
					width="270"
					height="219"
					src="@/assets/publicacoes/empire-burger-desktop-4.webp"
					alt="Empire Burger 4"
				/>
			</picture>

			<picture class="picture">
				<source
					media="(max-width: 657.98px)"
					srcset="@/assets/publicacoes/empire-burger-mobile-5.webp"
				/>
				<img
					loading="lazy"
					width="270"
					height="219"
					src="@/assets/publicacoes/empire-burger-desktop-5.webp"
					alt="Empire Burger 5"
				/>
			</picture>

			<picture class="picture">
				<source
					media="(max-width: 657.98px)"
					srcset="@/assets/publicacoes/empire-burger-mobile-6.webp"
				/>
				<img
					loading="lazy"
					width="270"
					height="219"
					src="@/assets/publicacoes/empire-burger-desktop-6.webp"
					alt="Empire Burger 6"
				/>
			</picture>

			<picture class="picture">
				<img
					loading="lazy"
					width="270"
					height="219"
					src="@/assets/publicacoes/empire-burger-desktop-7.webp"
					alt="Empire Burger 7"
				/>
			</picture>

			<picture class="picture">
				<img
					loading="lazy"
					width="150"
					height="219"
					src="@/assets/publicacoes/empire-burger-desktop-8.webp"
					alt="Empire Burger 8"
				/>
			</picture>
		</div>
		<div class="marquee"></div>
	</section>
</template>

<script>
export default {
	name: 'PublicacoesInstagram'
};
</script>

<style></style>
