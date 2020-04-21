import gotoLink from "../../utils/goto-link";

export default function FrontHero() {
  return (
    <section
      className="relative w-full h-screen"
      style={{ minHeight: "650px" }}
    >
      <img
        loading="lazy"
        className="absolute top-0 left-0 object-cover object-top w-full h-full"
        src="/images/banner.png?webp"
        alt="EG Music on stage"
      />
      <div className="absolute bottom-0 z-10 w-full px-8 mb-48 transform -translate-x-1/2 lg:mb-32 left-1/2 lg:px-0 lg:w-auto">
        <p className="inline-block w-full mb-16 text-6xl leading-none text-center text-gray-600 uppercase whitespace-no-wrap md:text-mega lg:text-mighty xxl:text-massive font-ant lg:mb-0">
          EG Music
        </p>
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-center transform translate-y-full lg:translate-y-8 lg:flex-row lg:justify-end lg:right-0 lg:translate-x-16 xl:translate-y-4">
          <button className="mb-2 lg:mb-0 lg:mr-4 button primary">
            Sign up for updates
            <img
              loading="lazy"
              src="/images/arrow-right.png?webp"
              alt="Arrow right"
            />
          </button>
          <button
            className="button primary"
            onClick={() => {
              gotoLink("listen");
            }}
          >
            Listen
            <img
              loading="lazy"
              src="/images/arrow-right.png?webp"
              alt="Arrow right"
            />
          </button>
        </div>
      </div>
      <div className="absolute right-0 z-10 flex-row items-center hidden mr-8 font-bold text-white uppercase transform -rotate-90 translate-x-1/2 translate-y-1/2 lg:flex top-1/2 font-mont">
        <span className="text-xl text-white uppercase font-ant">Follow</span>
        <div className="block w-16 mx-4 bg-white h-2px"></div>
        <a href="https://www.facebook.com/EGmusicNYC/" className="mx-4">
          <img
            loading="lazy"
            className="transform rotate-90"
            src="/images/facebook-f.png?webp"
            alt="Facebook icon"
          />
        </a>
        <a href="https://www.instagram.com/egmusicnyc/" className="mx-4">
          <img
            loading="lazy"
            className="transform rotate-90"
            src="/images/instagram.png?webp"
            alt="Instagram icon"
          />
        </a>
        {/* <a href="#" className="mx-2">
          <img loading="lazy"
            className="transform rotate-90"
            src="/images/twitter.png?webp"
            alt="Twitter icon"
          />
        </a> */}
        {/* <a href="#" className="mx-2">
          <img loading="lazy"
            className="transform rotate-90"
            src="/images/youtube.png?webp"
            alt="Youtube icon"
          />
        </a> */}
      </div>
    </section>
  );
}
