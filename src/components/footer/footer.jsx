'use client';
import { Box, Center, Divider, Text } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
	return (
		<Box py={4} mt={6}>
			<Divider />
			<Center py={8} display={'flex'} flexDirection={'column'} gap={2}>
				<Text textAlign={'center'}>MILLIY HUQUQ © {new Date().getFullYear()} INVEST SCHOOL, BARCHA HUQUQLAR HIMOYALANGAN.</Text>
				<Text>
					BUYURTMA:{' '}
					<Box as='span' color={'coral'}>
						INVEST SCHOOL
					</Box>
				</Text>
				<Text>
					XIZMAT:{' '}
					<Box as='span' color={'coral'}>
						MA'LUMOT OLISH UCHUN
					</Box>{' '}
				</Text>
			</Center>
		</Box>
	);
}
