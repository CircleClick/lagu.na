import Head from 'next/head';
import { css } from '@emotion/react';

/*
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../util/layout';*/

export default function Home() {
	return (<div style={{
		width: '100vw',
		height: '100vh',
	}}>
		<Head>
			<title>Laguna</title>
			<meta property="og:image" content="/img/bg.jpg" />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:image' content='/img/bg.jpg' />
		</Head>
		<video autoPlay muted css={css`
			width: 100%;
			height: 100%;
			object-fit: cover;
			@media (max-aspect-ratio: 1/1) {
				object-fit: contain;
				background-color: #EDEDED;
			}
		`}>
			<source src="/img/laguna.webm" type="video/webm" />
			<source src="/img/laguna.mp4" type="video/mp4" />
		</video>
	</div>)

	/*
	let { title, cats } = attributes;
	return (
		<Layout>
			<h1>{title}</h1>
			<HomeContent />
			<ul>
				{cats ? cats.map((cat, k) => (
					<li key={k}>
						<h2>{cat.name}</h2>
						<p>{cat.description}</p>
					</li>
				)) : null}
			</ul>
		</Layout>
	)*/
}