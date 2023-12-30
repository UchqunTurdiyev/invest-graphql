import { getPostDetails, getUpcomingMeetings } from '@/services';
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
	Spinner,
	Stack,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiChat, BiLike, BiShare, BiTimeFive } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Ri24HoursFill } from 'react-icons/ri';

export default function MetingDetailPage({ param }) {
	// console.log(param.slug);
	const [detail, setDetail] = useState([]);

	useEffect(() => {
		getUpcomingMeetings().then(res => setDetail(res));
	}, []);

	const details = detail.filter(el => param.slug === el.node.slug);

	return (
		<Box py={10} px={{ sm: 4, md: 6, lg: 10, xl: '36' }}>
			{details.length ? (
				details.map(item => (
					<Card key={item.node.id} maxW={'full'}>
						<Image objectFit='cover' src={item.node.photo.url} alt='Chakra UI' />

						<CardHeader>
							<Heading>{item.node.title}</Heading>
						</CardHeader>
						<CardBody>
							<Text>{item.node.desc}</Text>
						</CardBody>
						<Text textAlign={'right'} p={2}>
							{item.node.data}
						</Text>
					</Card>
				))
			) : (
				<Spinner mx={'auto'} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
			)}
			<Divider my={6} size={'md'} />
			<Heading pb={4}>Posts</Heading>
			<Grid gridTemplateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={3}>
				{detail.length ? (
					detail.map(el => (
						<GridItem key={el.node.id} w='full' h='auto'>
							<Link href={`/metings/${el.node.slug}`}>
								<Card maxW={{ sm: 'full', md: 'sm' }} h={'450px'}>
									<CardBody>
										<Image
											h={52}
											w={'full'}
											src={el.node.photo.url}
											alt='Green double couch with wooden legs'
											borderRadius='lg'
										/>

										<Stack mt='6' spacing='3'>
											<Heading size='md'>{el.node.title}</Heading>
											<Text>{el.node.desc}</Text>
										</Stack>
									</CardBody>
									<Text textAlign={'right'} p={2}>
										{el.node.data}
									</Text>
								</Card>
							</Link>
						</GridItem>
					))
				) : (
					<Spinner mx={'auto'} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
				)}
			</Grid>
		</Box>
	);
}
