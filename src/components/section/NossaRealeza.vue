<template>
	<section id="comentarios" class="nossa-realeza" aria-label="Comentários">
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
							<img
								loading="lazy"
								width="48.5"
								height="48.5"
								:src="require(`@/assets/people/person-${index + 1}.webp`)"
								:alt="testimonial.name"
							/>
							<div class="user-info">
								<p class="name">{{ testimonial.name }}</p>
								<p class="age">{{ testimonial.age }} Anos</p>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
	</section>
</template>

<script defer>
import Swiper from 'swiper';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
	name: 'NossaRealeza',
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

<style></style>
