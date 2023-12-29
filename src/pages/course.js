import CoursePages from '@/components/course-page/coursePage';
import { withLayout } from '@/layout/layout';
import React from 'react';

const CoursePage = () => {
	return <CoursePages />;
};

export default withLayout(CoursePage);
