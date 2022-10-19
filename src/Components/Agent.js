import React from 'react';
import agentImage from '../Assets/FaqPage/agent-image.svg';

const Agent = () => {
	return (
		<div>
			<div className='lg:mt-24 pt-[72px] lg:pt-0 pb-[37px] lg:pb-0 lg:flex lg:flex-row-reverse  items-center'>
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
		</div>
	);
};

export default Agent;
