export default function Footer() {
  return (
    <>
      <footer className="relative px-6 pt-24 pb-4 bg-black lg:px-24 lg:pt-64 lg:pb-4">
        <p
          className="absolute inset-x-0 top-0 z-10 text-6xl leading-none text-center text-transparent uppercase transform -translate-y-4 opacity-25 pointer-events-none md:text-mighty md:-translate-y-16 lg:text-massive font-ant"
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#9a9fa4",
          }}
        >
          contact
        </p>
        <p className="font-bold text-center text-white font-mont">
          For all booking and press inquiries, please contact
          <a href="mailto:info@egmusicnyc.com" className="ml-2 text-eg-blue">
            info@egmusicnyc.com
          </a>
        </p>
        <form
          name="Contact Form"
          method="POST"
          data-netlify="true"
          className="my-8 lg:grid lg:grid-rows-3 lg:gap-16 lg:my-24"
        >
          <input type="hidden" name="Fax" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-start">
              <input
                type="text"
                className="block w-full font-bold text-white bg-transparent border-b-2 border-white rounded-none font-mont"
                required
                name="Name"
              />
              <label
                htmlFor="Name"
                className="block mt-2 font-bold text-white font-mont"
              >
                Name *
              </label>
            </div>
            <div className="flex flex-col items-start">
              <input
                type="text"
                className="block w-full font-bold text-white bg-transparent border-b-2 border-white rounded-none font-mont"
                required
                name="Email"
              />
              <label
                htmlFor="Email"
                className="block mt-2 font-bold text-white font-mont"
              >
                Email *
              </label>
            </div>
            <div className="flex flex-col items-start">
              <input
                type="text"
                className="block w-full font-bold text-white bg-transparent border-b-2 border-white rounded-none font-mont"
                name="Phone"
              />
              <label
                htmlFor="Phone"
                className="block mt-2 font-bold text-white font-mont"
              >
                Phone
              </label>
            </div>
          </div>
          <div>
            <textarea
              name="Message"
              className="block w-full h-32 font-bold text-white bg-transparent border-b-2 border-white rounded-none lg:h-auto font-mont"
            ></textarea>
            <label
              htmlFor="Message"
              className="block mt-2 font-bold text-white font-mont"
              required
            >
              Message *
            </label>
          </div>
          <div className="flex justify-center mt-8 lg:justify-end lg:mt-0">
            <button className="button primary">
              Send <img src="/images/arrow-right.png?webp" alt="Arrow right" />
            </button>
          </div>
        </form>
        <img
          className="w-32 mx-auto my-8"
          src="/images/eg-logo-color.png?webp"
          alt="EG Music Logo in Blue"
        />
        <p className="font-bold text-center text-white font-mont">
          &copy; {new Date().getFullYear()} Emily Gabriele. All Rights Reserved.{" "}
          <span>Disclaimer</span>
        </p>
      </footer>
    </>
  );
}
