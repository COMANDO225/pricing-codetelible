interface Card {
	id: number;
	titulo: string;
	descripcion: string;
	precio: string;
	periodo: string;
	caracteristicas: string[];
}

export const cards: Card[] = [
	{
		id: 1,
		titulo: "Starter",
		descripcion: "Best option for personal use & for your next project.",
		precio: "$29",
		periodo: "/month",
		caracteristicas: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 1 developer",
			"Premium support: 6 months",
			"Free updates: 6 months",
		],
	},
	{
		id: 2,
		titulo: "Company",
		descripcion: "Relevant for multiple users, extended & premium support.",
		precio: "$99",
		periodo: "/month",
		caracteristicas: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 10 developers",
			"Premium support: 24 months",
			"Free updates: 24 months",
		],
	},
	{
		id: 3,
		titulo: "Enterprise",
		descripcion:
			"Best for large scale uses and extended redistribution rights.",
		precio: "$499",
		periodo: "/month",
		caracteristicas: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 100+ developers",
			"Premium support: 36 months",
			"Free updates: 36 months",
		],
	},
];
