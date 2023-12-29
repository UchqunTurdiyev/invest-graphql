import CoursePages from '@/components/course-page/coursePage';
import { withLayout } from '@/layout/layout';
import SEO from '@/layout/seo';
import React from 'react';

const CoursePage = () => {
	return (
		<SEO
			metaTitle='Kurslar'
			metaDescription={"Invest school O'quv sentri kurslari"}
			author={'Uchqun Turdiev'}
			metaKeywords={'Talim'}
			ogImage={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'}
		>
			<CoursePages />
		</SEO>
	);
};

export default withLayout(CoursePage);
