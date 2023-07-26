<script>
	import { css } from 'styled-system/css';
	import { hstack } from 'styled-system/patterns';

	import { onMount, onDestroy } from 'svelte';

	/** @type HTMLElement*/
	let scrollDetectorElement;

	let routes = [
		{
			name: 'Categories',
			href: 'categories'
		},
		{
			name: 'Tags',
			href: 'tags'
		},
		{
			name: 'About',
			href: 'about'
		}
	];

	let isScrolled = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => (isScrolled = !entry.isIntersecting));
			},
			{
				root: null,
				rootMargin: `0px 0px`,
				threshold: 0
			}
		);
		observer.observe(scrollDetectorElement);
		return () => observer.disconnect();
	});
</script>

<div bind:this={scrollDetectorElement} />
<div
	class={hstack({
		h: 14,
		px: {
			base: 3,
			lg: 16
		},
		pos: 'sticky',
		top: 0,
		bg: 'white',
		justify: 'space-between',
		transition: 'box-shadow 0.3s',
		zIndex: 50
	})}
	style={isScrolled ? 'box-shadow: 0 8px 10px -4px rgb(0 0 0 /0.1)' : ''}
>
	<a
		href="/"
		class={css({
			_after: {
				display: 'inline-block',
				content: '"blog"',
				bg: 'black',
				fontSize: 'sm',
				rounded: 'md',
				color: 'white',
				px: 1,
				py: '2px',
				ml: 1,
				transform: 'rotate(-30deg) translateY(-3px)',
				transition: 'rotate ease-in-out 1s'
			},
			transition: 'rotate, color',
			fontSize: {
				lg: 'lg'
			},
			fontWeight: 'semibold',
			_hover: {
				cursor: 'pointer',
				_after: {
					transform: 'rotate(0deg) translateY(-3px)'
				},
				color: 'orange.800'
			}
		})}
	>
		Saya's
	</a>

	<nav
		class={hstack({
			gap: 3,
			hideBelow: 'sm'
		})}
	>
		{#each routes as route}
			<a
				href="/{route.href}"
				class={css({
					_hover: {
						color: 'orange.800'
					},
					transition: 'color'
				})}>{route.name}</a
			>
		{/each}
	</nav>
</div>
