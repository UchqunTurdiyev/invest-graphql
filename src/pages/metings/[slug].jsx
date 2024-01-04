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
		>
			<MetingDetailPage param={param} />
		</SEO>
	);
};

export default withLayout(MetingPageDetail);
