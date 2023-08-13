<template>
	<footer role="contentinfo">
		<div class="container">
			<div class="footer-menu">
				<router-link to="/">
					<img
						src="@/assets/logo-colorida.svg"
						class="logo"
						alt="Empire Burger logo"
						@click="
							{
								scrollToTop();
							}
						"
					/>
				</router-link>
				<nav>
					<ul>
						<li v-for="(link, index) in menuFooter" :key="index">
							<router-link :to="link.hash">{{ link.name }}</router-link>
						</li>
					</ul>
					<div class="medias">
						<a
							href="https://www.ifood.com.br/"
							class="logo-ifood"
							target="_blank"
							aria-label="Link para o iFood"
						>
						</a>
						<a
							href="https://www.instagram.com/"
							class="logo-instagram"
							target="_blank"
							aria-label="Link para o Instagram"
						>
						</a>
					</div>
				</nav>
			</div>
		</div>
		<div class="copyright"><span>2022 © EmpireBurger.</span> Todos os direitos reservados.</div>
	</footer>
</template>

<script defer>
export default {
	name: 'TheFooter',
	data() {
		return {
			menuFooter: [
				{ name: 'Home', hash: '/' },
				{ name: 'Localização', hash: '#localizacao' },
				{ name: 'Cardápio', hash: '#cardapio' },
				{ name: 'Sobre', hash: '#sobre' }
			]
		};
	},
	methods: {
		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		},
		getWidthElements() {
			const anchorsList = document.querySelectorAll('.footer-menu nav ul li a');
			anchorsList.forEach((anchor) => {
				anchor.style.width = anchor.offsetWidth + 'px';
			});
		}
	},
	mounted() {
		this.getWidthElements();
	}
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

@media (max-width: 657.98px) {
	footer .footer-menu {
		grid-template-columns: 1fr;
		flex-direction: column;
		align-items: center;
		padding: 18px 0 0;

		> a {
			display: flex;
			justify-content: center;
			margin-bottom: 14px;
		}

		nav {
			flex-direction: column-reverse;
			align-items: center;
			width: 100%;
			border-top: 1px solid $brown-15;

			ul {
				flex-direction: column;
				width: 100%;
				gap: 14px;
				margin: 0;
				padding: 14px 0;
				border-top: 1px solid $brown-15;
			}

			.medias {
				padding: 14px;
				margin: 0;
			}
		}
	}
}

@media screen and (max-width: 389.98px) {
	footer .copyright {
		display: flex;
		flex-direction: column;
	}
}
</style>
