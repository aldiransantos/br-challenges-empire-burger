import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/components/HomePage'),
		meta: { toTop: true, smoothScroll: true }
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
