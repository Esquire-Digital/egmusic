import DLImage from "./image";
import { attributes } from "../../content/epk-gallery.md";

export default function Downloads() {
  let { images } = attributes;
  return (
    <section className="relative grid max-w-6xl grid-cols-1 gap-4 p-4 mx-auto lg:gap-8 lg:p-8 lg:grid-cols-8">
      <DLImage span="lg:col-span-2" src={images[0].image} alt={images[0].alt} />
      <DLImage span="lg:col-span-6" src={images[1].image} alt={images[1].alt} />
      <DLImage span="lg:col-span-3" src={images[2].image} alt={images[2].alt} />
      <DLImage span="lg:col-span-5" src={images[3].image} alt={images[3].alt} />
      {/* <DLImage span="lg:col-span-8" src={images[4].image} alt={images[4].alt} /> */}
    </section>
  );
}
