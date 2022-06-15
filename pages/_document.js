import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getGlobalData } from '../utils/global-data';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head>
	    <title>{globalData.name}</title>
	</Head>
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
