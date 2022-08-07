import Head from 'next/head';

import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import ThemeToggler from '../components/ThemeToggler';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Musicode - Music 🎵 to keep you on while coding 🧑‍💻</title>

				<meta name="description" content="Music 🎵 to keep you on while coding 🧑‍💻" />

				<link rel="icon" href="/favicon.webp" />
			</Head>

			<Header />

			<Cards />

			<Footer />

			<ThemeToggler />
		</div>
	);
}

export default Home;
