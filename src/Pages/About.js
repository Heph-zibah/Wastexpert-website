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
			<div>
				<div className='flex flex-col lg:flex-row-reverse'>
					<div className=''>
						<img src={aboutHero} alt='three people' />
					</div>
					<div className='bg-primary w-full h-[39px] lg:hidden'></div>
					<div className='px-[19px] pt-[29px] text-justify flex flex-col items-center lg:w-1/2 lg:items-start lg:px-0 lg:pl-[70px] xl:pl-[113px] lg:pt-[62px]'>
						<div>
							<h1 className='font-inter text-primary font-bold text-[40px]'>
								About Us
							</h1>
							<img src={aboutLine} alt='a divider' />
						</div>
						<p className='font-mulish text-[18px] text-[#666666] pt-[20px] lg:pt-[33px] lg:pr-[114px] lg:text-justify lg:leading-[140%] '>
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
			<div className='flex flex-col lg:flex-row mt-20 lg:mt-0'>
				<div>
					<img src={chinaWaste} alt='dirt' />
				</div>
				<div className='px-[19px] pt-[29px] text-center flex flex-col items-center lg:w-1/2 lg:items-start lg:text-start lg:pl-[34px] lg:pr-[142px] lg:pt-[61px]'>
					<div>
						<h2 className='font-inter text-primary font-bold text-[40px]'>
							Waste Menace
						</h2>
						<img src={aboutLine} alt='divider' />
					</div>
					<p className='font-mulish text-[18px] text-[#666666] pt-[20px] lg:pt-[33px] text-justify lg:leading-[140%] '>
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
			<div className='flex flex-col lg:flex-row-reverse mt-[64px]'>
				<div className='flex about-bg '>
					<img src={bottle} alt='bottles' className='mb-[-200px] ml-[-100px]' />
					<img src={bin} alt='waste bin' className='ml-[-230px]' />
				</div>

				<div className='w-1/2 lg:pl-[70px] xl:pl-[113px]'>
					<div>
						<h3 className='font-inter text-primary font-bold text-[40px]'>
							Our Solution
						</h3>
						<img src={aboutLine} alt='divider' />
					</div>
					<p className='font-mulish text-[18px] text-[#666666] pt-[20px] lg:pt-[33px] lg:pr-[14px] lg:text-justify lg:leading-[140%] lg:mt-[170px]'>
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
			<Footer />
		</div>
	);
};

export default About;
