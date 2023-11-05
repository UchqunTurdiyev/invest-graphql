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
			{details.map(item => (
				<Card key={item.node.id} maxW={'full'}>
					<Image objectFit='cover' src={item.node.photo.url} alt='Chakra UI' />

					<CardHeader>
						<Heading>{item.node.title}</Heading>
					</CardHeader>
					<CardBody>
						<Text>{item.node.desc}</Text>
					</CardBody>

					<CardFooter
						justify='space-between'
						flexWrap='wrap'
						sx={{
							'& > button': {
								minW: '136px',
							},
						}}
					>
						<Button flex='1' variant='ghost' leftIcon={<BiLike />}>
							Like
						</Button>
						<Button flex='1' variant='ghost' leftIcon={<BiChat />}>
							Comment
						</Button>
						<Button flex='1' variant='ghost' leftIcon={<BiShare />}>
							Share
						</Button>
					</CardFooter>
				</Card>
			))}
			<Divider my={6} size={'md'} />
			<Heading pb={4}>Posts</Heading>
			<Grid gridTemplateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={3}>
				{detail.map(el => (
					<GridItem key={el.node.id} w='full' h='auto'>
						<Link href={`/metings/${el.node.slug}`}>
							<Card maxW={{ sm: 'full', md: 'sm' }} h={'450px'}>
								<CardBody>
									<Image h={52} w={'full'} src={el.node.photo.url} alt='Green double couch with wooden legs' borderRadius='lg' />

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
