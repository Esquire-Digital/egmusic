export default function FrontHero() {
	return (
		<>
			<section className="relative w-full h-screen flex flex-col items-center justify-end">
				<img className="absolute left-0 top-0 w-full h-full object-cover object-top" src="/images/banner.png" alt="EG Music on stage" />
				<p className="text-gray-600 z-10 uppercase massive mb-16 font-ant">EG Music</p>
				<div className="absolute right-0 bottom-0 mr-32 mb-32 z-10">
					<button className="button primary mr-4">Sign up for updates</button>
					<button className="button primary">Listen</button>
				</div>
				<div className="absolute right-0 inset-y-0 transform translate-y-1/2 z-10 text-white font-mont font-bold uppercase">
					<span className="block transform -rotate-90">Follow</span>
					<div></div>
				</div>
			</section>
		</>
	);
}
