import { useEffectOnce } from "react-use";
import fetch from "node-fetch";

import Header from "../components/header";
import FrontHero from "../components/front-hero";
import Bio from "../components/bio";
import Grid from "../components/grid";
import Spotify from "../components/spotify";
import FeaturedVideos from "../components/featured-videos";
import UpcomingShows from "../components/upcoming-shows";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";

export async function getStaticProps() {
  const url =
    "https://rest.bandsintown.com/artists/Emily%20Gabriele/events?app_id=js_www.artists.bandsintown.com&date=past";
  const res = await fetch(url);
  let shows = await res.json();
  shows = shows.slice(0, 9);

  return {
    props: {
      shows,
    },
  };
}

export default function Home({ shows }) {
  useEffectOnce(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });

  return (
    <>
      <Header />
      <FrontHero />
      <Bio />
      <Grid />
      <Spotify />
      <FeaturedVideos />
      <UpcomingShows shows={shows} />
      <Footer />
      <BackToTop />
    </>
  );
}
