<template>
	<header ref="menuContainer">
		<div id="home" class="container">
			<nav>
				<router-link to="/">
					<img src="../assets/logo.png" class="logo" alt="logo-empire-burger" />
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
								<svg
									width="28"
									height="15"
									viewBox="0 0 28 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clip-path="url(#clip0_1002_239)">
										<path
											d="M0.5 8.59427H2.55485L3.6967 2.91458H1.64158L0.5 8.59427ZM1.7548 2.23716H3.81826L4.15737 0.537832H2.09472L1.7548 2.23716ZM3.35409 10.1925H5.40921L6.66482 4.05617H8.20603L8.43327 2.91458H6.92164L6.97892 2.65776C7.06444 2.1737 7.23575 1.6302 8.00622 1.6302C8.46339 1.6302 8.89124 1.65871 9.3191 1.85852L9.54769 0.659924C9.07086 0.491678 8.56914 0.40477 8.0635 0.402832C6.408 0.402832 5.26668 1.37338 4.83829 2.91458H4.12483L3.89651 4.05617H4.60997L3.35409 10.1925Z"
											fill="#FFF"
										/>
										<path
											d="M9.86171 8.70867C12.2877 8.70867 13.9717 6.51075 13.9717 4.71272C13.9717 3.37133 12.7443 2.8004 11.5457 2.8004C8.89062 2.8004 7.43574 5.1707 7.43574 6.79635C7.43574 8.13774 8.69162 8.70867 9.86171 8.70867ZM16.3697 8.70867C18.7956 8.70867 20.4796 6.51075 20.4796 4.71272C20.4796 3.37133 19.2238 2.8004 18.0249 2.8004C15.3706 2.8004 13.9152 5.16936 13.9152 6.79635C13.9152 8.13774 15.1996 8.70867 16.3697 8.70867ZM23.8189 8.59438H25.8452L27.5002 0.518311H25.4453L24.9599 2.91577L24.1037 2.83025C22.1058 2.83025 20.2793 5.39875 20.2793 7.22555C20.2793 7.96751 20.7634 8.70974 21.5922 8.70974C22.7623 8.70974 23.59 8.13882 23.9318 7.56789H24.0459L23.8189 8.59438ZM17.4822 12.8471C15.8872 14.1687 13.8385 14.814 11.774 14.6452C9.06246 14.4739 7.12164 12.3902 6.7793 10.1926H6.89332C7.52126 11.5641 9.03396 12.8471 10.8893 13.0467C12.7717 13.275 15.0277 12.419 16.2548 11.2487L14.8849 10.1926H19.0234L18.1091 14.5882L17.5096 12.8757L17.4822 12.8471Z"
											fill="#FFF"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1002_239">
											<rect
												width="27"
												height="14.2686"
												fill="white"
												transform="translate(0.5 0.402832)"
											/>
										</clipPath>
									</defs>
								</svg>
							</a>
							<a
								href="https://www.instagram.com/"
								class="logo-instagram"
								target="_blank"
								rel="noopener"
							>
								<svg
									width="19"
									height="19"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.50206 4.66872C6.94756 4.66872 4.88709 6.72919 4.88709 9.28369C4.88709 11.8382 6.94756 13.8987 9.50206 13.8987C12.0566 13.8987 14.117 11.8382 14.117 9.28369C14.117 6.72919 12.0566 4.66872 9.50206 4.66872ZM9.50206 12.284C7.85128 12.284 6.50173 10.9385 6.50173 9.28369C6.50173 7.62889 7.84726 6.28336 9.50206 6.28336C11.1569 6.28336 12.5024 7.62889 12.5024 9.28369C12.5024 10.9385 11.1529 12.284 9.50206 12.284ZM15.3822 4.47994C15.3822 5.0784 14.9003 5.55637 14.3058 5.55637C13.7074 5.55637 13.2294 5.07439 13.2294 4.47994C13.2294 3.8855 13.7114 3.40352 14.3058 3.40352C14.9003 3.40352 15.3822 3.8855 15.3822 4.47994ZM18.4388 5.57243C18.3705 4.13051 18.0412 2.85326 16.9848 1.80093C15.9325 0.748603 14.6552 0.419249 13.2133 0.346951C11.7272 0.262605 7.2729 0.262605 5.78679 0.346951C4.34888 0.415232 3.07163 0.744586 2.01528 1.79691C0.958942 2.84924 0.633604 4.12649 0.561307 5.56842C0.47696 7.05453 0.47696 11.5088 0.561307 12.9949C0.629588 14.4369 0.958942 15.7141 2.01528 16.7665C3.07163 17.8188 4.34486 18.1481 5.78679 18.2204C7.2729 18.3048 11.7272 18.3048 13.2133 18.2204C14.6552 18.1521 15.9325 17.8228 16.9848 16.7665C18.0372 15.7141 18.3665 14.4369 18.4388 12.9949C18.5232 11.5088 18.5232 7.05854 18.4388 5.57243ZM16.5189 14.5895C16.2056 15.3767 15.5991 15.9832 14.8079 16.3005C13.623 16.7705 10.8114 16.662 9.50206 16.662C8.19268 16.662 5.37711 16.7665 4.19625 16.3005C3.40901 15.9873 2.80252 15.3808 2.48522 14.5895C2.01528 13.4046 2.12373 10.5931 2.12373 9.28369C2.12373 7.97431 2.0193 5.15873 2.48522 3.97788C2.7985 3.19064 3.405 2.58415 4.19625 2.26684C5.38112 1.79691 8.19268 1.90536 9.50206 1.90536C10.8114 1.90536 13.627 1.80093 14.8079 2.26684C15.5951 2.58013 16.2016 3.18663 16.5189 3.97788C16.9888 5.16275 16.8804 7.97431 16.8804 9.28369C16.8804 10.5931 16.9888 13.4086 16.5189 14.5895Z"
										fill="#FFF"
									/>
								</svg>
							</a>
						</div>
						<button>
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
			isMenuOpen: false
		};
	},
	mounted() {
		this.getWidthElements();
		document.addEventListener('click', this.handleClickOutside);
	},
	beforeUnmount() {
		document.removeEventListener('click', this.handleClickOutside);
	},
	methods: {
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
			if (this.isMenuOpen && !this.$refs.menuContainer.contains(e.target))
				this.isMenuOpen = false;
		}
	}
};
</script>

