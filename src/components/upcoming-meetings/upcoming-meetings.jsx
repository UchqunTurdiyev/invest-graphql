import { Box, Button, Flex, Grid, HStack, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import UpcomingMeetingsItem from './upcoming-meetings-item';
import { upcomingMeetings } from '@/config/constants';
import PostWidget from './post-widget';
import Category from '../category/category';

export default function UpcomingMeeting({ posts }) {
	const colorMode = useColorModeValue('gray.700', 'gray.400');
	const boxMude = useColorModeValue('white', 'gray.700');
	const btnMude = useColorModeValue('red.300', 'red.800');
	const elCardMud = useColorModeValue('white', 'gray.700');

	return (
		<Box w={'full'} py={12} px={{ base: 2, lg: 20 }}>
			{upcomingMeetings.map(el => (
				<Box key={el.id}>
					<Heading pt={0} textAlign={'center'}>
						UPCOMING MEETINGS
					</Heading>
					<Box w={'100%'} h={'1px'} my={5} mx={'auto'} bg={colorMode}></Box>
					<Flex w={'full'} my={10} gap={5} flexDirection={{ base: 'column', lg: 'row' }}>
						<Box w={{ base: '100%', lg: '500px' }} h={'480px'} p={8} bg={boxMude} borderRadius={'xl'}>
							<Heading mb={4}>{el.title}</Heading>
							<Box w={'100%'} h={'1px'} mb={5} mx={'auto'} bg={colorMode}></Box>
							{/* Post widjef=t left position */}
							{posts.map((post, idx) => (
								<PostWidget key={idx} post={post.node} />
							))}
							<Box w={'100%'} h={'1px'} mt={5} mx={'auto'} bg={colorMode}></Box>
							{/* Category  */}
							<Category />
							<Button mt={4} bg={btnMude}>
								All UPCOMING MEETINGS
							</Button>
						</Box>
						<Flex w={'full'} h={'auto'} gap={2} flexWrap={'wrap'}>
							{posts.map((item, idx) => (
								<UpcomingMeetingsItem key={idx} item={item.node} />
							))}
						</Flex>
					</Flex>
				</Box>
			))}
		</Box>
	);
}
