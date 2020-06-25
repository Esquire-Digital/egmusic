import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Disclaimer() {
  return (
    <>
      <LazyLoadImage
        className="w-32 mx-auto my-8"
        src={require("../../public/images/eg-logo-color.png")}
        alt="EG Music Logo in Blue"
      />
      {/* <img
        className="w-32 mx-auto my-8"
        src={require("../../public/images/eg-logo-color.png")}
        alt="EG Music Logo in Blue"
      /> */}
      <p className="font-bold text-center text-white font-mont">
        &copy; {new Date().getFullYear()} Emily Gabriele. All Rights Reserved.{" "}
        <span>Disclaimer</span>
      </p>
    </>
  );
}
