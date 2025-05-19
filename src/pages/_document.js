import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" dir="rtl" className="">
      <Head>
        {/* اضافه کردن لینک Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-KyZXEAg3QhqLMpG8r+Knujsl5+zPz4S9d0iZwXpN1eO2WlH6EK9m8PUfl5XoNvU7jQF2ayOk+YbQvGqeqN8tJw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body className="bg-[var(--colBg)]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
