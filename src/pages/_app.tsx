import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Move - IT</title>
      </Head>

      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
};

export default MyApp;
