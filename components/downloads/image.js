import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function DLImage({ src, alt, span }) {
  const cls = `relative lg:col-span-${span} transform transition duration-300 hover:scale-105`;

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
