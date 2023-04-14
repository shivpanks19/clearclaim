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
					<meta name="theme-color" content="#fff" />
					<script id='gtm'></script>
					<script id='ga'></script>
					<script id='fb'></script>
					<meta name="color-scheme" content="light only" />
					<link rel="icon" type="image/x-icon" href="/DE.ico" />
					<script async type="module" src="https://cdn.jsdelivr.net/npm/@slightlyoff/lite-vimeo@0.1.1/lite-vimeo.js"></script>
				</Head>
				<body>
					<noscript><iframe src=""
						height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
					<noscript><img height="1" width="1" style={{ display: 'none' }}
						src=""
					/></noscript>
					<Main />
					<NextScript />
				</body>
			</Html >
		)
	}
}
