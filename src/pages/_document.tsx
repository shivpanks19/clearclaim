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
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
					<meta name="theme-color" content="#fff" />
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-BVKQYJ6KFL"></script>
					<script id='ga'></script>
					<script id='fb'></script>
					<noscript><img height="1" width="1" style={{ display: 'none' }}
						src="https://www.facebook.com/tr?id=889335038854708&ev=PageView&noscript=1"
					/></noscript>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
					<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html >
		)
	}
}
