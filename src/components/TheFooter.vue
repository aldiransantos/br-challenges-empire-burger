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

<style></style>
