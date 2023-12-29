import { withLayout } from '@/layout/layout';
import SEO from '@/layout/seo';
import CourseDetailPage from '@/page-component/course-detail-page/course-detail-page';
import { useParams } from 'next/navigation';
import React from 'react';

const CoursePage = () => {
	const param = useParams();
	return (
		<SEO
			metaTitle='Kurslar batafsil'
			metaDescription={'Invest school kurslari bilan batafsil ma\'lumot oling'}
			author={'Uchqun Turdiev'}
			metaKeywords={'Talim'}
			ogImage={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'}
		>
			<CourseDetailPage param={param} />
		</SEO>
	);
};

export default withLayout(CoursePage);
