<script>
	/** @ts-check */
	/** ts-expect-error */
	import { css } from 'styled-system/css';
	import { formatDate } from '$lib/utils';
	import { Tag, FolderClosed } from 'lucide-svelte';
	import { hstack } from 'styled-system/patterns/hstack';
	export let data;

	let tags = data.meta.tags ?? [];
	let categories = data.meta.categories ?? [];

</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="og:type" content="article" />
	<meta name="og:title" content={data.meta.title} />
	<meta name="og:description" content={data.meta.description} />
	<meta name="og:url" content={`https://sayya.vercel.app/${data.slug}`} />
</svelte:head>

<main
	class={css({
		mx: 'auto',
		maxW: '4xl',
		p: '16px 24px'
	})}
>
	<article>
		<hgroup
			class={css({
				my: 4,
				maxW: "70ch"
			})}
		>
			<h1
				class={css({
					fontWeight: 550,
					fontSize: '4xl',
					lineHeight: 1
				})}
			>
				{data.meta.title}
			</h1>
				<i
					class={css({
						fontStyle: 'italic',
						margin: 0
					})}>{formatDate(data.meta.date)}</i>

			{#if categories.length > 0}
				<div
					class={hstack({
						pl: 3,
						borderLeft: '2px solid token(colors.orange.800)',
						my: 2
					})}
				>
					<FolderClosed size={20} />
					<span>分类：</span>
					{#each categories as category}
						<span
							class={css({
								bg: 'slate.200',
								px: 2,
								py: 1,
								rounded: 'md',
								_hover: {
									cursor: 'pointer',
									bg: 'slate.300'
								}
							})}>{category}</span
						>
					{/each}
				</div>
			{/if}

			{#if tags.length > 0}
				<div
					class={hstack({
						borderLeft: '2px solid token(colors.orange.800)',
						pl: 3
					})}
				>
					<Tag size={20} />
					<span>标签：</span>
					{#each tags as tag}
						<span
							class={css({
								bg: 'slate.200',
								px: 2,
								py: 1,
								rounded: 'md',
								_hover: {
									cursor: 'pointer',
									bg: 'slate.300'
								}
							})}>{tag}</span
						>
					{/each}
				</div>
			{/if}
		</hgroup>
		<section class="prose">
			<svelte:component this={data.content} />
		</section>
	</article>
</main>
