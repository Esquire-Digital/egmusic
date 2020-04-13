import Head from 'next/head';

export default function Header() {
	return (
		<>
			<Head>
				<title>EG Music</title>
				<link rel="icon" href="/favicon.ico" />
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
			</Head>
			<header className="absolute w-full left-0 top-0 z-50 flex flex-row items-start justify-between p-6">
				<div className="w-1/2">
					<img src="/images/eg-logo.png" alt="EG Music Logo" className="w-24" />
				</div>
				<ul className="flex flex-row items-center justify-end w-1/2 ">
					<a href="#" className="font-mont text-white mx-6">
						Learn
					</a>
					<a href="#" className="font-mont text-white mx-6">
						Follow
					</a>
					<a href="#" className="font-mont text-white mx-6">
						Listen
					</a>
					<a href="#" className="font-mont text-white mx-6">
						Live
					</a>
					<a href="#" className="font-mont text-white mx-6">
						EPK
					</a>
				</ul>
			</header>
		</>
	);
}
