import { lazy, Suspense } from "react";
import Header from "../components/header";
import BigBio from "../components/big-bio";
const MusicPress = lazy(() => import("../components/music-press"));
const Downloads = lazy(() => import("../components/downloads"));
const FeaturedVideos = lazy(() => import("../components/featured-videos"));
const UpcomingShows = lazy(() => import("../components/upcoming-shows"));
const Representation = lazy(() => import("../components/representation"));
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

export default function EPK({ shows }) {
  return (
    <section className="bg-eg-epk-1">
      <Header />
      <BigBio />
      <Suspense fallback={renderLoader()}>
        <MusicPress />
        <Downloads />
        <UpcomingShows shows={shows} />
        <FeaturedVideos />
        <Representation />
        <BackToTop />
      </Suspense>
    </section>
  );
}
