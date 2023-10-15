import { Box, Button, Flex, Grid, GridItem, HStack, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import UpcomingMeetingsItem from './upcoming-meetings-item';
import { upcomingMeetings } from '@/config/constants';
import Category from '../category/category';

export default function UpcomingMeeting({ posts }) {
	const colorMode = useColorModeValue('gray.700', 'gray.400');
	const boxMude = useColorModeValue('white', 'gray.700');
	const btnMude = useColorModeValue('red.300', 'red.800');
	// const elCardMud = useColorModeValue('white', 'gray.700');

	const postDetail = posts.slice(0, 4);

	return (
		<Box w={'full'} py={12} px={{ base: 2, lg: 20 }}>
			{upcomingMeetings.map(el => (
				<Box key={el.id}>
					<Heading pt={0} textAlign={'center'}>
						UPCOMING MEETINGS
					</Heading>
					<Box w={'100%'} h={'1px'} my={5} mx={'auto'} bg={colorMode}></Box>
					<Flex w={'full'} my={10} gap={5} flexDirection={{ base: 'column', lg: 'row' }}>
						<Box w={{ base: '100%', lg: '550px' }} h={'520px'} p={6} bg={boxMude} borderRadius={'xl'}>
							{/* Category  */}
							<Category posts={posts} />
							<Button mt={4} bg={btnMude}>
								Barcha postlarni ko'rish
							</Button>
						</Box>
						<Grid gridTemplateColumns={'repeat(2, 1fr)'} w={'full'} h={'auto'} gap={4}>
							{postDetail.map((item, idx) => (
								<GridItem key={idx}>
									<UpcomingMeetingsItem item={item.node} />
								</GridItem>
							))}
						</Grid>
					</Flex>
				</Box>
			))}
		</Box>
	);
}
