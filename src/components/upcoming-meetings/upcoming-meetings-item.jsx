import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	IconButton,
	Image,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BiChat, BiLike, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function UpcomingMeetingsItem({ item }) {
	console.log(item);
	return (
		<Link href={`/metings/${item.slug}`}>
			<Card maxW='md'>
				<CardHeader>
					<Flex spacing='4'>
						<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
							<Avatar name='Segun Adebayo' src={item.author.photo.url} />

							<Box>
								<Heading size='sm'>{item.author.bio}</Heading>
								<Text>Creator, Chakra UI</Text>
							</Box>
						</Flex>
						<IconButton variant='ghost' colorScheme='gray' aria-label='See menu' icon={<BsThreeDotsVertical />} />
					</Flex>
				</CardHeader>
				<CardBody>
					<Text>{item.exsetpt}</Text>
				</CardBody>
				<Image h={60} w={'full'} objectFit='cover' src={item.featuredImage.url} alt='Chakra UI' />

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
		</Link>
	);
}
