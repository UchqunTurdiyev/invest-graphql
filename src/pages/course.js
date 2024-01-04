import CoursePages from '@/components/course-page/coursePage';
import { withLayout } from '@/layout/layout';
import SEO from '@/layout/seo';
import React from 'react';

const CoursePage = () => {
	return (
		<SEO metaTitle='Kurslar' metaDescription={"Invest school O'quv sentri kurslari"}>
			<CoursePages />
		</SEO>
	);
};

export default withLayout(CoursePage);
