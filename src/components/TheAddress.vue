<template>
	<section id="endereco">
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
	name: 'TheAddress'
};
</script>

<style lang="scss" scoped>
#endereco {
	display: flex;
	align-items: center;
	flex-direction: column;
	// margin-top: 104px;
	margin-top: 64px;

	h1 {
		font: 400 32px/35px 'Lilita One', cursive;
		color: rgba(29, 6, 5, 0.9);
		margin-bottom: 4px;
	}

	p {
		font: 400 16px/19px 'Lato', sans-serif;
		color: rgba(29, 6, 5, 0.69);
		margin-bottom: 32px;
	}
}
</style>
