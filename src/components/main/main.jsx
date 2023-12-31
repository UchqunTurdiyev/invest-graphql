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

export default function Main({ statistic, hero, carousel, upcoming, course, aboutHero, aboutLeft, aboutBottom }) {
	return (
		<>
			{hero.map(item => (
				<Hero key={item.node.id} item={item.node} />
			))}
			<Box
				w={'full'}
				bg={useColorModeValue(
					'url(https://images.unsplash.com/photo-1571974096020-5c2775ac5d47?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwZmxhdCUyMGxheXxlbnwwfHwwfHx8MA%3D%3D)',
					'url(https://themewagon.github.io/edu-meeting/assets/images/meetings-bg.jpg)'
				)}
				bgRepeat={'no-repeat'}
				bgSize={'cover'}
				bgAttachment={'fixed'}
			>
				<HomePageCarousel itemCar={carousel} />
				<UpcomingMeeting upcoming={upcoming} />
				<Degree aboutHero={aboutHero} aboutLeft={aboutLeft} />
				<Faq aboutBottom={aboutBottom} />
				<Statistic statistic={statistic} />
				<PopularCourse course={course} />
			</Box>
		</>
	);
}
