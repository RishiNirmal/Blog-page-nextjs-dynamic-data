
import React from "react";
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavItem from './NavItem'
import Footer from './Footer'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <NavItem/>
      <Component {...pageProps} />
      <Footer/>
    </React.Fragment>
  );
}

export default MyApp;