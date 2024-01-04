import { About } from '@/components';
import { withLayout } from '@/layout/layout';
import Seo from '@/layout/seo';
import React from 'react';

const AboutPage = () => {
	return (
		<Seo metaTitle='Biz haqimizda' metaDescription={"Invest school haqida to'liq ma'lumot"}>
			<About />
		</Seo>
	);
};

export default withLayout(AboutPage);
