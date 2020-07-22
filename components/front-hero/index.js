import gotoLink from "../../utils/goto-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useMedia } from "react-use";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function FrontHero() {
  const isDesktop = useMedia("(min-width: 1024px)", true);
  const strokeText = isDesktop
    ? { WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "#424b54" }
    : {};

  return (
    <section
      className="relative w-full h-screen"
      style={{ minHeight: "750px" }}
    >
      <LazyLoadImage
        className="absolute top-0 left-0 object-cover object-top w-full h-full"
        src={require("../../public/media/banner-v2.png")}
        alt="EG Music on stage"
        width="100%"
        height="750px"
      />
      {/* <img
        className="absolute top-0 left-0 object-cover object-top w-full h-full"
        src={require("../../public/media/banner-v2.png")}
        alt="EG Music on stage"
        width="100%"
        height="750px"
      /> */}
      <div className="absolute bottom-0 z-10 w-full px-8 mb-48 transform -translate-x-1/2 left-1/2 lg:px-0 lg:w-auto lg:mb-64 lg:-translate-y-16">
        <div className="relative inline-block w-full mb-8 text-6xl font-normal leading-none text-center uppercase md:whitespace-no-wrap md:text-12vw lg:text-mega xl:text-mighty font-ant lg:mb-0">
          <div className="text-eg-black" style={strokeText}>
            <motion.p
              animate={{ scale: [1, 1.1, 1], opacity: [0, 1] }}
              transition={{ delay: 0.1 }}
            >
              Emily Gabriele
            </motion.p>
          </div>
          <div
            className="absolute inset-x-0 hidden w-full text-transparent transform -translate-y-6 top-100 lg:block"
            style={strokeText}
          >
            <span className="relative block h-8 overflow-hidden text-center lg:h-24">
              <motion.p
                animate={{ scale: [1, 1.1, 1], opacity: [0, 1, 0.5] }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0"
              >
                Emily Gabriele
              </motion.p>
            </span>
          </div>
          <div
            className="absolute inset-x-0 hidden w-full text-transparent transform translate-y-full top-70 lg:block"
            style={strokeText}
          >
            <span className="relative block h-12 overflow-hidden text-center lg:h-24">
              <motion.p
                animate={{ scale: [1, 1.1, 1], opacity: [0, 1, 0.25] }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0"
              >
                Emily Gabriele
              </motion.p>
            </span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-center transform translate-y-full lg:translate-y-8 lg:flex-row lg:justify-end lg:right-0 lg:translate-x-16 xl:translate-y-4">
          {/* <motion.button
            animate={{ scale: [1, 1.1, 1] }}
            className="mb-2 lg:mb-0 lg:mr-4 button primary"
          >
            Sign up for updates
            <FontAwesomeIcon className="ml-4" icon={faLongArrowAltRight} />
          </motion.button> */}
          <motion.button
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ delay: 0.15 }}
            className="button primary"
            onClick={() => {
              gotoLink("listen");
            }}
          >
            Listen
            <FontAwesomeIcon className="ml-4" icon={faLongArrowAltRight} />
          </motion.button>
        </div>
      </div>
      <div className="absolute right-0 z-10 flex-row items-center hidden mr-8 font-bold text-white uppercase transform -rotate-90 translate-x-1/2 translate-y-1/2 lg:flex top-1/2 font-mont">
        <span className="text-xl font-normal text-white uppercase font-ant">
          Follow
        </span>
        <div className="block w-16 mx-4 bg-white h-2px"></div>
        <a
          href="https://www.facebook.com/EGmusicNYC/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <FontAwesomeIcon
            className="transition duration-300 transform rotate-90 hover:text-eg-blue"
            size="lg"
            icon={faFacebookF}
          />
        </a>
        <a
          href="https://www.instagram.com/egmusicnyc/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <FontAwesomeIcon
            className="transition duration-300 transform rotate-90 hover:text-eg-blue"
            size="lg"
            icon={faInstagram}
          />
        </a>
      </div>
    </section>
  );
}
