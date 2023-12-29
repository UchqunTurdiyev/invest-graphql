import { getCourse } from '@/services';
import React, { useEffect, useState } from 'react';
import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Container,
	Divider,
	Flex,
	Grid,
	GridItem,
	HStack,
	Heading,
	IconButton,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BiChat, BiLike, BiShare, BiTimeFive } from 'react-icons/bi';

export default function CourseDetailPage({ param }) {
	const [course, setCourse] = useState([]);

	useEffect(() => {
		getCourse().then(res => setCourse(res));
	}, []);
	const detail = course.filter(item => param.slug === item.node.slug);

	return (
		<Box py={10} px={{ sm: 4, md: 6, lg: 10, xl: '36' }}>
			{detail.map(item => (
				<Card key={item.node.id} maxW={'full'}>
					<Image objectFit='cover' src={item.node.photo.url} alt='Chakra UI' />

					<CardHeader>
						<Heading>{item.node.title}</Heading>
					</CardHeader>
					<CardBody>
						<Text>{item.node.desc}</Text>
					</CardBody>
				</Card>
			))}
			<Divider my={6} size={'md'} />
			<Heading pb={4}>Posts</Heading>
			<Grid gridTemplateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={3}>
				{course.map(el => (
					<GridItem key={el.node.id} w='full' h='auto'>
						<Link href={`/course/${el.node.slug}`}>
							<Card maxW={{ sm: 'full', md: 'sm' }} h={'450px'}>
								<CardBody>
									<Image
										h={52}
										w={'full'}
										objectFit={'cover'}
										src={el.node.photo.url}
										alt='Green double couch with wooden legs'
										borderRadius='lg'
									/>

									<Stack mt='6' spacing='3'>
										<Heading size='md'>{el.node.title}</Heading>
										<Text>{el.node.desc}</Text>
									</Stack>
								</CardBody>
							</Card>
						</Link>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
}
