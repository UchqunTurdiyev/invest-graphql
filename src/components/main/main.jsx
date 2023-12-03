'use client';
import React from 'react';
import Hero from '../hero/hero';
import PopularCourse from '../popular-course/popular-course';
import UpcomingMeeting from '../upcoming-meetings/upcoming-meetings';
import Statistic from '../statistica/statistica';
import HomePageCarousel from '../carousel/carousel';
import Degree from '../degree/degree';
import Faq from '../faq/faq';
import { Box, useColorModeValue } from '@chakra-ui/react';

export default function Main({ posts, hero, carousel, education, upcoming, course, aboutHero, aboutLeft, aboutBottom }) {
	return (
		<>
			{hero.map(item => (
				<Hero key={item.node.id} item={item.node} />
			))}
			<Box
				w={'full'}
				bg={useColorModeValue(
					'url(https://img.wallpapersafari.com/desktop/1440/900/59/33/2wIUzO.jpg)',
					'url(https://themewagon.github.io/edu-meeting/assets/images/meetings-bg.jpg)'
				)}
				bgRepeat={'no-repeat'}
				bgSize={'cover'}
				bgAttachment={'fixed'}
			>
				<HomePageCarousel itemCar={carousel} />
				<UpcomingMeeting upcoming={upcoming} />
				<Degree aboutHero={aboutHero} aboutLeft={aboutLeft} />
				<Faq />
				<Statistic />
				<PopularCourse course={course} />
			</Box>
		</>
	);
}
