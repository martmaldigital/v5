import { useEffect } from 'react';
import { Router } from 'next/router';
import { initGA, logPageView } from 'analytics';

import PatientNav from 'components/nav/patientNav';
import Footer from 'components/footer';

import '../styles/styles.scss';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <PatientNav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
