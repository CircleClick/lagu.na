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
		<picture className='inset-0 absolute w-full h-full'>
			<source src="img/bg.avif" type="image/avif" />
			<source src="img/bg.webp" type="image/webp" />
			<img src="/img/bg.jpg" alt="Laguna" className='inset-0 absolute w-full h-full object-cover' />
		</picture>
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