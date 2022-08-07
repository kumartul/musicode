const Footer = () => {
	return (
		<footer className="bg-white shadow-lg mt-24 p-4 flex items-center justify-between dark:bg-[#1a1a1a]">
			<div className="text-md dark:text-gray-300">
				⚙️ Built by <a
					href="https://www.github.com/kumartul"
					className="underline"
				>
					Atul Kumar
				</a>
			</div>

			<div className="flex items-center space-x-2">
				<a href="https://twitter.com/intent/tweet?text=Checkout%20musicode.vercel.app%20by%20@kumartul001%0A%0AMusic%20🎵%20to%20keep%20you%20on%20while%20coding%20💻">
					<div className="border transition-all duration-100 border-[#1a91da] hover:bg-[#0f84b4] px-3 py-2 capitalize rounded-md font-semibold flex items-center justify-center text-[#0f84b4] hover:text-white">
						Share to Twitter
						<svg
							stroke="currentColor"
							fill="none"
							strokeWidth="2"
							viewBox="0 0 24 24"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-lg ml-2"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
						</svg>
					</div>
				</a>

				<a
					href="https://www.buymeacoffee.com/kumartul"
					target="_blank"
				>
					<img
						src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
						alt="Buy Me A Coffee"
						className="h-[44px] mr-16"
					/>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
