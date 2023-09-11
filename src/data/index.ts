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
		titulo: "BASIC",
		descripcion:
			"La mejor opción para uso personal y para tu próximo proyecto.",
		precio: "$38",
		periodo: "/mes",
		caracteristicas: [
			"Linux Ubuntu 22.04 (LTS) x64",
			"4 GB/2 CPUs AMD",
			"80 GB NVme SSDs",
			"4 TB de transferencia",
			"Certificado SSL gratuito",
			"Nombre de dominio gratuito",
			"Copia de seguridad mensual",
			"Soporte 24/7",
		],
	},
	{
		id: 2,
		titulo: "STANDARD",
		descripcion:
			"Relevante para múltiples usuarios, soporte extendido y premium.",
		precio: "$50",
		periodo: "/mes",
		caracteristicas: [
			"Linux Ubuntu 22.04 (LTS) x64",
			"8 GB/2 CPUs AMD",
			"100 GB NVme SSDs",
			"5 TB de transferencia",
			"Certificado SSL gratuito",
			"Nombre de dominio gratuito",
			"Copia de seguridad mensual",
			"Soporte 24/7",
		],
	},
	{
		id: 3,
		titulo: "PRO",
		descripcion:
			"La mejor opción para usos a gran escala y derechos de redistribución extendidos.",
		precio: "$66",
		periodo: "/mes",
		caracteristicas: [
			"Linux Ubuntu 22.04 (LTS) x64",
			"8 GB/4 CPUs AMD",
			"160 GB NVme SSDs",
			"5 TB de transferencia",
			"Certificado SSL gratuito",
			"Nombre de dominio gratuito",
			"Copia de seguridad mensual",
			"Soporte 24/7",
		],
	},
];
