import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Bio() {
  return (
    <section className="flex flex-col mx-auto md:flex-row" id="learn">
      <div className="md:w-1/2">
        <LazyLoadImage
          className="object-cover object-center w-full h-full"
          src={require("../../public/images/profile-photo.png?lqip?webp")}
          alt="Emily standing on the street, holding a guitar with one hand"
        />
        {/* <img
          className="object-cover object-center w-full h-full"
          src={require("../../public/images/profile-photo.png?lqip?webp")}
          alt="Emily standing on the street, holding a guitar with one hand"
        /> */}
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:px-24 md:w-1/2">
        <p className="mb-12 text-4xl font-bold leading-none lg:whitespace-no-wrap font-mont text-eg-blue">
          Jersey Soul. NYC Blues.
        </p>
        <p className="mb-6 leading-loose">
          Emily Gabriele, commonly known as “EG”, is a singer/songwriter hailing
          from central New Jersey – if you believe there is a central Jersey. As
          a teenager, she taught herself the guitar. Drawing from influences
          like The Beatles, Bill Withers, Fleetwood Mac & John Mayer, her music
          is infused with blues roots and a soulful feel.{" "}
        </p>
        <p className="mb-6 leading-loose">
          EG currently resides in New York City and frequents Los Angeles &
          Nashville. With travel as a constant in her life, inspiration runs
          rampant. She released her first project, the "EG EP", in Spring of
          2013. Since then she’s been steadily writing songs that stylistically
          tap into multiple genres.
        </p>
        <p className="mb-6 leading-loose">
          Her most recent project, "Special Delivery", has a tracklist comprised
          of 8, personal & catchy tracks. EG recorded the project in a small
          studio in East Williamsburg, Brooklyn with producer & musician,
          Matthew Basile. Working closely alongside Basile & fellow
          singer/songwriter Gregg Allen, the project is a compilation of
          heartfelt earworms.
        </p>
      </div>
    </section>
  );
}
