import { StatisticDetail } from '@/components';
import { withLayout } from '@/layout/layout';
import SEO from '@/layout/seo';
import React from 'react';

const StatistikaPage = () => {
	return (
		<SEO
			metaTitle='Statistika'
			metaDescription={"Invest school haqida to'liq ma'lumot"}
		>
			<StatisticDetail />
		</SEO>
	);
};

export default withLayout(StatistikaPage);
