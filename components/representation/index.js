import Disclaimer from "../disclaimer";
import { attributes } from '../../content/epk-rep.md'

export default function Representation() {
  let { label, email, phone } = attributes
  return (
    <>
      <footer className="relative px-6 pt-24 pb-4 text-center bg-eg-contact lg:px-24 lg:pb-4">
        <p className="text-2xl font-bold uppercase text-eg-blue font-mont ">
          Representation
        </p>
        <p className="mb-16 font-bold leading-relaxed text-white font-mont">
          Label & Management:
          {label} | {email}, {phone}
        </p>
        <Disclaimer />
      </footer>
    </>
  );
}
