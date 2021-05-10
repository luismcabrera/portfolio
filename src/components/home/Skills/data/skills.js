import NoteIcon from '@iconify/icons-simple-line-icons/note';

const title = 'Web Design';
const content =
	'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex. ';

const skills = [
	{
		title: { en: title, es: 'Creación de Interfaces Web' },
		content: {
			en: content,
			es:
				'Domino el estándar HTML, CSS, Javascript. Así como algunas herramientas para mejorar mi productividad, tales como Sass, módulos CSS, Typescript, ES6+, babel, ESLint y webpack.',
		},
		Icon: NoteIcon,
	},
	{
		title: { en: 'React.JS', es: 'React.JS' },
		content: {
			en: content,
			es:
				'Implementar técnicas de memorización, optimización, patrones de diseño, Redux, renderizado en el servidor, Service Worker (PWA) y Next.JS "EL" framework de React.',
		},
		Icon: NoteIcon,
	},
	{
		title: { en: 'React.JS Avanzado', es: 'Servicios Rest' },
		content: {
			en: content,
			es:
				'Consumo de APIs siguiendo el estándar REST e implementando GraphQL. Crear servicios web con Node.JS (Express y Nest.JS) y usando PHP (Con Laravel), integración con CMS (Wordpress, Shopify, Strapi).',
		},
		Icon: NoteIcon,
	},
	{
		title: { en: 'React.JS Avanzado', es: 'Bases de datos' },
		content: {
			en: content,
			es:
				'Relacionales basadas en SQL y no relacionales como MongoDB y Redis.',
		},
		Icon: NoteIcon,
	},
	{
		title: { en: title, es: 'Web Sockets' },
		content: {
			en: content,
			es:
				'Creación de aplicaciones en tiempo real con Socket.io.',
		},
		Icon: NoteIcon,
	},
	{
		title: { en: title, es: 'Entornos de desarrollo' },
		content: {
			en: content,
			es: 'Creación de contenedores con Docker, y control de versiones con Git y Github, integración y despliegue contínuo.',
		},
		Icon: NoteIcon,
	},
	{
		title: { en: title, es: 'Desarrollo Móvil' },
		content: {
			en: content,
			es: 'Desarrollo multiplataforma, con React Native (Expo y CLI), también con Ionic.',
		},
		Icon: NoteIcon,
	},
];

export default skills;
