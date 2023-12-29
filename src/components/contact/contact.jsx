import { getContact } from '@/services';
import React, { useEffect, useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

export default function Contact() {
	const [contact, setContact] = useState([]);
	useEffect(() => {
		getContact().then(res => setContact(res));
	}, []);
	console.log(contact);
	return (
		<div>
			{/* <!-- Container htmlFor demo purpose --> */}
			<div className='container mx-auto md:px-6'>
				{/* <!-- Section: Design Block --> */}
				<section className='mb-32'>
					<div className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://source.unsplash.com/random/400x400')]"></div>
					<div className='container px-6 md:px-12'>
						<div className='block rounded-lg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]'>
							<div className='mx-auto max-w-[700px]'>
								<h1 className='text-2xl text-left'>Invest schoolda o'qing va kelajagingizni biz bilan quring</h1>
								<h1 className='pt-4'>Invest school shahar maktabi va o'quv sentri</h1>
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
						<div className='flex items-center gap-10'>
							<div className='block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-[50%]'>
								<div className='h-[500px] w-full'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2955.0987936998927!2d66.96837664999998!3d39.67078774999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sru!2s!4v1701360127322!5m2!1sru!2s'
										className='left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'
										frameBorder='0'
										allowFullScreen
									></iframe>
								</div>
							</div>

							{contact.map(el => (
								<div className='flex flex-wrap items-center  gap-6' key={el.node.id}>
									<Link href={`tel:+${el.node.title}`} className='w-[40%]'>
										<div className=' hover:bg-slate-700 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<BsTelephoneFill />
											</h1>
											<h1 className='text-xl'>{el.node.title}</h1>
										</div>
									</Link>
									<Link href={`tel:${el.node.num}`} className='w-[40%]'>
										{console.log(el.node.title)}
										<div className=' hover:bg-slate-700 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<BsTelephoneFill />
											</h1>
											<h1 className='text-xl'>{el.node.num}</h1>
										</div>
									</Link>
									<Link href={`https://instagram.com/_u/${el.node.instagram}`} className='w-[40%]'>
										<div className=' hover:bg-slate-700 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<AiFillInstagram />
											</h1>
											<h1 className='text-xl'>{el.node.instagram}</h1>
										</div>
									</Link>
									<Link href={`https://t.me/${el.node.num}`} className='w-[40%]'>
										<div className=' hover:bg-slate-700 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<FaTelegram />
											</h1>
											<h1 className='text-xl'>{el.node.telegram}</h1>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</section>
				{/* <!-- Section: Design Block --> */}
				<section className='mb-32'>
					<div className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]"></div>
					<div className='container px-6 md:px-12'>
						<div className='block rounded-lg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]'>
							<div className='mx-auto max-w-[700px]'>
								<h1 className='text-2xl text-left'>Invest schoolda o'qing va kelajagingizni biz bilan quring</h1>
								<h1 className='pt-4'>Invest school filiali, Jomboy maktabi va o'quv sentri</h1>
							</div>
						</div>
					</div>
				</section>

				<section className='mb-32'>
					<div className='block rounded-lg bg-gray.300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700'>
						<div className='flex items-center gap-10'>
							{contact.map(el => (
								<div className='flex flex-wrap items-center  gap-6' key={el.node.id}>
									<Link href={`tel:+${el.node.title}`} className='w-[40%]'>
										<div className=' hover:bg-slate-700 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<BsTelephoneFill />
											</h1>
											<h1 className='text-xl'>{el.node.title}</h1>
										</div>
									</Link>
									<Link href={`tel:${el.node.num}`} className='w-[40%]'>
										{console.log(el.node.title)}
										<div className=' hover:bg-slate-700 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<BsTelephoneFill />
											</h1>
											<h1 className='text-xl'>{el.node.num}</h1>
										</div>
									</Link>
									<Link href={`https://instagram.com/_u/${el.node.instagram}`} className='w-[40%]'>
										<div className=' hover:bg-slate-700 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<AiFillInstagram />
											</h1>
											<h1 className='text-xl'>{el.node.instagram}</h1>
										</div>
									</Link>
									<Link href={`https://t.me/${el.node.num}`} className='w-[40%]'>
										<div className=' hover:bg-slate-700 p-10 shadow-md border-2 bg-white-800 rounded-md flex flex-col items-center gap-5'>
											<h1 className='text-3xl'>
												<FaTelegram />
											</h1>
											<h1 className='text-xl'>{el.node.telegram}</h1>
										</div>
									</Link>
								</div>
							))}
							<div className='block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-[50%]'>
								<div className='h-[500px] w-full'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2955.0987936998927!2d66.96837664999998!3d39.67078774999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sru!2s!4v1701360127322!5m2!1sru!2s'
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
