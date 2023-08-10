<template>
	<section id="comentarios" class="nossa-realeza">
		<div class="container">
			<h1 class="heading">Nossa realeza</h1>
			<p>A satisfação de nossos clientes em primeiro lugar!</p>

			<div class="swiper">
				<div class="swiper-wrapper">
					<div
						class="swiper-slide"
						lazy="true"
						v-for="(testimonial, index) in users"
						:key="index"
					>
						<p>{{ testimonial.testimonial }}</p>
						<div class="avatar">
							<img :src="testimonial.image" loading="lazy" :alt="testimonial.name" />
							<div class="user-info">
								<h3>{{ testimonial.name }}</h3>
								<h4>{{ testimonial.age }} Anos</h4>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
	</section>
</template>

<script>
import Swiper from 'swiper';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
	name: 'ComentariosSection',
	setup() {
		return {
			modules: [Keyboard, Scrollbar, Navigation, Pagination]
		};
	},
	data() {
		return {
			users: ''
		};
	},
	mounted() {
		this.initSwiper();
	},
	methods: {
		async getTestimonials() {
			await fetch('https://api.brchallenges.com/api/empire-burger/testimonials')
				.then((resp) => resp.json())
				.then((resp) => {
					this.users = resp;
				});
		},
		initSwiper() {
			this.swiper = new Swiper('.swiper', {
				slidesPerView: 'auto',
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				keyboard: {
					enabled: true
				},
				breakpoints: {
					0: {
						slidesPerGroup: 1,
						pagination: {
							enabled: false
						}
					},
					658: {
						slidesPerGroup: 2,
						pagination: {
							enabled: true
						}
					},
					947: {
						slidesPerGroup: 3,
						pagination: {
							enabled: true
						}
					}
				}
			});
		}
	},
	created() {
		this.getTestimonials();
	}
};
</script>

<style lang="scss" scoped></style>
