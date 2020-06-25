import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function DLImage({ src, alt, span, image }) {
  const cls = `relative transition duration-300 transform hover:scale-105 ${span}`;

  return (
    <a className={cls} href={src} download>
      <LazyLoadImage
        className="object-cover w-full h-full"
        src={require(`../../public/images/dl-${image}.png`)}
        alt={alt}
      />
      {/* <img
        className="object-cover w-full h-full"
        src={require(`../../public/images/dl-${image}.png`)}
        alt={alt}
      /> */}
      <FontAwesomeIcon
        className="absolute bottom-0 right-0 mb-4 mr-4 text-white"
        size="lg"
        icon={faDownload}
      />
    </a>
  );
}
