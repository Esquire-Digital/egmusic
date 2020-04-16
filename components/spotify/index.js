import { useMedia } from "react-use";

export default function Spotify() {
  const isDesktop = useMedia("(min-width: 1024px)");
  const style = isDesktop ? { minHeight: "450px" } : { minHeight: "300px" };
  return (
    <>
      <section
        className="relative flex items-center justify-center bg-gray-900"
        style={style}
      >
        <img
          className="absolute bottom-0 left-0 w-64"
          src="/images/spotify.png"
          alt="Spotify logo"
        />
        <a
          className="z-10 button primary"
          href="https://open.spotify.com/artist/3YnfMfDE98v0SCqXsL4ICA?si=Ravp28prSSeWyOhcheV_wg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen on spotify
          <img src="/images/arrow-right.png" alt="Arrow right" />
        </a>
      </section>
    </>
  );
}
