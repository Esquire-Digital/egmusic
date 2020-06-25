import GridImage from "./image";

export default function Grid() {
  return (
    <section
      className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      id="follow"
      style={{ minHeight: "650px " }}
    >
      <GridImage image="1" alt="" />
      <GridImage image="2" alt="" />
      <GridImage image="3" alt="" />
      <GridImage image="4" alt="" />
      <GridImage image="5" alt="" />
      <GridImage image="6" alt="" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-2xl font-bold text-center text-white transform pointer-events-none -translate-y-3px font-mont">
        <a
          href="https://www.instagram.com/egmusicnyc/"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto"
        >
          @egmusicnyc
        </a>
      </div>
      <p
        className="absolute inset-x-0 bottom-0 z-10 text-6xl font-normal leading-none text-center text-transparent uppercase transform translate-y-4 opacity-25 pointer-events-none md:text-mighty md:translate-y-24 lg:text-massive font-ant"
        style={{
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#424b54",
        }}
      >
        follow
      </p>
    </section>
  );
}
