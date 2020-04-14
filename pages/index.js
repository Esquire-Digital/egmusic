import { useEffect } from "react";

import Header from "../components/header";
import FrontHero from "../components/front-hero";
import Bio from "../components/bio";
import Grid from "../components/grid";

import Spotify from "../components/spotify";
import FeaturedVideos from "../components/featured-videos";
import Shows from "../components/shows";

import Footer from "../components/footer";

export default function Home() {
  useEffect(() => {
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
      <Shows />
      <Footer />
    </>
  );
}
