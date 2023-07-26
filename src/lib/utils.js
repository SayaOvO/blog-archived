/**  @ts-check */
/**  ts-expect-error */

/**  @param {string} date */
export function formatDate(date) {
	const formatter = new Intl.DateTimeFormat('us', { dateStyle: 'medium' });
	return formatter.format(new Date(date));
}

/**  @param {import("../app").Post[]} posts 2 */
export function getTags(posts) {
	/**  @type string[] */
	let allTags = [];

	for (let post of posts) {
		const tags = post?.tags?.filter((tag) => !allTags.includes(tag));
		if (tags && tags.length > 0) {
			allTags = [...allTags, ...tags];
		}
	}

	return allTags;
}

/**  @param {import("../app").Post[]} posts 2 */
export function getCategories(posts) {
	/**  @type string[] */
	let allCategories = [];

	for (let post of posts) {
		const categories = post?.categories?.filter((category) => !allCategories.includes(category));
		if (categories && categories.length > 0) {
			allCategories = [...allCategories, ...categories];
		}
	}

	return allCategories;
}

export function getRandomColor() {
	const colors = [
		'#d97706',
		'#6d28d9',
		'#1d4ed8',
		'#064e3b',
		'#713f12',
		'#b91c1c',
		'#7e22ce',
		'#be123c',
		'#be185d'
	];

	const colorIndex = Math.floor(Math.random() * colors.length);

	return colors[colorIndex];
}
