<script>
	import { fade, fly } from 'svelte/transition';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';

	/** @type {{pathname:string}}*/
	export let data;

</script>

<div>
	<Navbar />

	{#key data.pathname}
		<div in:fade>
			<slot />
		</div>
	{/key}
	<Footer />
</div>

<style>
	div {
		font-family: tilda;
	}
	@font-face {
		font-family: tilda;
		src: url('$lib/assets/TildaSans-Medium.woff') format('woff');
	}
</style>
