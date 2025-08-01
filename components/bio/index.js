import { LazyLoadImage } from "react-lazy-load-image-component";
import { attributes, react as BioContent } from "../../content/bio.md";

export default function Bio() {
  let { title, bioImg, bioImgAlt } = attributes;

  return (
    <section className="flex flex-col mx-auto md:flex-row" id="learn">
      <div className="md:w-1/2">
        <LazyLoadImage
          className="object-cover object-center w-full h-full"
          src={bioImg}
          alt={bioImgAlt}
        />
        {/* <img
          className="object-cover object-center w-full h-full"
          src={require("../../public/media/profile-photo.png")}
          alt="Emily standing on the street, holding a guitar with one hand"
        /> */}
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:px-24 md:w-1/2">
        <p className="mb-12 text-4xl font-bold leading-none font-mont text-eg-blue">
          {title}
        </p>
        <style global jsx>{`
          .frontmatter-markdown {
            line-height: 2;
          }

          .frontmatter-markdown p {
            margin-bottom: 1.5rem;
          }

          .frontmatter-markdown p:last-of-type {
            margin-bottom: 0;
          }
          h1 {
            line-height: 2.2rem;
            margin-bottom: 1rem;
          }
          h2 {
            font-weight: bold;
          }
        `}</style>
        <BioContent />
      </div>
    </section>
  );
}
