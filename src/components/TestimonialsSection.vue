<template>
	<section id="testimonials">
		<h1>Nossa realeza</h1>
		<p>A satisfação de nossos clientes em primeiro lugar!</p>
		<div class="card">
			<div class="card-body" v-for="(testimonial, index) in users" :key="index">
				<p>{{ testimonial.testimonial }}</p>
				<div class="avatar">
					<img :src="testimonial.image" :alt="testimonial.name" />
					<div class="user-info">
						<h3>{{ testimonial.name }}</h3>
						<h4>{{ testimonial.age }} Anos</h4>
					</div>
				</div>
			</div>
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

<style lang="scss" scoped>
#testimonials {
	width: 1170px;
	max-width: 100%;
	margin: 0 auto;

	h1 {
		font: 400 41.42px/ 45.56px 'Lilita One', cursive;
	}

	p {
		font: 400 16px/22px 'Lato', sans-serif;
		color: rgba(29, 6, 5, 0.69);
	}

	.card {
		display: flex;
		gap: 12px;
		overflow: hidden;

		.card-body {
			width: 370px;
			height: 177.83px;
			padding: 12.4px 16.8px;
			background: #fff;
			border-radius: 10px;
			margin-top: 16px;
			margin-bottom: 42px;
			transition: all 0.3s;

			&:hover {
				box-shadow: 0px 4px 25px rgba(60, 35, 13, 0.1);
				cursor: pointer;
			}
			p {
				display: -webkit-box;
				-webkit-line-clamp: 4;
				-webkit-box-orient: vertical;
				overflow: hidden;
				width: 334.19px;
				height: 90px;
				margin-bottom: 12.67px;
				color: #635352;
			}

			.avatar {
				display: flex;
				align-items: center;

				img {
					height: 48.5px;
					width: 48.5px;
					margin-right: 8px;
					-webkit-clip-path: circle(50%);
					clip-path: circle(50%);
					-o-object-fit: cover;
					object-fit: cover;
				}
				h3 {
					font: 400 18px/ 25px 'Lilita One', cursive;
					color: rgba(29, 6, 5, 0.9);
				}
				h4 {
					font: 400 12px/17px 'Lato', sans-serif;
					color: rgba(29, 6, 5, 0.69);
				}
			}
		}
	}
}
</style>
