import Head from 'next/head';
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';
import Layout from '../util/layout';

export default class Home extends Component {
	render() {

		return (<div style={{
			background: 'url(/img/bg.jpg)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			width: '100vw',
			height: '100vh',
		}}>
			<Head>
				<title>Laguna</title>
			</Head>

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
}
