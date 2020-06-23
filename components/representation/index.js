import Disclaimer from "../disclaimer";

export default function Representation() {
  return (
    <>
      <footer className="relative px-6 pt-24 pb-4 bg-eg-contact lg:px-24 lg:pt-64 lg:pb-4">
        <p
          className="absolute inset-x-0 top-0 z-10 text-6xl font-normal leading-none text-center text-transparent uppercase transform -translate-y-4 opacity-25 pointer-events-none md:text-mighty md:-translate-y-16 lg:text-massive font-ant"
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#424b54",
          }}
        >
          contact
        </p>
        <Disclaimer />
      </footer>
    </>
  );
}
