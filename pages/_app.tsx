import "../styles/index.css";
import Head from 'next/head';

export default function MyApp({Component, pageProps}){
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Contactame para desarrollar tus necesidades</title>
        <meta key="description" name="description" content="Contactame!" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}