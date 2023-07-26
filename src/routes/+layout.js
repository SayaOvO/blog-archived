export const prerender = true;

/**  @type { import("@sveltejs/kit").Load } */
export function load({ url }) {
	return {
		pathname: url.pathname
	};
}
