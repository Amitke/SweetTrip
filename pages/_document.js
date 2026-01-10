import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#05b9f8" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6307976325261729"
          crossorigin="anonymous"
        ></script>
        <link rel="canonical" href="https://sweettrip.in/" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="All" />
        <meta
          property="copyright"
          content="Sweet Trip - Car Rental Company in Varanasi"
        />
        <meta name="HandheldFriendly" content="True" />
        <meta name="author" content="Sweet Trip" />
        <meta name="revisit-after" content="2 days" />
        <meta name="language" content="english" />
        <meta name="rating" content="general" />
        <meta
          name="subject"
          content="We are leading Varanasi based taxi service provider offering Car rental service"
        />
        <meta
          name="google-site-verification"
          content="FDKqEKp2CppkBU0EDKFMvUJbbHgrJbyJvMhZjTqUoJQ"
        />
        <meta name="msvalidate.01" content="3ED006E87B98DA15AA62830ACD3B3B9B" />
        <meta
          name="p:domain_verify"
          content="7efc8ff84af6f2f73eceedc98b45c388"
        />
        <meta
          name="ahrefs-site-verification"
          content="05a65cb2bf7ed15cba85503ee7516e94b0ab7f9e55ca2817205b33f7b5bc607e"
        />
        <meta charset="utf-8" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sweet Trip - Car Rental Company in Varanasi"
        />
        <meta
          property="og:image"
          content="https://sweettrip.in/images/logo.svg"
        />
        <meta
          property="og:description"
          content="Sweet trip is the best car rental company in Varanasi. We offer affordable, Luxury, reliable car rental services, cab booking & taxi rental services in Varanasi"
        />
        <meta property="og:url" content="https://sweettrip.in" />
        <meta property="og:image:alt" content="Best Car rental in Varanasi" />
        <meta property="og:site_name" content="sweet trip" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@_sweettrip" />
        <meta
          name="twitter:title"
          content="Sweet Trip - Car Rental Company in Varanasi"
        />
        <meta
          name="twitter:description"
          content="Sweet trip is the best car rental company in Varanasi. We offer affordable, Luxury, reliable car rental services, cab booking & taxi rental services in Varanasi"
        />
        <meta
          name="twitter:image"
          content="https://sweettrip.in/images/logo.svg"
        />

        <link rel="shortcut icon" href="./../images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        ></link>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','UA-254967999-1');
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11187529762"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11187529762');
            `,
          }}
        />        
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1943173719744313');
fbq('track', 'PageView');
          `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1943173719744313&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
