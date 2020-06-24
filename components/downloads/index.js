import DLImage from "./image";

export default function Downloads() {
  return (
    <section className="relative grid max-w-6xl grid-cols-1 gap-4 p-4 mx-auto lg:gap-8 lg:p-8 lg:grid-cols-8">
      <DLImage span="lg:col-span-2" src="/images/dl-1.png?webp" alt="" />
      <DLImage span="lg:col-span-6" src="/images/dl-2.png?webp" alt="" />
      <DLImage span="lg:col-span-3" src="/images/dl-3.png?webp" alt="" />
      <DLImage span="lg:col-span-5" src="/images/dl-4.png?webp" alt="" />
      <DLImage span="lg:col-span-8" src="/images/dl-5.png?webp" alt="" />
    </section>
  );
}
