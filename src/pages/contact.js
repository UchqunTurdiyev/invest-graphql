import { Contact } from '@/components';
import { withLayout } from '@/layout/layout';
import Seo from '@/layout/seo';
import React from 'react';

const ContacPage = () => {
	return (
		<Seo
			metaTitle='Biz bilan aloqa'
			metaDescription={'Invest school biz bilan maqsadga erishing'}
		>
			<Contact />
		</Seo>
	);
};

export default withLayout(ContacPage);
