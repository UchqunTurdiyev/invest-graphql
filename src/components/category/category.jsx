import { getCategory } from '@/services';
import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Category({ posts }) {
	const postLimit = posts.slice(0, 10);

	return (
		<Box>
			<Heading pb={2}>Category</Heading>
			{postLimit.map(item => (
				<Text key={item.node.slug} fontSize={'lg'} py={1}>
					<Link href={`/category/${item.node.slug}`}>{item.node.title}</Link>
					<Divider />
				</Text>
			))}
		</Box>
	);
}
