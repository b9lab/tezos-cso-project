import '../styles/globals.css';
import Layout from "../src/components/Layout";
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import Auth from '../src/components/Auth';

const fetcher = (input: RequestInfo, init: RequestInit) => fetch(input, init).then(res => res.json());

function App(props: AppProps) {
  const Component: any = props.Component;
  const pageProps = props.pageProps;

  return (
    <SWRConfig value={{fetcher: fetcher}}>
      <Layout>
        {Component.auth ? (
            <Auth callbackUrl={Component.auth.callbackUrl}><Component {...pageProps} /></Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </SWRConfig>
  );
}

export default App;
