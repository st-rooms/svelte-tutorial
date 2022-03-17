<script>

	 let value = "안녕하세요. svelte"
	 let active = false
</script>

<p>{value}</p>
 
<input type="checkbox" bind:checked={active} /> {active}