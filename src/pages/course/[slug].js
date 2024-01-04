import { withLayout } from '@/layout/layout';
import Seo from '@/layout/seo';
import CourseDetailPage from '@/page-component/course-detail-page/course-detail-page';
import { useParams } from 'next/navigation';
import React from 'react';

const CoursePage = () => {
	const param = useParams();
	return (
		<Seo metaTitle='Kurslar batafsil' metaDescription={"Invest school kurslari bilan batafsil ma'lumot oling"}>
			<CourseDetailPage param={param} />
		</Seo>
	);
};

export default withLayout(CoursePage);
