import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title> جو شاليتس | مزارع وشاليهات للايجار في الاردن</title>
        <meta
          name="description"
          content=" اذا بتدور على مزارع وشاليهات في الاردن او مزارع وشاليهات في عمان او البحر الميت مزارع للايجار في عمان طريق المطار في صيف 2023 لتقدر تسبح وشاليهات ومزارع بسعر رخيص وخصومات دائمة عنا الحل"
        ></meta>
        {/*  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KR0FM5539S"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KR0FM5539S');
          `,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
