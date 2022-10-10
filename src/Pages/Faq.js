import React from 'react';
import Navbar from '../Components/Navbar';
import agentImage from '../Assets/FaqPage/agent-image.svg';
import profit from '../Assets/FaqPage/profit.svg';
import truck from '../Assets/FaqPage/truck.svg';
import settings from '../Assets/FaqPage/settings.svg';
import Accordion from '../Components/Accordion';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Faq = () => {
	return (
		<div>
			<Navbar />
			{/*HERO*/}
			<div className='pt-[72px] lg:pt-0 pb-[37px] lg:pb-0 lg:flex lg:flex-row-reverse  items-center'>
				<div className='lg:w-5/6 hero-bg lg:pt-[96px]'>
					<img src={agentImage} alt='agent pic' />
				</div>
				<div className='px-[19px] text-center lg:text-start lg:px-0 lg:pl-[70px] xl:pl-[102px] pt-[29px] lg:pt-[90px]'>
					<h1 className='font-bold text-[36px] lg:text-[46px] xl:text-[66px] text-primary font-inter leading-[140.02%] lg:pr-[50px] xxl:pr-[150px]'>
						Love to Chill with the ‘BIG’ boys?
					</h1>
					<p className='font-mulish text-secondary px-5 lg:px-0 mt-[29px] lg:mt-[59px] lg:text-[18px] lg:pr-[210px]'>
						Then sign up, Get screened to be our Agent. We will provide you with all
						the neccessary equipment to work with, as well as Customers to transact
						with. Start earn immediately!
					</p>
					<button className='mt-[44px] font-semibold bg-primary text-white px-[33px] py-[17px] rounded-md'>
						Become an agent
					</button>
				</div>
			</div>
			{/*INFO */}
			<div className='font-mulish pt-[29px] pb-[23px] px-[19px] text-center lg:text-start lg:px-0 lg:pl-[70px] xl:pl-[126px] xl:pr-[120px]  lg:pt-[90px]'>
				<h2 className='text-[32px] font-bold text-center'>
					Here is why You should roll with us
				</h2>
				<div className='flex flex-col md:flex-row pt-[39px] justify-between items-center space-y-[70px] md:space-y-0 md:space-x-[40px] lg:space-x-[140px] text-center'>
					<div className='flex flex-col items-center'>
						<img src={profit} alt='icon' />
						<p className='text-[#676B69] mt-[23.31px]'>
							Get commission on every kilogram collected from your outlet
						</p>
					</div>
					<div className='flex flex-col items-center'>
						<img src={truck} alt='icon' />
						<p className='text-[#676B69] mt-[23.31px]'>
							Get disposal traffic directed to your outlet by our collectors and
							individuals looking to drop-off
						</p>
					</div>
					<div className='flex flex-col items-center'>
						<img src={settings} alt='icon' />
						<p className='text-[#676B69] mt-[23.31px]'>
							Get all the tools you need to run your business with zero setup cost
						</p>
					</div>
				</div>
			</div>
			{/*ACCORDION */}
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

export default Faq;
