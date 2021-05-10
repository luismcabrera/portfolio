import Head from 'next/head';
import Hero from '../src/components/home/Hero';
import Skills from '../src/components/home/Skills';
import Contact from '../src/components/home/Contact';
import Projects from '../src/components/home/Projects';
import PublicLayout from '../src/components/layouts/PublicLayout';

export default function Home() {
	return (
		<div className="home">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Portafolio profesional de Luis Cabrera - Desarrollador Frontend"/>
			</Head>
			<main>
				<PublicLayout>
					<Hero />
					<Skills />
					<Projects />
					<Contact />
				</PublicLayout>
			</main>
		</div>
	);
}
