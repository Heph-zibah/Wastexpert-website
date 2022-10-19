import React from 'react';
import Navbar from '../Components/Navbar';
import aboutHero from '../Assets/AboutPage/about-hero.svg';
import aboutLine from '../Assets/AboutPage/about-line.svg';
import chinaWaste from '../Assets/AboutPage/China-waste-1.svg';
import bin from '../Assets/AboutPage/bin-1.svg';
import bottle from '../Assets/AboutPage/bottle-1.svg';
import Footer from '../Components/Footer';

const About = () => {
	return (
		<div>
			<Navbar />
			{/*HERO SECTION */}
			<div className='mt-20'>
				<div className='flex flex-col lg:flex-row-reverse'>
					<div className=''>
						<img src={aboutHero} alt='three people' />
					</div>
					<div className='bg-primary w-full h-[39px] lg:hidden'></div>
					<div className='px-[19px] pt-[29px] md:px-[60px] text-justify flex flex-col items-center lg:w-1/2 lg:items-start lg:px-0 lg:pt-[32px] lg:pl-[70px] xl:pl-[85px] xxl:pl-[113px] xl:pt-[42px] xxl:pt-[62px]'>
						<div>
							<h1 className='font-inter text-primary font-bold text-[40px]'>
								About Us
							</h1>
							<img src={aboutLine} alt='a divider' />
						</div>
						<p className='font-mulish text-[18px] text-[#666666] pt-[20px] lg:pt-[33px] xl:pr-[14px]  xxl:pr-[114px] lg:text-justify xl:leading-[140%] '>
							Wastexpert is a waste recycling and social benefit venture borne out of
							sheer passion and vision to transform our environment into a zero
							landfill and zero waste nation. We operates an incentive-based scheme
							which collects recyclable materials from enerprie and households by
							giving them a chance to generate value from their waste and provide a
							reliable supply of raw material to the local recycling industry. And in
							turn rewards them with “Points” which they can accumulate overtime and
							cash out or use to redeem/shop for household items offered through our
							Wastexpert- store.
						</p>
					</div>
				</div>
				<div className='bg-primary w-full h-[56px] hidden lg:block'></div>
			</div>
			{/*WASTE MENACE SECTION */}
			<div className='flex flex-col lg:flex-row mt-20 lg:mt-0'>
				<div className='lg:mt-[70px] xl:mt-0 '>
					<img src={chinaWaste} alt='dirt' />
				</div>
				<div className='px-[19px] pt-[29px] md:px-[60px] text-center flex flex-col items-center lg:w-1/2 lg:items-start lg:text-start lg:pl-[34px] lg:pr-[60px] xl:pr-[85px] xxl:pr-[142px] lg:pt-[61px] xl:pt-[21px] xxl:pt-[31px]'>
					<div>
						<h2 className='font-inter text-primary font-bold text-[40px]'>
							Waste Menace
						</h2>
						<img src={aboutLine} alt='divider' />
					</div>
					<p className='font-mulish text-[18px] text-[#666666] pt-[20px] lg:pt-[33px] xl:pt-[23px] xxl:pt-[33px] text-justify lg:leading-[140%] '>
						It is a common sight to see our streets, drainages, roadsides and even
						dumpsites packed with recyclable packaging materials which are carelessly
						disposed of by users. This practice often poses environmental hazards to
						communities as they experience flood due to the blockage of water
						drainages by most of these recyclables which has become the fastest
						growing packaging option in the beverage and food industry. Lagos State
						(our pilot location) has an estimated population of 17 million people and
						daily generates an average of 9,000 metric tonnes of waste of which 1,200
						metric tonnes are currently recycled. Recyclables form the bulk of
						identifiable items at refuse points in Nigeria. Often times, the drainage
						channels in the metropolis cities are blocked by these recyclable items
						and the resultant effect during the rainy season is flood and breeding
						ground for harmful organisms.
					</p>
				</div>
			</div>
			{/*SOLUTION SECTION */}
			<div className='flex flex-col lg:flex-row-reverse mt-[64px] relative'>
				<div className='flex about-bg  w-full items-end justify-between'>
					<img
						src={bottle}
						alt='bottles'
						className=' ml-[-50px] xl:ml-0 w-[70%] xxl:w-[100%]'
					/>
					<img
						src={bin}
						alt='waste bin'
						className='ml-[-190px] md:ml-[-200px] xl:ml-[-210px] xxl:ml-[-230px] w-[70%] xxl:w-[100%]'
					/>
				</div>

				<div className='lg:w-1/2 mt-[40px] lg:mt-0 px-[19px] md:px-[60px] lg:pl-[70px] lg:pr-[10px] xl:pr-[100px]'>
					<div>
						<h3 className='font-inter text-primary font-bold text-[40px]'>
							Our Solution
						</h3>
						<img src={aboutLine} alt='divider' />
					</div>
					<p className='font-mulish text-[18px] text-[#666666] pt-[20px] lg:pt-[33px] lg:pr-[14px] text-justify lg:leading-[140%] lg:mt-[30px] xl:mt-[30px] xxl:mt-[100px]'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis leo auctor
						a scelerisque vel sit cras eu consectetur. Viverra venenatis, mauris diam
						dolor cras a. Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst
						eu urna, at odio scelerisque pulvinar a, magna. Vulputate. sit amet,
						consectetur adipiscing elit. Mollis leo auctor a scelerisque vel sit cras
						eu consectetur. Viverra venenatis, mauris diam dolor cras a. Lectus massa
						aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at odio
						scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing elit.
						Mollis leo auctor a scelerisque vel sit cras eu consectetur. Viverra
						venenatis, mauris diam dolor cras a. Lectus massa aenean neque pulvinar
						tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna.{' '}
					</p>
				</div>
			</div>
			{/*QUOTE SECTION */}
			<div className='px-[19px] py-[80px] md:px-[60px] lg:pb-[110px] lg:pt-[105px] xl:pb-[170px] xl:pt-[155px] text-center font-mulish quote lg:px-[172px] xl:px-[200px] xxl:px-[272px]'>
				<p className='text-primary font-semibold  text-[30px]'>
					If you care about the environment and how it will affect mankind, then
					recycling shoudn’t take a second thought.
				</p>
				<p className='text-[18px]'>Jeffery Sanderson</p>
			</div>
			<Footer />
		</div>
	);
};

export default About;
