'use client';
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Spinner,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';

export default function PopularCourse({ course }) {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<Box py={10} px={{ base: 2, lg: 20 }}>
			<Heading borderBottom={'2px'} borderColor='gray.600' py={4} mt={10}>
				Bizning top kurslarimiz
			</Heading>
			<Box mt={8}>
				<Carousel responsive={responsive}>
					{!course.lenght ? (
						course.map(el => (
							<Link href={`/course/${el.node.slug}`} key={el.node.id}>
								<Card maxW='sm' mx={2}>
									<CardBody>
										<Image
											width={'100%'}
											h={'200'}
											objectFit={'cover'}
											src={el.node.photo.url}
											alt='Green double couch with wooden legs'
										/>
										<Stack mt='6' spacing='3'>
											<Heading size='md'>{el.node.title}</Heading>
											<Text>{el.node.desc.slice(0, 40)}...</Text>
										</Stack>
									</CardBody>
									<Divider />
									<CardFooter>
										<ButtonGroup spacing='2'>
											<Button variant='solid' colorScheme='blue'>
												Hoziroq ko'ring
											</Button>
										</ButtonGroup>
									</CardFooter>
								</Card>
							</Link>
						))
					) : (
						<Spinner mx={'auto'} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
					)}
				</Carousel>
			</Box>
		</Box>
	);
}