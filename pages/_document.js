import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

					<link rel="preload" href="/fonts/IBMPlexSans-Bold.woff2" as="font" />
					<link rel="preload" href="/fonts/IBMPlexSans-Regular.woff2" as="font" />
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