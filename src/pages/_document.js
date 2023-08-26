import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          {/* Add your chatbot script here */}
          <Script id="__webwhizSdk__" chatbotId="64e9116b36efb9b9f5c7c283"
src="https://widget.webwhiz.ai/webwhiz-sdk.js"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
