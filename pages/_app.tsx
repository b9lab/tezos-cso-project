import '../styles/globals.css';
import '../public/tooltip/tooltip.css';
import Layout from "../src/components/Layout";
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import Auth from '../src/components/Auth';
import { useGlossarizer } from '../src/utils/hooks';

const fetcher = (input: RequestInfo, init: RequestInit) => fetch(input, init).then(res => res.json()).catch(console.error);

/**
 * Main application
 */
export default function App(props: AppProps) {
  const Component: any = props.Component;
  const pageProps = props.pageProps;

  useGlossarizer(Component);

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
