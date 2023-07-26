<script>
	let counter = 0;
</script>

<button on:click={() => (counter += 1)}>Click me</button>
<p>{counter}</p>

<style>
	button {
		padding: 5px 12px;
		border-radius: 8px;
		background-color: blue;
		color: white;
	}
	button:hover {
		cursor: pointer;
	}
</style>
