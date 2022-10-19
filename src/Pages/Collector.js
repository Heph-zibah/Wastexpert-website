import React from 'react';
import Navbar from '../Components/Navbar';
import WhyRoll from '../Components/WhyRoll';
import Accordion from '../Components/Accordion';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Collector = () => {
	return (
		<div>
			<Navbar />
			<div className='mt-24'></div>
			<WhyRoll />
			<div className='pt-[40px] xl:pt-[144px] pb-[54px] lg:pb-[66px]'>
				<h6 className='text-center text-primary text-[40px] font-mulish font-semibold hidden lg:block'>
					Frequently asked questions
				</h6>
				<h6 className='text-center text-primary text-[22px] font-mulish font-semibold lg:hidden'>
					FAQ
				</h6>
				<div className='mt-[34px] lg:mt-[38px] rounded-md w-[390px] lg:w-[1000px] mx-auto accordion'>
					<Accordion />
				</div>
			</div>
			<Contact />
			<Footer />
		</div>
	);
};

export default Collector;
