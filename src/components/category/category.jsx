import { getCategory } from '@/services';
import { Box, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Category() {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		getCategory().then(res => setCategory(res));
	}, []);
	console.log(category);
	return (
		<Box>
			<Heading py={2}>Category</Heading>
			{category.map(item => (
				<Link key={item.slug} href={`/category/${item.slug}`}>
					{item.name}
				</Link>
			))}
		</Box>
	);
}
