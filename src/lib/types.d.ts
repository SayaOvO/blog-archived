export type Post = {
	title: string;
	description: string;
	categories: string[];
	tags: string[];
	slug: string;
	date: string;
	published: boolean;
};

export type Metadata = Omit<Post, 'slug'>;
