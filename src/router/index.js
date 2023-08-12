import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/components/HomePage'),
		meta: { toTop: true, smoothScroll: true },
		children: [
			{
				path: '/#promocao',
				name: 'promocao',
				component: () => import('@/components/section/OfertasEspeciaisSection')
			},
			{
				path: '/#cardapio',
				name: 'cardapio',
				component: () => import('@/components/section/CardapioSection')
			},
			{
				path: '/#comentarios',
				name: 'comentarios',
				component: () => import('@/components/section/ComentariosSection')
			},
			{
				path: '/#contato',
				name: 'contato',
				component: () => import('@/components/section/NossasEntregasSection')
			},
			{
				path: '/#localizacao',
				name: 'localizacao',
				component: () => import('@/components/section/NossoCasteloSection')
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to) {
		if (to.hash) {
			return window.scrollTo({
				top: document.querySelector(to.hash).offsetTop + -64,
				behavior: 'smooth'
			});
		} else {
			return { x: 0, y: 0 };
		}
	}
});

export default router;
