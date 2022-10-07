import React from 'react';
import heroImg from '../Assets/HomePage/hero-img.svg';
import { AiOutlinePlayCircle } from 'react-icons/ai';

const Hero = () => {
	return (
		<div>
			<div className='pt-[72px] lg:pt-0 pb-[37px] lg:pb-0 lg:flex lg:flex-row-reverse  items-center'>
				<div className='lg:w-5/6 hero-bg lg:pt-[96px]'>
					<img src={heroImg} alt='a man holding waste' className='lg:mr-[102px]' />
				</div>
				<div className='bg-primary w-full h-[39px] lg:hidden'></div>
				<div className='px-[19px] text-center lg:text-start lg:px-0 lg:pl-[70px] xl:pl-[102px] pt-[29px] lg:pt-0'>
					<h1 className='font-bold text-[36px] lg:text-[46px] xl:text-[66px] text-primary font-inter leading-[110.02%]'>
						Waste to Wealth <br /> just got better
					</h1>
					<p className='font-mulish text-secondary px-5 lg:px-0 mt-[29px] lg:mt-[59px] lg:text-[18px] lg:pr-[210px]'>
						The Waste to Wealth Mission brings scientific processing of waste to the
						forefront to build a zero landfill and zero waste nation.
					</p>

					<div className='flex mt-[44px] items-center text-center pl-[31px] pr-[44px] w-full lg:px-0 lg:text-[18px] lg:mt-[73px]'>
						<button className='rounded-sm pl-[32px] pr-[33px] pt-[10px] pb-[17px] bg-primary text-white font-semibold text-sm lg:px-[52px] lg:py-[15px]'>
							Get Started
						</button>
						<button className='rounded-sm flex items-center bg-black pl-[24px] pr-[17px] pt-[9px] pb-[10.99px] text-white ml-[33px] lg:px-[35px] lg:pt-[12px] lg:pb-[10]'>
							<AiOutlinePlayCircle className='text-[20px] lg:text-[32px]' />
							<span className='ml-[12px]'> Press Play</span>
						</button>
					</div>
				</div>
			</div>
			<div className='bg-primary w-full h-[39px] hidden lg:block'></div>
		</div>
	);
};

export default Hero;
