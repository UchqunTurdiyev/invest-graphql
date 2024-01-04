import { withLayout } from '@/layout/layout';
import Seo from '@/layout/seo';
import MetingDetailPage from '@/page-component/meting-detail/meting-detail-page';
import { getPostDetails, getPosts } from '@/services';
import { useParams } from 'next/navigation';
import React from 'react';

const MetingPageDetail = () => {
	const param = useParams();
	return (
		<Seo metaTitle='Manaviy ozuqa' metaDescription={'Invest school Sayohatlar, Uchrashuvlar, Dars jarayonlari, Bayramlar'}>
			<MetingDetailPage param={param} />
		</Seo>
	);
};

export default withLayout(MetingPageDetail);
