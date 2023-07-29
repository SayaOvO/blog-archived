import { getPosts } from '$lib/utils';

/**  @type { import("@sveltejs/kit").Load } */
export async function load() {
	const posts = (await getPosts()) ?? [];
	return {
		posts
	};
}
