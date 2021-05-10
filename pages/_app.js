import Head from 'next/head';
import '../src/styles/global.scss';
import { LangProvider } from '../src/global/lang';

export default function App({ Component, ...pageProps }) {
	return (
		<>
			<Head>
				<title>Luis Cabrera</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />

				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href={'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'}
					rel="stylesheet"
				/>
				<meta name="author" content="Luis Cabrera" />
				<meta name="copyright" content="Luis Cabrera" />
			</Head>
			<LangProvider>
				<Component {...pageProps} />
			</LangProvider>
		</>
	);
}
