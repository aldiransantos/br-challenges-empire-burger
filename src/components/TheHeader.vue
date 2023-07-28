<template>
	<header ref="menuContainer">
		<div id="home" class="container">
			<nav>
				<router-link to="/">
					<img src="@/assets/logo.svg" class="logo" alt="Empire Burger logo" />
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
		this.$nextTick(() => {
			document.addEventListener('click', this.handleClickOutside);
		});
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
			if (
				this.isMenuOpen &&
				this.$refs.menuContainer &&
				!this.$refs.menuContainer.contains(e.target)
			)
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
				align-items: center;
				justify-content: center;
				font: 400 18px/25px 'Lato', sans-serif;
				color: #635352;

				&:hover {
					font-weight: 700;
					color: #34201f;
				}

				img.logo {
					width: 264.69px;
					height: 35.187px;
					margin-left: 0;
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
					margin-top: 6px;

					.router-link-exact-active {
						font-weight: 700;
						color: #34201f;
					}
				}

				.social {
					display: flex;
					align-items: center;

					.medias {
						display: flex;
						align-items: center;
						gap: 21px;
						margin-left: 16px;

						&::after {
							content: '';
							display: block;
							height: 47.66px;
							border-left: 1px solid #b50b04;
						}
						a {
							background-color: #fff;

							&:hover {
								background-color: #f59a1b;
							}
						}
					}

					button {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 123px;
						height: 34px;
						gap: 8px;
						margin-left: 13px;
						background-color: #f59a1b;
						border-radius: 4px;
						border-color: transparent;
						font: 700 16px 'Lato', sans-serif;
						color: #34201f;
						cursor: pointer;
						transition: all 0.2s ease-in-out;

						&:hover {
							transition: all 0.2s ease-in-out;
							background-color: #ffa827;

							img {
								animation: shake 0.8s linear infinite;
							}
						}

						img {
							height: 21px;
							width: 21.43px;
						}

						span {
							margin-top: 2px;
						}
					}
					@keyframes shake {
						0% {
						}
						50% {
							transform: rotate(18deg);
						}
						100% {
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

		.container {
			width: -webkit-fill-available;
			grid-template-columns: auto;
			padding: 0;
			width: 100%;

			nav {
				justify-content: space-between;

				.logo {
					padding-left: 24px;
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
				padding: 68px 24px 24px;
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
					margin: 0;
				}

				.social {
					align-items: flex-end;
					gap: 16px;

					.medias {
						justify-content: flex-end;
						gap: 32px;
						position: relative;

						&::after {
							width: calc(100vw - 48px);
							position: absolute;
							height: 1px;
							top: 31px;
							margin: 0;
							border-left: none;
							border-bottom: 1px solid #b50b04;
						}

						a {
							background-color: #f59a1b;
							margin: 0;
						}
					}

					button {
						margin: 16px auto 0;
					}
				}
			}
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
