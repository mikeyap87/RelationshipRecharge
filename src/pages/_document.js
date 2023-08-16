import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          {/* Add your chatbot script here */}
          <script
            id="retune.so/chat"
            src="https://retune.so/api/script/chat.js?id=11ee3bc5-3290-ca90-b060-27e1e8063720"
            defer
          ></script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
