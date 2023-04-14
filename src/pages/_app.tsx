import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import '@splidejs/react-splide/css';
import '../styles/globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const attachScripts = () => {

      const gtmScript = document.getElementById('gtm');
      const gaScript = document.getElementById('ga');
      const fbScript = document.getElementById('fb');
      const gtm2Script = document.createElement('script');
      gtm2Script.src = '';
      gtm2Script.async = true;

      gtmScript.innerHTML = ` `;

      gaScript.innerHTML = ``;

      fbScript.innerHTML = ` `;

      document.head.appendChild(gtmScript);
      document.head.appendChild(gaScript);
      document.head.appendChild(fbScript);
      document.head.appendChild(gtm2Script);
    };

    setTimeout((function () {
      var vidDefer = document.getElementsByTagName('iframe');
      for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
          vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
      }
    }), 3000)

    setTimeout(attachScripts, 20000)
  }, [])

  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
};
