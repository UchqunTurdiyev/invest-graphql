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

export default function UpcomingMeetingsItem({ item }) {
	return (
		<Link href={`/metings/${item.slug}`}>
			<Card w={'full'} h={'60'} borderRadius={'md'}>
				<Flex alignItems='center' flexWrap='wrap'>
					<Box w={'full'} h={60} position={'relative'}>
						<Image borderRadius={'md'} w={'full'} h={'full'} objectFit={'cover'} src={item.featuredImage.url} alt='Chakra UI' />

						<Box
							w={'full'}
							h={'full'}
							position={'absolute'}
							top={0}
							left={0}
							bgGradient='linear(200deg, transparent, rgba(0,0,0, 0.9))'
						></Box>
						<Box position={'absolute'} bottom={2} left={2}>
							<Text fontSize={'24px'}>{item.title}</Text>
							<Text fontSize={'14px'}>
								{item.createdAt.slice(0, 10)}. {item.createdAt.slice(11, 19)}
							</Text>
						</Box>
					</Box>
				</Flex>
			</Card>
		</Link>
	);
}