<style lang="scss" scoped>
header {
	display: flex;
	width: 100%;
	height: 64px;
	background: rgba(59, 32, 11, 0.05);
	backdrop-filter: blur(5px);
	border-bottom: 1px solid rgba(60, 33, 12, 0.15);
	position: fixed;
	z-index: 999;

	.container {
		nav {
			display: grid;
			grid-template-columns: 313.36px auto;
			align-items: center;

			a {
				display: flex;
				justify-content: center;
				font: 400 18px/25px 'Lato', sans-serif;
				color: #635352;

				&:hover {
					font-weight: 700;
					color: #34201f;
				}

				img {
					height: 35.19px;
					margin-right: 61.35px;
					z-index: 300;
				}
			}

			.header-menu {
				display: flex;
				justify-content: space-between;
				align-items: center;

				ul {
					gap: 16px;

					.router-link-exact-active {
						font-weight: 700;
						color: #34201f;
					}

					li {
						margin-top: 6px;
					}
				}

				.social {
					display: flex;
					align-items: center;

					.medias {
						display: flex;
						align-items: center;

						&::after {
							content: '';
							display: block;
							height: 47.66px;
							margin: 0 5px;
							border-left: 1px solid #b50b04;
						}

						a.logo-ifood {
							width: 27px;
							height: 14.27px;
							margin-left: 16px;
						}

						a.logo-instagram {
							width: 18px;
							height: 18px;
							margin: 0 12.5px 0 17.5px;
						}
					}

					button {
						display: flex;
						align-items: center;
						justify-content: center;
						margin-left: 8px;
						padding: 4px 16px;
						gap: 8px;
						width: 123px;
						height: 34px;
						background: #f59a1b;
						border-radius: 4px;
						border-color: transparent;
						font-weight: 700;
						font-size: 16px;
						line-height: 25px;
						cursor: pointer;

						img {
							height: 21px;
							width: 21.43px;
						}
					}
				}
			}
		}
	}
}

[data-menu='button'] {
	display: none;
}

@media (max-width: 1023.98px) {
	header {
		width: 100vw;

		.container nav a {
			font-size: 16px;
		}

		.container {
			width: -webkit-fill-available;
			grid-template-columns: auto;
			padding: 0;

			nav {
				justify-content: space-between;

				.logo {
					width: 264.69px;
					height: 35.187px;
					margin-left: 20px;
					padding-left: 20px;
				}
			}

			nav .header-menu,
			nav .header-menu ul,
			nav .header-menu .social {
				flex-direction: column;
				width: 100%;
			}

			nav .header-menu {
				width: 100%;
				padding: 64px 24px 24px;
				gap: 16px;
				opacity: 0;
				visibility: hidden;
				transition: opacity 0.4s ease, visibility 0s linear 0.4s;

				&.active {
					opacity: 1;
					visibility: visible;
					transition-delay: 0s;
				}

				ul {
					align-items: flex-end;
					gap: 8px;
				}

				.social {
					align-items: flex-end;
					gap: 16px;

					.medias {
						justify-content: flex-end;
						gap: 32px;

						&::after {
							width: calc(100vw - 48px);
							border-left: none;
							border-bottom: 1px solid #b50b04;
							position: absolute;
							margin: 0;
						}

						a.logo-ifood,
						a.logo-instagram {
							width: unset;
							height: unset;
							margin: 0;

							path {
								fill: #f59a1b;
							}
						}
					}

					button {
						margin: 16px auto 0;
					}
				}
			}
		}

		ul li {
			margin: 0;
		}
	}

	[data-menu='button'] {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 24px;
		padding: 0;
		position: relative;
		background: rgba(29, 6, 5, 0.15);
		border: none;
		border-radius: 3px;
		font-weight: bold;
		text-transform: uppercase;
		color: #fff;
		z-index: 300;
		cursor: pointer;
	}

	.header-menu {
		display: none;
		position: absolute;
		background-color: #f1ddc4;
		background: url('@/assets/banner-menu-mobile.png') no-repeat center center;
		background-size: cover;
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		z-index: 200;
		top: 0;
		box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);

		&.active {
			display: block;
			animation: show-right 0.3s forwards;
		}
	}
}

@keyframes show-up {
	from {
		opacity: 0;
		transform: translate3d(30px, 0, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}

.burger {
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	transition: transform 600ms;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.line {
	fill: none;
	transition: stroke-dasharray 600ms, stroke-dashoffset 600ms;
	stroke: #1d0605;
	stroke-width: 7.5;
	stroke-linecap: round;
}
.open .top {
	stroke-dasharray: 40 172;
}
.open .middle {
	stroke-dasharray: 40 111;
}
.open .bottom {
	stroke-dasharray: 40 172;
}
.open.active .top {
	stroke-dashoffset: -132px;
}
.open.active .middle {
	stroke-dashoffset: -71px;
}
.open.active .bottom {
	stroke-dashoffset: -132px;
}
</style>
