import { Contact } from '@/components';
import { withLayout } from '@/layout/layout';
import SEO from '@/layout/seo';
import React from 'react';

const ContacPage = () => {
	return (
		<SEO
			metaTitle='Biz bilan aloqa'
			metaDescription={'Invest school biz bilan maqsadga erishing'}
		>
			<Contact />
		</SEO>
	);
};

export default withLayout(ContacPage);
