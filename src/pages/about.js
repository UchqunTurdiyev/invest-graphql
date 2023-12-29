import { About } from '@/components';
import { withLayout } from '@/layout/layout';
import SEO from '@/layout/seo';
import React from 'react';

const AboutPage = () => {
	return (
		<SEO
			metaTitle='Biz haqimizda'
			metaDescription={"Invest school haqida to'liq ma'lumot"}
			author={'Uchqun Turdiev'}
			metaKeywords={'Talim'}
			ogImage={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'}
		>
			<About />
		</SEO>
	);
};

export default withLayout(AboutPage);
