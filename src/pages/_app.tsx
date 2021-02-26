import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../styles/global';
import { ChallengeProvider } from '../hooks/Challenge';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Move - IT</title>
      </Head>
      <ChallengeProvider>
        <Component {...pageProps} />
      </ChallengeProvider>
      <GlobalStyles />
    </>
  );
};

export default MyApp;
