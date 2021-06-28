import '../styles/globals.css';
import Layout from "../src/components/Layout";
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import Auth from '../src/components/Auth';

const fetcher = (input: RequestInfo, init: RequestInit) => fetch(input, init).then(res => res.json());

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{fetcher: fetcher}}>
      <Layout>
        {Component.auth ? (
            <Auth><Component {...pageProps} /></Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SWRConfig>
  );
}

export default App;
