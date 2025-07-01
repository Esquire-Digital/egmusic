import GridImage from "./image";
import { attributes } from "../../content/gallery.md";

export default function Grid() {
  let { galleryImages } = attributes;
  const style = {
    minHeight: "650px",
    maxWidth: "100vw",
    overflowX: "hidden",
  };
  return (
    <section
      className="relative grid w-full grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-3"
      id="follow"
      style={style}
    >
      {galleryImages.slice(0, 6).map((img, k) => (
        <GridImage key={k} image={img.image} alt={img.alt} />
      ))}
      {/* <GridImage image="1" alt="" />
      <GridImage image="2" alt="" />
      <GridImage image="3" alt="" />
      <GridImage image="4" alt="" />
      <GridImage image="5" alt="" />
      <GridImage image="6" alt="" /> */}
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
        className="absolute z-10 my-auto left-0 right-0 flex items-center justify-center  top-0 bottom-0  text-6xl font-normal leading-none text-center text-transparent uppercase pointer-events-none opacity-100 w-[40rem]  md:text-mighty lg:text-massive font-ant"
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
