<script>
	/** @ts-check*/
	import { css } from 'styled-system/css';
	import { hstack, grid } from 'styled-system/patterns';

	import avatar from '$lib/assets/avatar.jpg';

	import { Send, Twitter, Mail, Github } from 'lucide-svelte';
	import { getRandomColor } from '$lib/utils';

	/** @type string[]*/
	export let tags;

	/** @type string[]*/
	export let categories;

	let socials = [
		{
			name: 'Github',
			icon: Github,
			href: 'https://github.com/SayaOvO'
		},
		{
			name: 'Telegram',
			icon: Send,
			href: 'https://t.me/SayyaOvO'
		},
		{
			name: 'Email',
			icon: Mail,
			href: 'mailto:sayyaovo+blog@proton.me'
		},
		{
			name: 'Twitter',
			icon: Twitter,
			href: "www.twitter.com/sayyaOvO"
		}
	];
</script>

<aside
	class={css({
		p: 4,
		hideBelow: 'sm',
		pos: 'sticky',
		top: '60px',
		/* https://stackoverflow.com/questions/43707076/how-does-the-position-sticky-property-work */
		alignSelf: 'baseline'
	})}
>
	<section
		class={css({
			border: '1px solid token(colors.slate.200)',
			p: 4,
			bg: 'white',
			rounded: 'md',
			shadow: 'sm'
		})}
	>
		<div
			class={css({
				writingMode: 'vertical-lr'
			})}
		>
			<img src={avatar} alt="avatar" class="image" />
			<p
				class={css({
					ml: 3,
					w: 'min-content',
					fontSize: 'xs'
				})}
			>
				来到你身边的博客
			</p>
		</div>

		<div
			class={grid({
				columns: 2,
				gap: 0,
				mt: 4
			})}
		>
			{#each socials as { icon, name, href }}
				<a
					{href}
					class={hstack({
						gap: 1,
						p: 1,
						rounded: 'md',
						_hover: {
							bg: 'slate.100',
							cursor: 'pointer'
						}
					})}
				>
					<svelte:component
						this={icon}
						class={css({
							h: '18px',
							w: '18px'
						})}
					/>
					<span
						class={css({
							fontSize: 'sm'
						})}
					>
						{name}
					</span>
				</a>
			{/each}
		</div>
	</section>

	<section
		class={css({
			border: '1px solid token(colors.slate.200)',
			p: 4,
			mt: 4,
			rounded: 'md',
			shadow: 'sm'
		})}
	>
		<h3
			class={css({
				textAlign: 'center',
				fontWeight: 'semibold'
			})}
		>
			标签
		</h3>

		<p
			class={hstack({
				gap: 1,
				flexWrap: 'wrap',
				maxW: '180px',
				mt: 4
			})}
		>
			{#each tags as tag}
				<a
					href="/"
					class={css({
						p: '2px 4px',
						bg: 'slate.200',
						rounded: 'md',
						fontSize: '13px',
						_hover: {
							cursor: 'pointer',
							bg: 'slate.300'
						}
					})}
					style="color: {getRandomColor()}"
				>
					{tag}
				</a>
			{/each}
		</p>

		<h3
			class={css({
				textAlign: 'center',
				fontWeight: 'semibold',
				mt: 4
			})}
		>
			分类
		</h3>

		<p
			class={hstack({
				gap: 1,
				flexWrap: 'wrap',
				maxW: '180px',
				mt: 4
			})}
		>
			{#each categories as category}
				<a
					href="/"
					class={css({
						p: '2px 4px',
						bg: 'slate.200',
						rounded: 'md',
						fontSize: '13px',
						_hover: {
							cursor: 'pointer',
							bg: 'slate.300'
						}
					})}
					style="color: {getRandomColor()}"
				>
					{category}
				</a>
			{/each}
		</p>
	</section>
</aside>

<style>
	.image {
		height: 96px;
		width: 96px;
		border-radius: 9999px;
		transition: transform 0.8s ease-in-out;
	}

	.image:hover {
		transform: rotate(-1turn);
	}
</style>
