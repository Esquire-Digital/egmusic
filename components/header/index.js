import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>EG Music</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <header className="absolute top-0 left-0 z-50 flex flex-row items-start justify-between w-full px-8 py-12 md:p-6">
        <div className="w-1/2">
          <img
            src="/images/eg-logo.png"
            alt="EG Music Logo"
            className="w-16 md:w-24"
          />
        </div>
        <ul className="flex flex-row items-center justify-end w-1/2 ">
          <a
            href="#"
            className="hidden mx-6 font-bold text-white transition duration-300 md:inline font-mont hover:text-eg-blue"
          >
            Learn
          </a>
          <a
            href="#"
            className="hidden mx-6 font-bold text-white transition duration-300 md:inline font-mont hover:text-eg-blue"
          >
            Follow
          </a>
          <a
            href="#"
            className="hidden mx-6 font-bold text-white transition duration-300 md:inline font-mont hover:text-eg-blue"
          >
            Listen
          </a>
          <a
            href="#"
            className="hidden mx-6 font-bold text-white transition duration-300 md:inline font-mont hover:text-eg-blue"
          >
            Live
          </a>
          <a
            href="#"
            className="ml-6 font-bold text-white transition duration-300 font-mont hover:text-eg-blue"
          >
            EPK
          </a>
        </ul>
      </header>
    </>
  );
}
