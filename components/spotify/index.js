import { useMedia } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

export default function Spotify() {
  const isDesktop = useMedia("(min-width: 1024px)", true);
  const style = isDesktop ? { minHeight: "450px" } : { minHeight: "300px" };
  return (
    <>
      <section
        className="relative flex items-center justify-center bg-eg-contact"
        style={style}
        id="listen"
      >
        <img
          loading="lazy"
          className="absolute bottom-0 left-0 w-64 lg:w-80"
          src="/images/spotify.png?webp"
          alt="Spotify logo"
        />
        <a
          className="z-10 button primary"
          href="https://open.spotify.com/artist/3YnfMfDE98v0SCqXsL4ICA?si=Ravp28prSSeWyOhcheV_wg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen on spotify
          <FontAwesomeIcon className="ml-4" icon={faLongArrowAltRight} />
        </a>
      </section>
    </>
  );
}
