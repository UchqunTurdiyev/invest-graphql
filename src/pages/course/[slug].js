import { withLayout } from '@/layout/layout';
import CourseDetailPage from '@/page-component/course-detail-page/course-detail-page';
import { useParams } from 'next/navigation';
import React from 'react';

const CoursePage = () => {
	const param = useParams();
	console.log(param);
	return <CourseDetailPage param={param} />;
};

export default withLayout(CoursePage);
