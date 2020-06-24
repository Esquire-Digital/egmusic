import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

export default function Press({ text, link }) {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="norefferer noopener"
        className="flex space-x-4 text-white transition duration-300 hover:text-eg-blue"
      >
        <p>{text}</p>
        <span className="flex items-center space-x-2 font-bold uppercase font-ant">
          <p>Read</p>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </span>
      </a>
    </li>
  );
}
