import React from 'react';
import profit from '../Assets/FaqPage/profit.svg';
import truck from '../Assets/FaqPage/truck.svg';
import settings from '../Assets/FaqPage/settings.svg';

const WhyRoll = () => {
	return (
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
	);
};

export default WhyRoll;
