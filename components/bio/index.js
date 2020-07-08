import { LazyLoadImage } from "react-lazy-load-image-component";
import { attributes, react as BioContent } from '../../content/bio.md';


export default function Bio() {
  let { title } = attributes;

  return (
    <section className="flex flex-col mx-auto md:flex-row" id="learn">
      <div className="md:w-1/2">
        <LazyLoadImage
          className="object-cover object-center w-full h-full"
          src={require("../../public/images/profile-photo.png")}
          alt="Emily standing on the street, holding a guitar with one hand"
        />
        {/* <img
          className="object-cover object-center w-full h-full"
          src={require("../../public/images/profile-photo.png")}
          alt="Emily standing on the street, holding a guitar with one hand"
        /> */}
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:px-24 md:w-1/2">
        <p className="mb-12 text-4xl font-bold leading-none lg:whitespace-no-wrap font-mont text-eg-blue">
          {title}
        </p>
        <BioContent className="flex flex-col space-y-6 leading-loose" />
      </div>
    </section>
  );
}
