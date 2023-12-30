import {
	Box,
	Button,
	Card,
	Flex,
	Grid,
	GridItem,
	HStack,
	Heading,
	Image,
	Spinner,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { upcomingMeetings } from '@/config/constants';
import Category from '../category/category';
import Link from 'next/link';

export default function UpcomingMeeting({ upcoming }) {
	const colorMode = useColorModeValue('gray.700', 'gray.400');
	const boxMude = useColorModeValue('white', 'gray.700');
	const btnMude = useColorModeValue('red.300', 'red.800');
	// const elCardMud = useColorModeValue('white', 'gray.700');

	const upcomingHero = upcoming.slice(0, 4);
	return (
		<Box w={'full'} py={12} px={{ base: 2, lg: 20 }}>
			{upcomingMeetings.length ? (
				upcomingMeetings.map(el => (
					<Box key={el.id}>
						<Heading pt={0} textAlign={'center'}>
							Tafsilotlar
						</Heading>
						<Box w={'100%'} h={'1px'} my={5} mx={'auto'} bg={colorMode}></Box>
						<Flex w={'full'} my={10} gap={5} flexDirection={{ base: 'column', lg: 'row' }}>
							<Box w={{ base: '100%', lg: '550px' }} h={'520px'} p={6} bg={boxMude} borderRadius={'xl'}>
								<Heading pb={2}>Category</Heading>
								{upcoming.map(el => (
									<Category key={el.node.id} item={el.node} />
								))}
								<Button mt={4} bg={btnMude}>
									Barcha postlarni ko'rish
								</Button>
							</Box>
							<Grid gridTemplateColumns={'repeat(2, 1fr)'} w={'full'} h={'auto'} gap={4}>
								{upcomingHero.length ? (
									upcomingHero.map(item => (
										<GridItem key={item.node.id}>
											<Link href={`/metings/${item.node.slug}`}>
												<Card w={'full'} h={'60'} borderRadius={'md'}>
													<Flex alignItems='center' flexWrap='wrap'>
														<Box w={'full'} h={60} position={'relative'}>
															<Image
																borderRadius={'md'}
																w={'full'}
																h={'full'}
																objectFit={'cover'}
																src={item.node.photo.url}
																alt='Chakra UI'
															/>

															<Box
																w={'full'}
																h={'full'}
																position={'absolute'}
																top={0}
																left={0}
																bgGradient='linear(200deg, transparent, rgba(0,0,0, 0.9))'
															></Box>
															<Box position={'absolute'} bottom={2} left={2}>
																<Text fontSize={'24px'} color={useColorModeValue('gray.300', 'gray.100')}>
																	{item.node.title}
																</Text>

																<Text fontSize={'14px'} color={useColorModeValue('gray.300', 'gray.100')}>
																	{item.node.desc}
																</Text>
																<Text fontSize={'14px'} color={useColorModeValue('gray.300', 'gray.100')}>
																	{item.node.data}
																</Text>
															</Box>
														</Box>
													</Flex>
												</Card>
											</Link>
										</GridItem>
									))
								) : (
									<Spinner mx={'auto'} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
								)}
							</Grid>
						</Flex>
					</Box>
				))
			) : (
				<Spinner mx={'auto'} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
			)}
		</Box>
	);
}
