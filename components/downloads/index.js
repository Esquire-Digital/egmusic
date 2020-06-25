import DLImage from "./image";

export default function Downloads() {
  return (
    <section className="relative grid max-w-6xl grid-cols-1 gap-4 p-4 mx-auto lg:gap-8 lg:p-8 lg:grid-cols-8">
      <DLImage
        span="lg:col-span-2"
        image="1"
        src="/images/dl-1.png?lqip?webp"
        alt=""
      />
      <DLImage
        span="lg:col-span-6"
        image="2"
        src="/images/dl-2.png?lqip?webp"
        alt=""
      />
      <DLImage
        span="lg:col-span-3"
        image="3"
        src="/images/dl-3.png?lqip?webp"
        alt=""
      />
      <DLImage
        span="lg:col-span-5"
        image="4"
        src="/images/dl-4.png?lqip?webp"
        alt=""
      />
      <DLImage
        span="lg:col-span-8"
        image="5"
        src="/images/dl-5.png?lqip?webp"
        alt=""
      />
    </section>
  );
}
