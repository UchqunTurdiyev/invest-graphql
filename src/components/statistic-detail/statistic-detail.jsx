import { getAmount } from '@/services';
import { Box, Card, CardBody, Flex, Heading, Image, Spinner, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function StatisticDetail() {
	const [amount, setAmount] = useState([]);
	useEffect(() => {
		getAmount().then(res => setAmount(res));
	}, []);

	return (
		<Box px={{ base: 4, lg: 16 }} py={4}>
			<Heading>Bizning natijalarimiz</Heading>
			<Flex py={10} flexWrap={'wrap'} gap={5} justifyContent={'center'}>
				{amount.length ? (
					amount.map(item => (
						<Card w={'300px'} key={item.node.id}>
							<CardBody>
								<Image
									h={'170px'}
									w={'full'}
									objectFit={'cover'}
									src={item.node.image.url}
									alt={item.node.title}
									borderRadius='lg'
								/>
								<Stack mt='6' spacing='3'>
									<Heading size='md'>{item.node.title}</Heading>
									<Text>{item.node.desc}</Text>
									<Text color='blue.600' fontSize='2xl'>
										{item.node.data}
									</Text>
								</Stack>
							</CardBody>
						</Card>
					))
				) : (
					<Spinner mx={'auto'} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
				)}
			</Flex>
		</Box>
	);
}
