import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import AppProvider from '../hooks';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Move - IT</title>
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <GlobalStyles />
    </>
  );
};

export default MyApp;
