import { Contact } from '@/components';
import { withLayout } from '@/layout/layout';
import SEO from '@/layout/seo';
import React from 'react';

const ContacPage = () => {
	return (
		<SEO
			metaTitle='Biz bilan aloqa'
			metaDescription={'Invest school biz bilan maqsadga erishing'}
			author={'Uchqun Turdiev'}
			metaKeywords={'Talim'}
			ogImage={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'}
		>
			<Contact />
		</SEO>
	);
};

export default withLayout(ContacPage);
