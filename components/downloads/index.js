import DLImage from "./image";

export default function Downloads() {
  return (
    <section className="relative grid max-w-6xl grid-cols-1 gap-8 p-8 mx-auto lg:grid-cols-8">
      <DLImage span="2" src="/images/dl-1.png?webp" alt="" />
      <DLImage span="6" src="/images/dl-2.png?webp" alt="" />
      <DLImage span="3" src="/images/dl-3.png?webp" alt="" />
      <DLImage span="5" src="/images/dl-4.png?webp" alt="" />
      <DLImage span="8" src="/images/dl-5.png?webp" alt="" />
    </section>
  );
}
