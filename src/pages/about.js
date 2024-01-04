import { About } from '@/components';
import { withLayout } from '@/layout/layout';
import SEO from '@/layout/seo';
import React from 'react';

const AboutPage = () => {
	return (
		<SEO metaTitle='Biz haqimizda' metaDescription={"Invest school haqida to'liq ma'lumot"}>
			<About />
		</SEO>
	);
};

export default withLayout(AboutPage);
