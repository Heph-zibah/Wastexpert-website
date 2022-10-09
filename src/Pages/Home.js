import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import aboutImg from '../Assets/HomePage/about-img.svg';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<div className='flex flex-col lg:flex-row px-[96px] lg:pt-[78px] lg:pb-[104px]'>
				<div>
					<img src={aboutImg} alt='workers' />
				</div>
				<div className='pt-[54px] flex flex-col  items-center lg:items-start pb-[52px] lg:w-1/2 lg:pl-[105px]'>
					<div className='flex items-center text-center '>
						<h3 className='font-mulish text-[25px] font-semibold text-primary text-center '>
							About Us
						</h3>
						<div className='bg-primary w-[48px] h-[1px] ml-[2px]'></div>
					</div>
					<p className='font-mulish text-secondary text-[16px] text-justify mt-[44px] mb-[60px] px-[35px] lg:px-0 lg:pr-[55px]'>
						tincidunt urna non, lobortis tincidunt. Faucibus felis nulla faucibus
						tellus nunc. Platea risus nibh feugiat dui phasellus phasellus viverra ac
						leo. Pellentesque venenatis, ut risus at. dolor sit amet, consectetur
						adipiscing elit. Vitae, non, lobortis tincidunt. Faucibus felis nulla
						faucibus tellus nunc. Platea risus nibh feugiat dui phasellus phasellus
						viverra ac leo. Pellentesque venenatis, ut risus at. dolor sit amet,
						consectetur adipiscing elit. Vitae,{' '}
					</p>
					<div className='flex items-center bg-primary px-[35px] pt-[10px] pb-[15px] text-white rounded-md'>
						<IoIosArrowForward />
						<button className='text-[14px] font-mulish font-semibold'>
							Read More
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
