import Header from "../components/header";
import Spotify from "../components/spotify";
import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";

export default function Custom404() {
  return (
    <>
      <Header />
      <p>Uh oh... this page doesn't exist!</p>
      <Footer />
      <BackToTop />
    </>
  );
}
