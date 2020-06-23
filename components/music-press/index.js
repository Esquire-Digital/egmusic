import Press from "./press";

export default function MusicPress() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex flex-col items-center p-12 lg:p-24 lg:w-1/2 bg-eg-black lg:items-start">
        <p className="text-2xl font-bold text-white uppercase font-mont">
          Music
        </p>
        <iframe
          src="https://open.spotify.com/embed/album/5Ppj3blRPtgQYChP6JxDBw"
          width="300"
          height="330"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          className="mt-8"
        ></iframe>
      </div>
      <div className="flex flex-col items-center p-12 lg:p-24 lg:w-1/2 lg:items-start">
        <p className="text-2xl font-bold uppercase font-mont text-eg-blue">
          Press
        </p>
        <ul className="flex flex-col my-8 space-y-4">
          <Press text="Interview With Vents Magazine" link="" />
          <Press text="“Monday” Exclusive With Buzz Music" link="" />
        </ul>
      </div>
    </section>
  );
}
