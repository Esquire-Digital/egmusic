import "../styles.css";
import { useEffect, useState } from 'react'
import netlifyAuth from '../utils/netlifyAuth'

function App({ Component, pageProps }) {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

  useEffect(() => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user)
    })
  }, [loggedIn])

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
