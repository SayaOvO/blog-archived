/**  @type { import("@sveltejs/kit").Load } */
export async function load({ fetch }) {
	const response = await fetch('/api/posts');
	const posts = await response.json();

	return {
		/**  @type { import("$lib/types").Post[] } */
		posts
	};
}
