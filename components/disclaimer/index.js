export default function Disclaimer() {
  return (
    <>
      <img
        loading="lazy"
        className="w-32 mx-auto my-8"
        src="/images/eg-logo-color.png?webp"
        alt="EG Music Logo in Blue"
      />
      <p className="font-bold text-center text-white font-mont">
        &copy; {new Date().getFullYear()} Emily Gabriele. All Rights Reserved.{" "}
        <span>Disclaimer</span>
      </p>
    </>
  );
}
