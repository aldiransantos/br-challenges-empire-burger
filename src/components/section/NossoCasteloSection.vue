<template>
	<section id="localizacao" class="nosso-castelo">
		<h1>Onde fica o nosso castelo</h1>
		<p>Estaremos de portas abertas para a nossa realeza.</p>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.52838345808686!2d-46.64279227710372!3d-23.588040655302546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1685561942515!5m2!1spt-BR!2sbr"
			width="100%"
			height="207.28"
			style="border: 0"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</section>
</template>

<script>
export default {
	name: 'NossoCasteloSection'
};
</script>

<style lang="scss" scoped>
.nosso-castelo {
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 64px;
	text-align: center;

	h1 {
		font-family: 'Lilita One', cursive;
		font-weight: 400;
		font-size: clamp(25px, 3.125vw, 32px);
		line-height: 140%;
		color: rgba(29, 6, 5, 0.9);
		margin-bottom: 4px;
	}

	p {
		font: 400 16px/140% 'Lato', sans-serif;
		color: rgba(29, 6, 5, 0.69);
		margin-bottom: 32px;
	}
}

@media screen and (max-width: 657.98px) {
	.nosso-castelo p {
		margin-bottom: 16px;
	}
}
@media (min-width: 658px) and (max-width: 946.98px) {
	.nosso-castelo p {
		margin-bottom: 24px;
	}
}
</style>
