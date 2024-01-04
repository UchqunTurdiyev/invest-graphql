import { StatisticDetail } from '@/components';
import { withLayout } from '@/layout/layout';
import Seo from '@/layout/seo';
import React from 'react';

const StatistikaPage = () => {
	return (
		<Seo metaTitle='Statistika' metaDescription={"Invest school haqida to'liq ma'lumot"}>
			<StatisticDetail />
		</Seo>
	);
};

export default withLayout(StatistikaPage);
