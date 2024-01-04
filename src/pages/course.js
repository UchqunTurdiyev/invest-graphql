import CoursePages from '@/components/course-page/coursePage';
import { withLayout } from '@/layout/layout';
import Seo from '@/layout/seo';
import React from 'react';

const CoursePage = () => {
	return (
		<Seo metaTitle='Kurslar' metaDescription={"Invest school O'quv sentri kurslari"}>
			<CoursePages />
		</Seo>
	);
};

export default withLayout(CoursePage);
