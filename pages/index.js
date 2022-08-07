import Head from 'next/head';

import Header from '../components/Header';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import ThemeToggler from '../components/ThemeToggler';

const Home = () => {
	return (
		<div>
			<Head>
				{/* Required meta tags */}
				<meta charset="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Music 🎵 to keep you on while coding 🧑‍💻" />
				<meta name="keywords" content="coding, programming, music, songs, sound, audio, lofi, mood, battle, beach, birds, boat, books, campfire, chill, clock, drinking, dripping water, water, energy, war bgm, farm, fireworks, flute, footsteps, forest, grind, keyboard, leaves, mouse, polozhenie, rain, retro, river, road, bhool bhulaiyaa title track, rocket, snow, storm, thunder, train, victory, wildcard, ed sheeran, ed, sheeran, shape of you, shape, of, you, atul, kumar, atul kumar, kumartul" />
				<meta name="author" content="Atul Kumar" />

				{/* Open Graph Meta Tags */}
				<meta property="og:title" content="Musicode 🎵" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://musicode.vercep.app" />
				<meta property="og:image" content="https://musicode.vercel.app/mockup.png" />
				<meta property="og:description" content="Music 🎵 to keep you on while coding 🧑‍💻" />
				<meta property="og:site_name" content="Musicode" />
				<meta property="og:locale" content="en_US" />

				{/* Twitter Meta Tags */}
				<meta property="twitter:card" content="summary" />
				<meta property="twitter:title" content="Musicode" />
				<meta property="twitter:description" content="Music 🎵 to keep you on while coding 🧑‍💻" />
				<meta property="twitter:image" content="https://musicode.vercel.app/mockup.png" />
				<meta property="twitter:image:alt" content="Musicode Home Page" />
				<meta property="twitter:site" content="@kumartul001" />
				<meta property="twitter:creator" content="@kumartul001" />

				<title>Musicode - Music 🎵 to keep you on while coding 🧑‍💻</title>

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
