import { getPosts } from "$lib/utils";

export const prerender = true;

/**  @type {import("@sveltejs/kit").Handle} */
export async function GET() {

	/**  @type {import("$lib/types").Post[]} */
	const posts = await getPosts() || [];

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
	<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>Saya's Blog</title>
				<description>Saya 的个人博客</description>
				<link>https://sayya.vercel.app</link>
				<atom:link href="rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>https://sayya.vercel.app/${post.slug}</link>
							<guid isPermaLink="true">https://sayya.vercel.app/${post.slug}</guid>
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
