import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import { useMedia } from "react-use";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { attributes, react as EpkBioContent } from "../../content/epk-bio.md";

export default function BigBio() {
  let {
    name,
    origin,
    genre,
    years,
    label,
    officialWebsite,
    blurbTitle,
    bioImg,
    bioImgAlt,
    fullBio,
    logo,
  } = attributes;
  const isDesktop = useMedia("(min-width: 1280px)", true);

  return (
    <>
      <section className="relative z-10 flex flex-col items-start pt-32 lg:pt-48 lg:flex-row bg-eg-epk-1">
        <h1 className="mx-auto text-5xl leading-none text-center uppercase lg:absolute lg:inset-x-0 lg:top-0 lg:z-10 font-ant md:text-mega lg:text-mighty xl:text-monster text-eg-black lg:leading-relaxed">
          Emily Gabriele
        </h1>
        <div className="relative flex flex-col p-8 space-y-16 font-bold text-white lg:p-16 lg:w-1/2 font-mont">
          <div className="flex flex-col space-y-4">
            <p className="mb-8 text-4xl uppercase text-eg-blue">Bio</p>
            <p>
              <span className="text-eg-blue">Name:</span> {name}
            </p>
            <p>
              <span className="text-eg-blue">Origin:</span> {origin}
            </p>
            <p>
              <span className="text-eg-blue">Genre:</span> {genre}
            </p>
            <p>
              <span className="text-eg-blue">Years Active:</span> {years}
            </p>
            <p>
              <span className="text-eg-blue">Label:</span> {label}
            </p>
            <p>
              <span className="text-eg-blue">Official Website:</span>{" "}
              {officialWebsite}
            </p>
          </div>
          <div>
            <p className="mb-8 text-4xl leading-none uppercase text-eg-blue">
              {blurbTitle}
            </p>
            <style global jsx>
              {`
                .frontmatter-markdown {
                  font-weight: normal;
                  line-height: 2;
                }

                .frontmatter-markdown p {
                  margin-bottom: 1rem;
                }

                .frontmatter-markdown p:last-of-type {
                  margin-bottom: 0;
                }
              `}
            </style>
            <EpkBioContent />
          </div>
        </div>
        <div className="relative lg:w-1/2 ">
          <LazyLoadImage
            className="object-cover w-full h-full"
            src={bioImg}
            alt={bioImgAlt}
          />
          {/* <img
            className="object-cover w-full h-full"
            src={require("../../public/media/bio-1.png")}
            alt=""
          /> */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center space-y-4 transform -translate-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row lg:translate-y-1/2">
            <a className="button primary" download href={fullBio}>
              Download Full Bio
              {isDesktop ? (
                <LiaLongArrowAltRightSolid className="ml-4" />
              ) : (
                <></>
              )}
            </a>
            <a className="button primary" download href={logo}>
              Download Logo
              {isDesktop ? (
                <LiaLongArrowAltRightSolid className="ml-4" />
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
