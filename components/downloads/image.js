import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function DLImage({ src, alt, span }) {
  const cls = `relative transition duration-300 transform hover:scale-105 ${span}`;

  return (
    <a className={cls} href={src} download>
      <img className="object-cover w-full h-full" src={src} alt={alt} />
      <FontAwesomeIcon
        className="absolute bottom-0 right-0 mb-4 mr-4 text-white"
        size="lg"
        icon={faDownload}
      />
    </a>
  );
}
