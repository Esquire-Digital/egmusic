import Head from "next/head";
import gotoLink from "../../utils/goto-link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (router.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>EG Music</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <header className="absolute top-0 left-0 z-50 flex flex-row items-start justify-between w-full p-6">
        <div className="w-1/2">
          <a href="/">
            <img
              loading="lazy"
              src="/images/eg-logo.png?webp"
              alt="EG Music Logo"
              className="w-16 lg:w-24"
            />
          </a>
        </div>
        <ul className="flex flex-row items-center justify-end w-1/2 ">
          {isHome ? (
            <>
              <button
                onClick={() => {
                  gotoLink("learn");
                }}
                className="hidden mx-4 font-bold text-white transition duration-300 lg:mx-6 md:inline font-mont hover:text-eg-blue"
              >
                Learn
              </button>
              <button
                onClick={() => {
                  gotoLink("follow");
                }}
                className="hidden mx-4 font-bold text-white transition duration-300 lg:mx-6 md:inline font-mont hover:text-eg-blue"
              >
                Follow
              </button>
              <button
                onClick={() => {
                  gotoLink("listen");
                }}
                className="hidden mx-4 font-bold text-white transition duration-300 lg:mx-6 md:inline font-mont hover:text-eg-blue"
              >
                Listen
              </button>
              <button
                onClick={() => {
                  gotoLink("live");
                }}
                className="hidden mx-4 font-bold text-white transition duration-300 lg:mx-6 md:inline font-mont hover:text-eg-blue"
              >
                Live
              </button>
              <button
                onClick={() => {
                  gotoLink("shows");
                }}
                className="hidden mx-4 font-bold text-white transition duration-300 lg:mx-6 md:inline font-mont hover:text-eg-blue"
              >
                Shows
              </button>
            </>
          ) : (
            <></>
          )}
          <a
            href="/epk/"
            className="ml-6 font-bold text-white transition duration-300 font-mont hover:text-eg-blue"
          >
            EPK
          </a>
        </ul>
      </header>
    </>
  );
}
