'use client';
import { degree } from '@/config/constants';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Flex,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export default function Degree({ aboutLeft, aboutHero }) {
	const headUse = useColorModeValue('white', 'white');
	const textUse = useColorModeValue('white', 'white');
	return (
		<>
			{degree.map(el => (
				<Box key={el.degree} w={'full'} py={28} px={{ base: 2, lg: 20 }} bg={`url(${el.image_bg})`} bgAttachment={'fixed'}>
					<Flex gap={10} flexDirection={{ base: 'column', md: 'row' }}>
						<Box w={'full'}>
							{aboutLeft.map((deg, idx) => (
								<Box w={'full'} mb={8} p={8} bg={'rgba(250,250,250,0.15)'} key={idx}>
									<Heading color={headUse}>{deg.node.title}</Heading>
									<Text color={textUse} py={4}>
										{deg.node.desc}
									</Text>
									<Button>JOIN US NOW</Button>
								</Box>
							))}
						</Box>
						<Accordion allowToggle defaultIndex={[0]} w={'full'} p={6} bg={'white'} textColor={'gray.700'} rounded={'3xl'}>
							{aboutHero.map(data => (
								<div key={data.id}>
									<AccordionItem>
										<h2>
											<AccordionButton>
												<Box
													as='span'
													flex='1'
													textAlign='left'
													fontSize={'2xl'}
													fontWeight={'bold'}
													color={data.id == 0 ? 'red' : '#333'}
												>
													{data.node.title}
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</h2>
										<AccordionPanel pb={4}>{data.node.desc}</AccordionPanel>
									</AccordionItem>
								</div>
							))}
						</Accordion>
					</Flex>
				</Box>
			))}
		</>
	);
}
