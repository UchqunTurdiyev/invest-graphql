import { Box, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AboutHome } from '..';
import AboutCategory from './about-category';
import { getAbout } from '@/services';

export default function about() {
	const [aboutData, setAboutData] = useState([]);
	useEffect(() => {
		getAbout().then(res => setAboutData(res));
	}, []);
	return (
		<Box
			w={'full'}
			h={'full'}
			bg={useColorModeValue('white', 'url(https://themewagon.github.io/edu-meeting/assets/images/meetings-page-bg.jpg)')}
			bgRepeat={'no-repeat'}
			bgSize={'cover'}
			pb={10}
		>
			<AboutHome />
			<AboutCategory aboutData={aboutData} />
		</Box>
	);
}
