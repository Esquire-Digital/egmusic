import Header from "../components/header";
import Downloads from "../components/downloads";
import FeaturedVideos from "../components/featured-videos";
import UpcomingShows from "../components/upcoming-shows";
import Representation from "../components/representation";
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

export default function EPK({ shows }) {
  return (
    <section className="bg-eg-contact">
      <Header />
      <Downloads />
      <UpcomingShows shows={shows} />
      <FeaturedVideos />
      <Representation />
      <BackToTop />
    </section>
  );
}
