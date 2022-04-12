import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

					<link rel="preload" href="/fonts/OBMPlexSans-Bold.woff2" as="font" />
					<link rel="preload" href="/fonts/OBMPlexSans-Regular.woff2" as="font" />
					<link rel="preload" href="/fonts/Inter-Bold.woff2" as="font" />
					<link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}