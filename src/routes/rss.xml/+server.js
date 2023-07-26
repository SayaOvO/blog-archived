export const prerender = true;

/**  @type {import("@sveltejs/kit").Handle} */
/** @param {import("@sveltejs/kit").RequestEvent} param0 1
 */
export async function GET({ fetch }) {
	const response = await fetch('api/posts');

	/**  @type {import("$lib/types").Post[]} */
	const posts = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
	<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>Saya's Blog</title>
				<description>Saya 的个人博客</description>
				<link>https://saya.missgao.cc</link>
				<atom:link href="https://saya.missgao.cc/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>https://saya.missgao.cc/${post.slug}</link>
							<guid isPermaLink="true">https://saya.missgao.cc/${post.slug}</guid>
							<pubDate>${new Date(post.date).toLocaleDateString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim();

	return new Response(xml, { headers });
}
