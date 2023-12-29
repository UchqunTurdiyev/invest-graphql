import React, { useEffect, useState } from 'react';
import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Flex,
	Heading,
	IconButton,
	Image,
	Text,
} from '@chakra-ui/react';
import { getCoursePage } from '@/services';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiChat, BiLike, BiShare } from 'react-icons/bi';
import { FaPhone, FaTelegram } from 'react-icons/fa';
import Link from 'next/link';

const CoursePages = () => {
	const [coursePage, setCoursePage] = useState([]);

	useEffect(() => {
		getCoursePage().then(res => setCoursePage(res));
	}, []);
	return (
		<Box className='2xl:px-20 lg:px-10 px-4'>
			<section className='py-6 bg-w sm:py-8 lg:py-10 z-40 relative'>
				<Box className='container mx-auto'>
					<Text className='text-5xl pb-5'>
						it's{' '}
						<span className='block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500 lg:inline'>
							Services
						</span>{' '}
						in one single line.
					</Text>
					<p className='pb-10'>Comes directly from the desk of engineers, creators and managers at Skcript.</p>

					<Flex className='max-2xl:flex-wrap gap-3 justify-center'>
						{coursePage.length
							? coursePage.map(item => (
									<Card maxW='md' key={item.node.id}>
										<CardHeader>
											<Flex spacing='4'>
												<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
													<Avatar name={item.node.author} src={item.node.authorImg.url} />

													<Box>
														<Heading size='sm'>{item.node.author}</Heading>
														<Text>{item.node.title}</Text>
													</Box>
												</Flex>
												{item.node.data}
											</Flex>
										</CardHeader>
										<CardBody>
											<Text>{item.node.description}</Text>
										</CardBody>
										<Image objectFit='cover' w={'full'} h={'300px'} src={item.node.image.url} alt='Chakra UI' />

										<CardFooter
											justify='space-around'
											sx={{
												'& > button': {
													minW: '136px',
												},
											}}
										>
											<Link href={`https://t.me/+${item.node.tell}`}>
												<Button
													h={'auto'}
													py={2}
													flex='1'
													flexDirection={'column'}
													gap={'3'}
													variant='ghost'
													leftIcon={<FaTelegram size={'24px'} />}
												>
													<Text>{item.node.telegram}</Text>
												</Button>
											</Link>
											<Divider orientation='vertical' />
											<Link href={`tel:${item.node.tell}`}>
												<Button
													h={'auto'}
													py={2}
													flex='1'
													flexDirection={'column'}
													gap={'3'}
													variant='ghost'
													leftIcon={<FaPhone size={'24px'} />}
												>
													<Text>{item.node.tell}</Text>
												</Button>
											</Link>
										</CardFooter>
									</Card>
							  ))
							: '<h1>Loading...</h1>'}
					</Flex>
				</Box>
			</section>
		</Box>
	);
};

export default CoursePages;

// https://source.unsplash.com/random/400x400
