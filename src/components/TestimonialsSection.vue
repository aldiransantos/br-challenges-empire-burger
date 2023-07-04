<template>
	<section id="comentarios">
		<div class="container">
			<h1>Nossa realeza</h1>
			<p>A satisfação de nossos clientes em primeiro lugar!</p>
			<swiper-container
				class="card"
				thumbs-swiper=".my-thumbs"
				pagination="true"
				pagination-clickable="true"
				slides-per-view="3"
				slides-per-group="3"
				keyboard-enabled="true"
				:style="styles"
			>
				<swiper-slide class="card-body" v-for="(testimonial, index) in users" :key="index">
					<p>{{ testimonial.testimonial }}</p>
					<div class="avatar">
						<img :src="testimonial.image" :alt="testimonial.name" />
						<div class="user-info">
							<h3>{{ testimonial.name }}</h3>
							<h4>{{ testimonial.age }} Anos</h4>
						</div>
					</div>
				</swiper-slide>
			</swiper-container>
		</div>
	</section>
</template>

<script>
import { SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper';

export default {
	name: 'TestimonialsSection',
	components: {
		SwiperSlide
	},
	setup() {
		return {
			modules: [Keyboard, Scrollbar, Navigation, Pagination]
		};
	},
	data() {
		return {
			users: '',
			styles: {
				'--swiper-pagination-display': 'flex',
				'--swiper-pagination-align-items': 'center',
				'--swiper-pagination-justify-content': 'center',
				'--swiper-pagination-color': '#ffba08',

				'--swiper-pagination-bullet-width': '47.46px',
				'--swiper-pagination-bullet-height': '4px',
				'--swiper-pagination-bullet-horizontal-gap': '3.8px',
				'--swiper-pagination-bullet-border-radius': '0',
				'--swiper-pagination-bullet-background': '#fff',

				'--swiper-pagination-bullet-inactive-color': '#fff',
				'--swiper-pagination-bullet-inactive-opacity': 1
			}
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
#comentarios {
	display: flex;
	margin: 0 auto;
	padding-top: 64px;

	h1 {
		font: 400 41.42px/ 45.56px 'Lilita One', cursive;
	}

	p {
		font: 400 16px/22px 'Lato', sans-serif;
		color: rgba(29, 6, 5, 0.69);
	}

	.card {
		overflow: hidden;
		position: relative;
		display: grid;
		grid-template-columns: minmax(1170px, 100%);

		.card-body {
			width: 378px !important;
			height: 177.83px;
			padding: 12.4px 16.8px;
			background: #fff;
			border-radius: 10px;
			margin-top: 16px;
			margin-right: 12px;
			margin-bottom: 32px;
			opacity: 0.6;
			transition: all 0.3s;

			&:hover {
				box-shadow: 0px 4px 25px 0px rgba(60, 35, 13, 0.1);
				opacity: 1;
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
