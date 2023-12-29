import { withLayout } from '@/layout/layout';
import SEO from '@/layout/seo';
import MetingDetailPage from '@/page-component/meting-detail/meting-detail-page';
import { getPostDetails, getPosts } from '@/services';
import { useParams } from 'next/navigation';
import React from 'react';

const MetingPageDetail = () => {
	const param = useParams();
	return (
		<SEO
			metaTitle='Manaviy ozuqa'
			metaDescription={'Invest school Sayohatlar, Uchrashuvlar, Dars jarayonlari, Bayramlar'}
			author={'Uchqun Turdiev'}
			metaKeywords={'Talim'}
			ogImage={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'}
		>
			<MetingDetailPage param={param} />
		</SEO>
	);
};

export default withLayout(MetingPageDetail);
