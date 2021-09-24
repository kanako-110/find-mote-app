export interface ResultType {
	country: string;
	img: string;
	description: string;
	link: string;
}

export interface MapType {
	[key: string]: ResultType;
}

export interface SelectionType {
	id: number;
	formLabel: string;
	options: {
		label: string;
		value: string;
	}[];
}
