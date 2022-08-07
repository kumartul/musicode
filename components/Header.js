import { useState, useEffect } from 'react';

const Header = () => {
	const [stars, setStars] = useState(0);

	// Fetch the number of stargazers of the repository (musicode)
	useEffect(() => {
		const fetchStars = async () => {
			const response = await fetch("https://api.github.com/users/kumartul/repos");
			const repos = await response.json();

			const repo = repos.filter(repo => repo.name === "musicode");

			const stars = repo[0].stargazers_count;

			setStars(stars);
		}

		fetchStars();
	}, []);


	return (
		<header className="w-full bg-[#fafafa] flex items-center justify-between shadow-sm p-2">

			{/* Logo */}
			<div>
				<h1 className="font-bold text-md md:text-2xl lg:text-2xl text-gray-700">Musicode 🎵</h1>
			</div>

			<div className="flex items-center space-x-2">

				{/* Twitter Card */}
				<a href="https://www.twitter.com/kumartul001">
					<div className="flex items-center border border-gray-300 rounded-md px-2 py-1 bg-white transition-all duration-250 hover:bg-gray-100">

						{/* Atul Kumar's Photo */}
						<div className="px-2">
							<img
								src="/atulkumar.jpg"
								alt="Atul Kumar"
								width={40}
								height={40}
								className="rounded-full"
							/>
						</div>

						<div className="flex flex-col">
							<h2 className="font-bold text-gray-700">By Atul Kumar</h2>
							<h3 className="text-blue-500 text-sm text-semibold flex items-center">
								Follow on Twitter

								{/* Twitter Icon */}
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 512 512"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
									className="ml-1 mt-[0.25em]"
								>
									<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
								</svg>
							</h3>
						</div>
					</div>
				</a>

				{/* Github Card */}
				<a
					href="https://www.github.com/kumartul"
					className="hidden md:block lg:block"
				>
					<div className="flex items-center border border-gray-300 rounded-md px-2 py-1 bg-white transition-all duration-250 hover:bg-yellow-100">

						{/* GitHub Icon */}
						<div className="px-2">
							<svg
								height="32"
								width="32"
								aria-hidden="true"
								viewBox="0 0 16 16"
								version="1.1"
							>
								<path
									fillRule="evenodd"
									d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
								></path>
							</svg>
						</div>

						<div className="flex flex-col">
							<h2 className="font-bold text-gray-700">Star on GitHub</h2>
							<h3 className="text-yellow-500 text-sm text-semibold flex items-center">
								{stars} {stars === 1 ? 'star' : 'stars'} ⭐
							</h3>
						</div>
					</div>
				</a>
			</div>
		</header>
	);
}

export default Header;
