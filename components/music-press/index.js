import Press from "./press";
import { attributes } from '../../content/music-press.md';

export default function MusicPress() {
  let { spotifyEmbed, press } = attributes;
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex flex-col items-center p-12 lg:p-24 lg:w-1/2 bg-eg-black lg:items-start">
        <p className="text-2xl font-bold text-white uppercase font-mont">
          Music
        </p>
        <iframe
          src={spotifyEmbed}
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          className="mt-8"
        ></iframe>
      </div>
      <div className="flex flex-col items-center p-12 lg:p-24 lg:w-1/2 lg:items-start bg-eg-epk-2">
        <p className="text-2xl font-bold uppercase font-mont text-eg-blue">
          Press
        </p>
        <ul className="flex flex-col my-8 space-y-4">
          {press.slice(0, 6).map((item, k) => (
            <Press
              key={k}
              text={item.title}
              link={item.url}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
