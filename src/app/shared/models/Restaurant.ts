export class Restaurant {
	id: number;
	title: string;
	image: string;
	tags: string[];
	rating: number;
	location?: {
		lat?: string,
		lng?: string
	};
}