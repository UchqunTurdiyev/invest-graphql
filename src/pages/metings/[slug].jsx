import { withLayout } from '@/layout/layout';
import MetingDetailPage from '@/page-component/meting-detail/meting-detail-page';
import { useParams } from 'next/navigation';
import React from 'react';

const MetingPageDetail = () => {
	const param = useParams();
	console.log(param);
	return <MetingDetailPage />;
};

export default withLayout(MetingPageDetail);
