<script>
	import { css } from 'styled-system/css';
	import { hstack } from 'styled-system/patterns';
	import { Calendar } from 'lucide-svelte';
	import { formatDate } from '$lib/utils';

	/** @type import("$lib/types").Post */
	export let post;
</script>

<section
	class={css({
		my: 3
	})}
>
	<h4
		class={css({
			fontWeight: 'medium',
			fontSize: 'lg',
			color: 'orange.800'
		})}
	>
		<a href="/{post.slug}">
			{post.title}
		</a>
	</h4>
	<p
		class={hstack({
			fontSize: 'sm',
			color: 'slate.800',
			gap: '2px'
		})}
	>
		<Calendar size={16} />

		<time
			datetime={post.date}
			class={css({
				ml: '2px',
				fontStyle: 'italic'
			})}>{formatDate(post.date)}</time
		>
	</p>
	<p
		class={css({
			maxW: '70ch'
		})}
	>
		{post.description}
	</p>
</section>
