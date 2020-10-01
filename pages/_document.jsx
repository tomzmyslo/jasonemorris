import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="fb-root" />
          <script>
            window.fbAsyncInit = function() 
            {' '}
            {
              // eslint-disable-next-line no-undef
              FB.init({
                appId: '767113464151084',
                autoLogAppEvents : true,
                xfbml: true,
                version: 'v8.0'
              })
            }
            ;
          </script>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0"
            nonce="jTvBIFTO"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;