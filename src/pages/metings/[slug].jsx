import { withLayout } from '@/layout/layout';
import MetingDetailPage from '@/page-component/meting-detail/meting-detail-page';
import { getPostDetails, getPosts } from '@/services';
import { useParams } from 'next/navigation';
import React from 'react';

const MetingPageDetail = () => {
	const param = useParams();
	return <MetingDetailPage param={param} />;
};

export default withLayout(MetingPageDetail);

// export async function getStaticProps({ params }) {
// 	const data = await getPostDetails(params.slug);

// 	return {
// 		props: {
// 			post: data,
// 		},
// 	};
// }
