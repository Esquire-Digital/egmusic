export default function Grid() {
  return (
    <section
      className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      id="follow"
    >
      <img
        className="object-cover object-center w-full h-full"
        src="/images/grid-1.png?webp"
        alt=""
      />
      <img
        className="object-cover object-center w-full h-full"
        src="/images/grid-2.png?webp"
        alt=""
      />
      <img
        className="object-cover object-center w-full h-full"
        src="/images/grid-3.png?webp"
        alt=""
      />
      <img
        className="object-cover object-center w-full h-full"
        src="/images/grid-4.png?webp"
        alt=""
      />
      <img
        className="object-cover object-center w-full h-full"
        src="/images/grid-5.png?webp"
        alt=""
      />
      <img
        className="object-cover object-center w-full h-full"
        src="/images/grid-6.png?webp"
        alt=""
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center font-bold text-center text-white transform -translate-y-24 lg:translate-y-24 lg:top-1/2 font-mont lg:bottom-auto">
        <p>egmusicnyc</p>
        <div className="flex flex-row items-center">
          <p className="text-xs md:text-base">2.2K Followers</p>
          <span className="mx-2 text-eg-blue">|</span>
          <p className="text-xs md:text-base">2.2K Following</p>
          <span className="mx-2 text-eg-blue">|</span>
          <p className="text-xs md:text-base">231 Posts</p>
        </div>
      </div>
      <p
        className="absolute inset-x-0 bottom-0 z-10 text-6xl font-normal leading-none text-center text-transparent uppercase transform translate-y-4 opacity-25 md:text-mighty md:translate-y-24 lg:text-massive font-ant"
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
