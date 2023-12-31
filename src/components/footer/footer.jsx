'use client';
import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTelegram, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

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
				<Flex gap={5}>
					<Link href='https://www.youtube.com/@investschool2653' className='text-2xl'>
						<FaYoutube />
					</Link>
					<Link href='https://www.facebook.com/profile.php?id=100087486619846&mibextid=ZbWKwL' className='text-2xl'>
						<FaFacebook />
					</Link>
					<Link href='https://t.me/samarqandinvesteducation' className='text-2xl'>
						<FaTelegram />
					</Link>
					<Link
						href='https://www.instagram.com/investschool.uz?utm_source=ig_web_button_share_sheet&igsh=YzAwZjE1ZTI0Zg%3D%3D'
						className='text-2xl'
					>
						<RiInstagramFill />
					</Link>
				</Flex>
			</Center>
		</Box>
	);
}
