import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { useMedia } from "react-use";

export default function BigBio() {
  const isDesktop = useMedia("(min-width: 1280px)", true);

  return (
    <>
      <section className="relative z-10 flex flex-col items-start pt-32 lg:pt-48 lg:flex-row">
        <h1 className="mx-auto text-6xl text-center uppercase lg:absolute lg:inset-x-0 lg:top-0 lg:z-10 font-ant md:text-mega lg:text-mighty xl:text-monster xxl:text-massive text-eg-black">
          EG Music
        </h1>
        <div className="relative flex flex-col p-8 space-y-16 font-bold text-white lg:p-16 lg:w-1/2 font-mont">
          <div className="flex flex-col space-y-4">
            <p className="mb-8 text-4xl uppercase text-eg-blue">Bio</p>
            <p>
              <span className="text-eg-blue">Name:</span> Emily Gabriele
            </p>
            <p>
              <span className="text-eg-blue">Origin:</span> NJ / NYC
            </p>
            <p>
              <span className="text-eg-blue">Genre:</span> Pop/Rock
            </p>
            <p>
              <span className="text-eg-blue">Years Active:</span> 2013 - Present
            </p>
            <p>
              <span className="text-eg-blue">Label:</span> Independent
            </p>
            <p>
              <span className="text-eg-blue">Official Website:</span>{" "}
              egmusicnyc.com
            </p>
          </div>
          <div>
            <p className="mb-8 text-4xl leading-none uppercase text-eg-blue">
              Jersey Soul, NYC Blues.
            </p>
            <p className="mb-4 font-normal leading-loose">
              Emily Gabriele, commonly known as, "EG" is an NYC-based
              singer/songwriter. Her music is pop infused with a bit of rock.
            </p>
            <p className="font-normal leading-loose">
              She performs live all around New York City's vibrant music scene
              and steadily writes songs that tap into multiple genres, but have
              a home rooted in the pop genre.
            </p>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-full"
            src="/images/bio-1.png?webp?"
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center space-y-4 transform -translate-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row lg:translate-y-1/2">
            <a className="button primary">
              Download Full Bio
              {isDesktop ? (
                <FontAwesomeIcon className="ml-4" icon={faLongArrowAltRight} />
              ) : (
                <></>
              )}
            </a>
            <a className="button primary">
              Download Logo
              {isDesktop ? (
                <FontAwesomeIcon className="ml-4" icon={faLongArrowAltRight} />
              ) : (
                <></>
              )}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
