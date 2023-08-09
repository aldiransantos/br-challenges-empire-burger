<template>
	<header ref="menuContainer">
		<div class="modal" v-if="isModalOpen" @click="modalClose">
			<div class="modal-container">
				<button class="modal-btn-close" @click="isModalOpen = false">
					<svg
						class="burger open active"
						viewBox="0 0 100 100"
						width="30"
						:class="{ active: isMenuOpen }"
					>
						<path
							class="line top"
							d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
						/>
						<path
							class="line middle"
							d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
						/>
						<path
							class="line bottom"
							d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
						/>
					</svg>
				</button>

				<div class="modal-info">
					<h1 class="heading-large">Contato</h1>
					<div>
						<h2 class="heading-small">Desafio</h2>
						<a href="https://www.brchallenges.com/desafio/empire-burger" target="_blank"
							>https://www.brchallenges.com/desafio/empire-burger</a
						>
					</div>
					<div>
						<h2 class="heading-small">Github do Projeto</h2>
						<a
							href="https://github.com/aldiransantos/br-challenges-empire-burger"
							target="_blank"
							>https://github.com/aldiransantos/br-challenges-empire-burger</a
						>
					</div>
					<div>
						<h2 class="heading-small">LinkedIn</h2>
						<a href="https://www.linkedin.com/in/aldiransantos/" target="_blank"
							>https://www.linkedin.com/in/aldiransantos/</a
						>
					</div>
					<div>
						<h2 class="heading-small">Email</h2>
						<a
							href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.aldiransantos@gmail.com&su=Olá! Vim do brChallenges"
							target="_blank"
							>contact.aldiransantos@gmail.com</a
						>
					</div>
				</div>
			</div>
		</div>

		<div id="home" class="container">
			<nav>
				<router-link to="/">
					<img
						src="@/assets/logo.svg"
						class="logo"
						alt="Empire Burger logo"
						@click="
							{
								scrollToTop();
							}
						"
					/>
				</router-link>

				<button
					@click="toggleMenu"
					data-menu="button"
					aria-expanded="false"
					aria-controls="menu"
				>
					<svg
						class="burger open"
						viewBox="0 0 100 100"
						width="30"
						:class="{ active: isMenuOpen }"
					>
						<path
							class="line top"
							d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
						/>
						<path
							class="line middle"
							d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
						/>
						<path
							class="line bottom"
							d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
						/>
					</svg>
				</button>

				<div :class="{ active: isMenuOpen }" class="header-menu">
					<ul>
						<li v-for="(link, index) in menuHeader" :key="index">
							<router-link :to="link.hash" :ref="link">{{ link.name }}</router-link>
						</li>
					</ul>

					<div class="social">
						<div class="medias">
							<a
								href="https://www.ifood.com.br/"
								class="logo-ifood"
								target="_blank"
								rel="noopener"
							>
							</a>
							<a
								href="https://www.instagram.com/"
								class="logo-instagram"
								target="_blank"
								rel="noopener"
							>
							</a>
						</div>
						<button @click="isModalOpen = true">
							<img src="../assets/icons/whatsapp.svg" alt="whatsapp" />
							<span>Contato</span>
						</button>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'TheHeader',
	data() {
		return {
			menuHeader: [
				{ name: 'Home', hash: '/' },
				{ name: 'Promoção', hash: '#promocao' },
				{ name: 'Cardápio', hash: '#cardapio' },
				{ name: 'Comentários', hash: '#comentarios' },
				{ name: 'Contato', hash: '#contato' }
			],
			isMenuOpen: false,
			isModalOpen: false
		};
	},
	mounted() {
		this.getWidthElements();
		this.$nextTick(() => {
			document.addEventListener('click', this.handleClickOutside, { passive: true });
		});
	},
	beforeUnmount() {
		document.removeEventListener('click', this.handleClickOutside);
	},
	methods: {
		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		},
		getWidthElements() {
			const anchorsList = document.querySelectorAll('.header-menu ul li a');
			anchorsList.forEach((anchor) => {
				anchor.style.width = anchor.offsetWidth + 'px';
			});
		},
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;
		},
		handleClickOutside(e) {
			if (
				this.isMenuOpen &&
				this.$refs.menuContainer &&
				!this.$refs.menuContainer.contains(e.target)
			)
				this.isMenuOpen = false;
		},
		modalClose({ target, currentTarget }) {
			if (target === currentTarget) this.isModalOpen = false;
		}
	}
};
</script>

<style></style>
