import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initalProps = await Document.getInitialProps(ctx)

    return initalProps
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300&display=swap'
            rel='stylesheet'
          />
          <script
            src='https://kit.fontawesome.com/50b2cf911e.js'
            crossOrigin='anonymous'
            async
          ></script>
          <link rel='shortcut icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <footer></footer>
      </Html>
    )
  }
}

export default MyDocument
