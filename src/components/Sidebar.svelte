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
			icon: Mail
		},
		{
			name: 'Twitter',
			icon: Twitter
		}
	];
</script>

<!-- <div class={css({
				p: 4,
				pos: "sticky",
				top: 20,
				h: "80px",
				alignSelf: "start",
				bg: "red"
				})}>
	 sidebar

	 </div> -->

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
	<div
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
			<div
				class={css({
					ml: 3,
					w: 'min-content',
					fontSize: 'xs'
				})}
			>
				来到你身边的博客
			</div>
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
							bg: 'slate.50',
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
					<p
						class={css({
							fontSize: 'sm'
						})}
					>
						{name}
					</p>
				</a>
			{/each}
		</div>
	</div>

	<div
		class={css({
			border: '1px solid token(colors.slate.200)',
			p: 4,
			mt: 4,
			rounded: 'md',
			shadow: 'sm'
		})}
	>
		<div>
			<p
				class={css({
					textAlign: 'center',
					fontWeight: 'semibold'
				})}
			>
				标签
			</p>

			<div
				class={hstack({
					gap: 1,
					flexWrap: 'wrap',
					maxW: '180px',
					mt: 4
				})}
			>
				{#each tags as tag}
					<p
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
					</p>
				{/each}
			</div>
		</div>

		<div
			class={css({
				mt: 4
			})}
		>
			<p
				class={css({
					textAlign: 'center',
					fontWeight: 'semibold'
				})}
			>
				分类
			</p>

			<div
				class={hstack({
					gap: 1,
					flexWrap: 'wrap',
					maxW: '180px',
					mt: 4
				})}
			>
				{#each categories as category}
					<p
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
					</p>
				{/each}
			</div>
		</div>
	</div>
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
