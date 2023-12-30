'use client';
import { Box, Heading, Icon, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomePageCarousel({ itemCar }) {
	const bgImg = useColorModeValue(
		'url(https://avatars.mds.yandex.net/i?id=63790cc5425d5fc7d8324bfb5d46c2fd85813e72-3560695-images-thumbs&ref=rim&n=33&w=351&h=250)',
		'url(https://themewagon.github.io/edu-meeting/assets/images/service-item-bg.jpg)'
	);
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<Box px={{ base: 2, lg: 20 }} py={5} mt={'-120px'}>
			<Carousel responsive={responsive}>
				{itemCar.length ? (
					itemCar.map(el => (
						<Box
							key={el.node.id}
							w={'95%'}
							mx={'auto'}
							h={'250px'}
							display={'flex'}
							alignItems={'center'}
							justifyContent={'center'}
							flexDirection={'column'}
							borderRadius={'lg'}
							px={2}
							gap={4}
							bg={bgImg}
							bgRepeat={'no-repeat'}
							bgSize={'cover'}
						>
							{/* <Icon fontSize={'2xl'}     /> */}
							<Heading py={4}>{el.node.title}</Heading>
							<Text textAlign={'center'}>{el.node.desc}</Text>
						</Box>
					))
				) : (
					<Spinner mx={'auto'} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
				)}
			</Carousel>
		</Box>
	);
}
