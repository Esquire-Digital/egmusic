import { lazy, Suspense } from "react";
import Header from "../components/header";
import FrontHero from "../components/front-hero";
const Bio = lazy(() => import("../components/bio"));
const Grid = lazy(() => import("../components/grid"));
const Spotify = lazy(() => import("../components/spotify"));
const FeaturedVideos = lazy(() => import("../components/featured-videos"));
const UpcomingShows = lazy(() => import("../components/upcoming-shows"));
const Footer = lazy(() => import("../components/footer"));
const BackToTop = lazy(() => import("../components/back-to-top"));

import { getShows } from "../utils/get-shows";

const renderLoader = () => <div className="loader"></div>;

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
      <Suspense fallback={renderLoader()}>
        <Bio />
        <Grid />
        <Spotify />
        <FeaturedVideos />
        <UpcomingShows shows={shows} />
        <Footer />
        <BackToTop />
      </Suspense>
    </>
  );
}
