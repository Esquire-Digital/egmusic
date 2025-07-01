import { FaDownload } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function DLImage({ src, alt, span }) {
  const cls = `relative transition duration-300 transform hover:scale-105 ${span}`;

  return (
    <a className={cls} href={src} download>
      <LazyLoadImage
        className="object-cover w-full h-full"
        src={src}
        alt={alt}
      />
      {/* <img
        className="object-cover w-full h-full"
        src={require(`../../public/media/dl-${image}.png`)}
        alt={alt}
      /> */}
      <FaDownload className="absolute bottom-0 right-0 mb-4 mr-4 text-lg text-white" />
    </a>
  );
}
