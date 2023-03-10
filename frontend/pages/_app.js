import "../styles/globals.css";
import "antd/dist/reset.css";
import "highlight.js/styles/github.css";

import NextNProgress from 'nextjs-progressbar';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
