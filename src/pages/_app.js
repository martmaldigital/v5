import App from "next/app";
import Script from "next/script";
// import Router from 'next/router';
// import { initGA, logPageView } from '../analytics/index';



import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../core/store";
import { createWrapper } from "next-redux-wrapper";

import Footer from "components/footer";

import "../styles/styles.scss";
import "antd/dist/antd.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be access by the client
    return { pageProps: pageProps };
  }

  // componentDidMount() {
  //   initGA();
  //   logPageView();
  //   Router.events.on('routeChangeComplete', logPageView);
  // }

  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
          <Script id="tawk" strategy="lazyOnload">
        {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src = 'https://embed.tawk.to/5eae517f203e206707f90b64/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
        `}
      </Script>
          <Footer />
        </PersistGate>
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);
