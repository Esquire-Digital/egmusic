import { LazyLoadImage } from "react-lazy-load-image-component";
import { attributes } from '../../content/settings.md';

export default function Disclaimer() {
  let { altLogo } = attributes;
  return (
    <>
      <LazyLoadImage
        className="w-32 mx-auto my-8"
        src={altLogo}
        alt="EG Music Logo in Blue"
      />
      {/* <img
        className="w-32 mx-auto my-8"
        src={require("../../public/images/eg-logo-color.png")}
        alt="EG Music Logo in Blue"
      /> */}
      <p className="font-bold text-center text-white font-mont">
        &copy; {new Date().getFullYear()} Emily Gabriele. All Rights Reserved.{" "}
      </p>
    </>
  );
}
