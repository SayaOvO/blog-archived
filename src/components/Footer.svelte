<script>
	import { css } from 'styled-system/css';
	import { hstack } from 'styled-system/patterns';
	import { Github, Rss } from 'lucide-svelte';

	import svelteIcon from '$lib/assets/brand-svelte.svg';
</script>

<footer
	class={css({
		fontSize: 'sm',
		display: 'block',
		m: 6,
		textAlign: 'center',
		color: 'slate.800'
	})}
>
	<p
		class={hstack({
			justify: 'center',
			gap: 1
		})}
	>
		Built with
		<a
			href="https://svelte.dev/"
			class={hstack({
				gap: '2px'
			})}
		>
			Svelte

			<img
				src={svelteIcon}
				class={css({
					h: 4,
					w: 4,
					color: 'black'
				})}
				alt="svelte icon"
			/>
		</a>
	</p>

	<p
		class={hstack({
			justify: 'center',
			gap: 1
		})}
	>
		open sourced on
		<a
			href="https://github.com/SayaOvO/blog"
			class={hstack({
				gap: '2px'
			})}
		>
			<Github size={16} /><span>Github</span>
		</a>
	</p>

	<div
		class={hstack({
			gap: 2,
			justify: 'center'
		})}
	>
		&copy;saya {new Date().getFullYear()}
		<a href="rss.xml" target="_blank">
			<Rss size={16} />
		</a>
	</div>
</footer>
