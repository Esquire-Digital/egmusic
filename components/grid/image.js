import { LazyLoadImage } from "react-lazy-load-image-component";

export default function GridImage({ image, alt }) {
  return (
    <a
      href="https://www.instagram.com/egmusicnyc/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative transition duration-300 transform hover:scale-105"
    >
      <div className="absolute inset-0 w-full h-full transition duration-300 opacity-0 bg-eg-blue hover:opacity-25"></div>
      <LazyLoadImage
        className="object-cover object-center w-full h-full"
        src={require(`../../public/images/grid-${image}.png?lqip?webp`)}
        alt={alt}
        width="425px"
        height="425px"
      />
      {/* <img
        className="object-cover object-center w-full h-full"
        src={require(`../../public/images/grid-${image}.png?lqip?webp`)}
        alt={alt}
        width="425px"
        height="425px"
      /> */}
    </a>
  );
}
