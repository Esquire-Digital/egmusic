import Header from "../components/header";
import FrontHero from "../components/front-hero";
import Bio from "../components/bio";
import Grid from "../components/grid";
import Spotify from "../components/spotify";
import FeaturedVideos from "../components/featured-videos";
import UpcomingShows from "../components/upcoming-shows";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";

import { getShows } from "../utils/get-shows";

export async function getStaticProps() {
  const shows = await getShows();

  return {
    props: {
      shows,
    },
  };
}

export default function Home({ shows }) {
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
