import { useEffect } from 'react';

import Header from '../components/header';
import FrontHero from '../components/front-hero';
import Footer from '../components/footer';

export default function Home() {
	useEffect(() => {
		if (window.netlifyIdentity) {
			window.netlifyIdentity.on('init', user => {
				if (!user) {
					window.netlifyIdentity.on('login', () => {
						document.location.href = '/admin/';
					});
				}
			});
		}
	});

	return (
		<>
			<Header />
			<FrontHero />
			<Footer />
		</>
	);
}
