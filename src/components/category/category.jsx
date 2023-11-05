import { Box, Divider, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Category({ item }) {
	return (
		<Box py={1}>
			<Text fontSize={'lg'} py={1}>
				<Link href={`/metings/${item.slug}`}>{item.title}</Link>
				<Divider />
			</Text>
		</Box>
	);
}
