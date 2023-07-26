export const prerender = true;

import { json } from '@sveltejs/kit';
async function getPosts() {
	/** @type import("$lib/types").Post[] */
	let posts = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;
			// @ts-ignore
			const post = { ...metadata, slug };

			post.published && posts.push(post);
		}
	}

	posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	return posts;
}

export async function GET() {
	const posts = await getPosts();

	return json(posts);
}
