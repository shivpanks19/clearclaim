import Document, { Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		// Returns an object like: { html, head, errorHtml, chunks, styles }
		return renderPage()
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
					<meta name="theme-color" content="#fff" />
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-BVKQYJ6KFL"></script>
					<script async src="https://player.vimeo.com/api/player.js"></script>
					<script id='gtm'></script>
					<script id='ga'></script>
					<script id='fb'></script>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
				</Head>
				<body>
					<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7SB2Z3"
						height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
					<noscript><img height="1" width="1" style={{ display: 'none' }}
						src="https://www.facebook.com/tr?id=889335038854708&ev=PageView&noscript=1"
					/></noscript>
					<Main />
					<NextScript />
				</body>
			</Html >
		)
	}
}
