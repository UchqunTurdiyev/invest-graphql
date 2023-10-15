import { getPostDetails } from '@/services';
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
import React, { useEffect, useState } from 'react';
import { BiChat, BiLike, BiShare, BiTimeFive } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Ri24HoursFill } from 'react-icons/ri';

export default function MetingDetailPage({ param }) {
	const [detail, setDetail] = useState([]);
	console.log(param);

	useEffect(() => {
		getPostDetails().then(res => setDetail(res));
	}, []);

	const details = detail.filter(el => param.slug === el.slug);
	console.log(details);

	return (
		<Box py={10} px={{ sm: 4, md: 6, lg: 10, xl: '36' }}>
			{details.map(item => (
				<Card key={item.slug} maxW={'full'}>
					<CardHeader>
						<Flex spacing='4'>
							<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
								<Avatar name={item.author.name} src={item.author.photo.url} />

								<Heading size='sm'>{item.author.name}</Heading>
								<Box>
									<Text>{item.author.bio}</Text>
								</Box>
							</Flex>
							<IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<BsThreeDotsVertical />} />
						</Flex>
					</CardHeader>
					<CardBody>
						<Heading>{item.title}</Heading>
						<Text>{item.exsetpt}</Text>
						<Text textAlign={'end'}>Post qoilgan sana: {item.createdAt.slice(0, 10)}</Text>
						<Text textAlign={'end'}>soat: {item.createdAt.slice(11, 20)}</Text>
					</CardBody>
					<Image objectFit='cover' src={item.featuredImage.url} alt='Chakra UI' />

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
					<GridItem key={el.slug} w='full' h='auto'>
						<Card maxW={{ sm: 'full', md: 'sm' }} h={'450px'}>
							<CardBody>
								<Image h={52} w={'full'} src={el.featuredImage.url} alt='Green double couch with wooden legs' borderRadius='lg' />
								<Stack mt='6' spacing='3'>
									<Heading size='md'>{el.title}</Heading>
									<Text>{el.exsetpt.slice(0, 66)}...</Text>
								</Stack>
							</CardBody>
							<Divider />
							<Box p={4}>
								<Flex>
									<Avatar name={el.author.name} src={el.author.photo.url} />
									<Box>
										<Text pl={4} pb={2}>
											{el.author.name}
										</Text>
										<Text display={'flex'} alignItems={'center'} gap={2} fontSize={'sm'} pl={5}>
											<BiTimeFive /> {el.createdAt.slice(0, 10)}. <Ri24HoursFill /> {el.createdAt.slice(11, 20)}
										</Text>
									</Box>
								</Flex>
							</Box>
						</Card>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
}
