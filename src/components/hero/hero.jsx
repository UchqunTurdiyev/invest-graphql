'use client';
import { Box, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

export default function Hero({ item }) {
	const textUse = useColorModeValue('gray.200', 'gray.200');
	const gradientBg = useColorModeValue(
		'linear(to-r, rgba(0,0,0, 0.5), transparent)',
		'linear(to-r, rgba(0,0,0, 0.6), transparent)'
	);
	const { t } = useTranslation();

	return (
		<Box>
			<Box w={'full'} h={'650px'} pos={'relative'}>
				<Box position={'absolute'} top={0} left={0} w={'full'} h={'full'} bgGradient={gradientBg}></Box>
				<Image src={item.photo.url} alt='home' w={'full'} h={'full'} objectFit={'cover'} />
				<Box
					pos={'absolute'}
					top={0}
					left={0}
					right={0}
					bottom={0}
					bg={useColorModeValue('whiteAlpha.100', 'rgba(0,0,0, 0.5)')}
				/>
			</Box>
			<Box w={{ base: '85%', lg: '50%' }} pos={'absolute'} top={52} left={{ base: 2, lg: 20 }}>
				<Text color={textUse} fontWeight={'700'}>
					{item.title}
				</Text>
				<Heading color={textUse} my={4}>
					{t('mainHeader', { ns: 'layout' })}
				</Heading>
				<Text color={textUse} fontWeight={'600'}>
					{item.desc}
				</Text>
			</Box>
		</Box>
	);
}
