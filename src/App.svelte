<script>
	 export let name;

	 import Header from './components/heder.svelte'
	 import Content from './components/content.svelte'
	 import Bottom from './components/bottom.svelte'
</script>

<div>
	<main>
	<Header/>
	<Content/>
	<Bottom />
    </main>
</div>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight:100;
	}

	@media (min-width:640px) {
		main {
			max-width: none;
		}
	}
</style>