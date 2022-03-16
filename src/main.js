import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		svelte: "스벨트"
	}
});

export default app;