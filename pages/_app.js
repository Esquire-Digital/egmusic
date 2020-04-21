import "../styles.css";
import { CloudinaryContext } from "cloudinary-react";

function App({ Component, pageProps }) {
  return (
    <CloudinaryContext cloudName="rkanson">
      <Component {...pageProps} />
    </CloudinaryContext>
  );
}

export default App;
