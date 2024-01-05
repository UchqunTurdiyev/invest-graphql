import Head from 'next/head';
import React from 'react';
import { siteConfig } from './site.config';

export default function Seo(props) {
	const {
		children,
		metaTitle = siteConfig.metaData.title,
		metaDescription = siteConfig.metaData.description,
		metaKeywords = siteConfig.metaData.keyword,
		ogImage = siteConfig.metaData.ogImage,
	} = props;

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=5' />
				<title>{metaTitle}</title>
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<meta name='keyword' content={metaKeywords} />
				<meta name='author' content={siteConfig.metaData.author} />
				<meta name='description' content={metaDescription} />
				<meta property='og:title' content={metaTitle} />
				<meta property='og:description' content={metaDescription} />
				<meta property='og:image' content={ogImage} />
				<meta property='og:image:height' content='630' />
				<meta property='og:image:width' content='1200' />
				<meta property='og:locale' content='uz_UZ' />
				<meta name='twitter:title' content={metaTitle} />
				<meta name='twitter:image' content={ogImage} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:description' content={metaDescription} />
				<link
					rel='shortcut icon'
					href='https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'
					type='image/x-icon'
				/>
				<link rel='shortcut icon' href='https://www.invest-school.uz' type='image/x-icon' />
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
