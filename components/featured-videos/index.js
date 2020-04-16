export default function FeaturedVideos() {
  return (
    <>
      <section className="grid grid-cols-1 gap-12 px-6 py-8 lg:gap-24 lg:px-24 lg:py-16 lg:grid-cols-2">
        <div className="flex flex-col items-end justify-end">
          <div className="relative">
            <img
              className="relative z-10 object-cover object-center w-full h-full"
              src="/images/thumb-1.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full h-full transform -translate-x-6 translate-y-6 bg-eg-blue"></div>
          </div>
          <button className="z-10 mt-12 mr-6 button primary">watch</button>
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="relative">
            <img
              className="relative z-10 object-cover object-center w-full h-full"
              src="/images/thumb-2.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full h-full transform -translate-x-6 translate-y-6 bg-eg-blue"></div>
          </div>
          <button className="z-10 mt-12 mr-6 button primary">watch</button>
        </div>
      </section>
    </>
  );
}
