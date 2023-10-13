import React from 'react';
import moment from 'moment/moment';
import { Box, Heading, Image } from '@chakra-ui/react';

export default function CardPost({ item }) {
	return (
		<Box className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
			<Box className='relative overflow-hidden shadow-md pb-80 mb-6'>
				<Image
					src={item.featuredImage.url}
					alt={item.title}
					className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
				/>
				<Heading>{item.title}</Heading>
			</Box>
		</Box>
	);
}
