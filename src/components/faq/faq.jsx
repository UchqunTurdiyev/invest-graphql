'use client';
import { faq } from '@/config/constants';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	Image,
	Spinner,
} from '@chakra-ui/react';
import React from 'react';

export default function Faq({ aboutBottom }) {
	return (
		<Box px={{ base: 2, lg: 20 }} py={10}>
			<Heading borderBottom={'2px'} borderColor='gray.600' py={4}>
				Nima uchun biz
			</Heading>
			<Accordion allowToggle defaultIndex={[0]} w={'full'} my={6} p={6} bg={'white'} textColor={'gray.700'} rounded={'3xl'}>
				{aboutBottom.length ? (
					aboutBottom.map(item => (
						<Box key={item.node.id}>
							<AccordionItem>
								<h2>
									<AccordionButton>
										<Box as='span' flex='1' textAlign='left' fontSize={'2xl'} fontWeight={'bold'}>
											{item.node.title}
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>{item.node.desc}</AccordionPanel>
							</AccordionItem>
						</Box>
					))
				) : (
					<Spinner mx={'auto'} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
				)}
			</Accordion>
			<Box py={8}>{/* <FaqContact /> */}</Box>
		</Box>
	);
}
