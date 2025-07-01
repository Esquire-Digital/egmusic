import { LiaLongArrowAltRightSolid } from "react-icons/lia";
export default function Press({ text, link }) {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="norefferer noopener"
        className="flex flex-col items-start space-y-2 text-white transition duration-300 md:space-x-4 md:space-y-0 md:flex-row md:items-center hover:text-eg-blue"
      >
        <p>{text}</p>
        <span className="flex items-center space-x-2 font-bold uppercase font-ant">
          <p className="tracking-widest">Read</p>
          <LiaLongArrowAltRightSolid />
        </span>
      </a>
    </li>
  );
}
