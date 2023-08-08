<script>
	import { css } from 'styled-system/css';

	import Sidebar from '../components/Sidebar.svelte';
	import Post from '../components/Post.svelte';

	import { getTags, getCategories } from '$lib/utils';

	export let data;

	const tags = getTags(data.posts);
	const categories = getCategories(data.posts);
</script>

<svelte:head>
	<title>Saya's blog</title>
	<meta name="description" content="Saya 的个人博客" />
	<link rel="alternate" type="application/rss+xml"
		title="RSS Feed for Saya's blog" href="/rss.xml" />

</svelte:head>

<div
	class={css({
		mx: 'auto',
		maxW: '6xl',
		bg: 'white',
		mt: 8,
		display: 'grid',
		gridTemplateColumns: 'max-content 1fr',
		gap: 4
	})}
>
	<Sidebar {tags} {categories} />
	<main
		class={css({
			p: 4,
			gridColumn: {
				base: 2,
				md: 1
			}
		})}
	>
		<section>
			<h1
				class={css({
					fontSize: '3xl',
					fontWeight: 'bold',
					lineHeight: 1
				})}
			>
				Saya's Blog
			</h1>
			<article
				class={css({
					mt: 4
				})}
			>
				<p>大家好，欢迎来到我的个人博客</p>

				<p>在这个博客，我会分享我的感想，学到的技术以及发现的一些好玩的东西</p>

				<p>你可以通过 Telegram 或者邮件联系我</p>
			</article>
		</section>
		<section
			class={css({
				mt: 4
			})}
		>
			<h3
				class={css({
					fontSize: 'xl',
					fontWeight: 'semibold',
					lineHeight: 1
				})}
			>
				All posts
			</h3>

			<div>
				{#each data.posts as post}
					<Post {post} />
				{/each}
			</div>
		</section>
	</main>
</div>
