import { error } from '@sveltejs/kit';

/** @param {Object} props
 * @param {Object} props.params
 * @param {string} props.params.slug */

export async function load({ params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata,
			slug: params.slug
		};
	} catch (err) {
		throw error(404, `Could not found ${params.slug}`);
	}
}
