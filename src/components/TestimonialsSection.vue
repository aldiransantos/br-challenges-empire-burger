<template>
	<section id="testimonials">
		<h1>Nossa realeza</h1>
		<p>A satisfação de nossos clientes em primeiro lugar!</p>
		<div class="card" v-for="(testimonial, index) in users" :key="index">
			<p>{{ testimonial.testimonial }}</p>
			<img :src="testimonial.image" alt="" />
			<h3>{{ testimonial.name }}</h3>
			<h4>{{ testimonial.age }} Anos</h4>
		</div>
	</section>
</template>

<script>
export default {
	name: 'TestimonialsSection',
	data() {
		return {
			users: ''
		};
	},
	methods: {
		async getTestimonials() {
			await fetch('https://api.brchallenges.com/api/empire-burger/testimonials')
				.then((resp) => resp.json())
				.then((resp) => {
					this.users = resp;
				});
		}
	},
	created() {
		this.getTestimonials();
	}
};
</script>

<style></style>
