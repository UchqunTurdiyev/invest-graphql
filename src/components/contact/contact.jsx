import { getContact } from '@/services';
import React, { useEffect, useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';
import { Spinner } from '@chakra-ui/react';

export default function Contact() {
	const [contact, setContact] = useState([]);
	useEffect(() => {
		getContact().then(res => setContact(res));
	}, []);

	const city = contact[0];
	const jomboy = contact[1];

	return (
		<div>
			{/* <!-- Container htmlFor demo purpose --> */}
			<div className='container mx-auto md:px-6 mt-4'>
				{/* <!-- Section: Design Block --> */}
				<section className='mb-4 px-4 md:mb-32 lg:w-[70%]  mx-auto 4xl:w-[800px]'>
					<div className="relative shadow-lg  rounded-md h-[250px] md:h-[400px] overflow-hidden bg-cover bg-[30%] bg-no-repeat bg-[url('https://assets-v2.lottiefiles.com/a/1f1c5790-1177-11ee-9220-5f141f7daa72/CB1D9PQM2P.gif')]"></div>
					<div className='container px-6 md:px-12'>
						<div className='block rounded-lg  px-6 md:py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 py-4 md:px-12 -mt-[50px] md:-mt-[100px] backdrop-blur-[30px]'>
							<div className='mx-auto max-w-[700px]'>
								<h1 className='text-2xl text-left'>Invest schoolda o'qing va kelajagingizni biz bilan quring</h1>
								<h1 className='pt-4'>Invest school shahar maktabi va o'quv markazi.</h1>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- Section: Design Block --> */}
			</div>
			{/* <!-- Container htmlFor demo purpose --> */}
			{/* <!-- Container htmlFor demo purpose --> */}
			<div className='container my-24 mx-auto md:px-6'>
				{/* <!-- Section: Design Block --> */}
				<section className='mb-32'>
					<div className='block rounded-lg bg-gray.300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700'>
						<div className='flex items-center gap-10 p-5 max-lg:flex-col'>
							<div className='block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-[50%]'>
								<div className='h-[300px] md:h-[500px] w-full'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2955.0987936998927!2d66.96837664999998!3d39.67078774999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sru!2s!4v1701360127322!5m2!1sru!2s'
										className='left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'
										frameBorder='0'
										allowFullScreen
									></iframe>
								</div>
							</div>

							{contact.length ? (
								<div className='grid grid-cols-2 gap-2  md:gap-6' key={city.node.id}>
									<Link href={`tel:+${city.node.title}`} className='w-full'>
										<div className=' hover:bg-slate-700 hover:text-blue-300 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<BsTelephoneFill />
											</h1>
											<h1 className='md:text-xl text-md'>{city.node.title}</h1>
										</div>
									</Link>
									<Link href={`tel:${city.node.num}`} className='w-full'>
										<div className=' hover:bg-slate-700 hover:text-blue-300 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<BsTelephoneFill />
											</h1>
											<h1 className='md:text-xl text-md'>{city.node.num}</h1>
										</div>
									</Link>
									<Link href={`https://instagram.com/_u/${city.node.instagram}`} className='w-full'>
										<div className=' hover:bg-slate-700 hover:text-blue-300 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<AiFillInstagram />
											</h1>
											<h1 className='md:text-xl text-md'>{city.node.instagram}</h1>
										</div>
									</Link>
									<Link href={`https://t.me/${city.node.num}`} className='w-full'>
										<div className=' hover:bg-slate-700 hover:text-blue-300 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<FaTelegram />
											</h1>
											<h1 className='md:text-xl text-md'>{city.node.telegram}</h1>
										</div>
									</Link>
								</div>
							) : (
								<Spinner mx={'auto'} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
							)}
						</div>
					</div>
				</section>
				{/* <!-- Section: Design Block --> */}
				<section className='mb-10 px-4 md:mb-32 lg:w-[70%]  mx-auto 4xl:w-[800px] '>
					<div className="relative shadow-lg rounded-md h-[250px] md:h-[400px] overflow-hidden bg-cover bg-[30%] bg-no-repeat bg-[url('https://assets-v2.lottiefiles.com/a/2a473874-116d-11ee-8f5d-5742a028c01a/x97QegXymC.gif')]"></div>
					<div className='container px-6 md:px-12'>
						<div className='block rounded-lg  px-6 py-4 md:py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20  md:px-12 -mt-[50px] md:-mt-[100px] backdrop-blur-[30px]'>
							<div className='mx-auto max-w-[700px]'>
								<h1 className='text-2xl text-left'>Invest schoolda o'qing va kelajagingizni biz bilan quring</h1>
								<h1 className='pt-4'>Invest school shahar maktabi va o'quv markazi</h1>
							</div>
						</div>
					</div>
				</section>

				<section className='mb-32'>
					<div className='block rounded-lg bg-gray.300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700'>
						<div className='flex items-center gap-10 p-5 max-lg:flex-col'>
							{contact.length ? (
								<div className='grid grid-cols-2 gap-2  md:gap-6' key={jomboy.node.id}>
									<Link href={`tel:+${jomboy.node.title}`} className='w-full'>
										<div className=' hover:bg-slate-700 hover:text-blue-300 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<BsTelephoneFill />
											</h1>
											<h1 className='md:text-xl text-md'>{jomboy.node.title}</h1>
										</div>
									</Link>
									<Link href={`tel:${jomboy.node.num}`} className='w-full'>
										<div className=' hover:bg-slate-700 hover:text-blue-300 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<BsTelephoneFill />
											</h1>
											<h1 className='md:text-xl text-md'>{jomboy.node.num}</h1>
										</div>
									</Link>
									<Link href={`https://instagram.com/_u/${jomboy.node.instagram}`} className='w-full'>
										<div className=' hover:bg-slate-700 hover:text-blue-300 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<AiFillInstagram />
											</h1>
											<h1 className='md:text-xl text-md'>{jomboy.node.instagram}</h1>
										</div>
									</Link>
									<Link href={`https://t.me/${jomboy.node.num}`} className='w-full'>
										<div className=' hover:bg-slate-700 hover:text-blue-300 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<FaTelegram />
											</h1>
											<h1 className='md:text-xl text-md'>{jomboy.node.telegram}</h1>
										</div>
									</Link>
								</div>
							) : (
								<Spinner mx={'auto'} thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
							)}
							<div className='block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-[50%]'>
								<div className='h-[300px] md:h-[500px] w-full'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.203720496636!2d67.10034177578957!3d39.69012327156563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d258263a594e1%3A0x6e19463b007610ec!2sInvest%20school%20xususiy%20maktabi!5e0!3m2!1sru!2s!4v1704006738971!5m2!1sru!2s'
										className='left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'
										frameBorder='0'
										allowFullScreen
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			{/* <!-- Container htmlFor demo purpose --> */}
		</div>
	);
}
//
