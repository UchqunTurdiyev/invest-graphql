import Head from 'next/head';
import React from 'react';

export default function SEO({ children, author, metaDescription, metaKeywords, metaTitle, ogImage }) {
	return (
		<>
			<Head>
				<meta data-rh='true' charset='utf-8' />
				<meta data-rh='true' name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1' />
				<title>{metaTitle}</title>
				<meta data-rh='true' name='theme-color' content='#000000' />
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<meta name='keyword' content={metaKeywords} />
				<meta name='author' content={author} />
				<meta name='description' content={metaDescription} />
				<meta property='og:image' content={ogImage} />
				<meta property='og:image:height' content='630' />
				<meta property='og:image:width' content='1200' />
				<meta property='og:locale' content='uz_UZ' />
				<link
					rel='shortcut icon'
					href={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'}
					type='image/x-icon'
				/>
			</Head>
			{children}
		</>
	);
}
