import Document, { Html, Head, Main, NextScript } from "next/document"

export default class TOSDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            data-goatcounter="https://olympics.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
