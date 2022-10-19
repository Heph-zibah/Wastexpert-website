import React from 'react';
import Navbar from '../Components/Navbar';
import truck from '../Assets/ServicesPage/hero.svg';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import divider from '../Assets/AboutPage/about-line.svg';
import drop from '../Assets/ServicesPage/drop.svg';
import waste from '../Assets/ServicesPage/waste.svg';
import flip from '../Assets/ServicesPage/flip.svg';
import Footer from '../Components/Footer';

const Services = () => {
	return (
		<div>
			<Navbar />
			{/*HERO */}

			<div className='lg:mt-24 pt-[72px] lg:pt-0 pb-[37px] lg:pb-[80px] lg:flex lg:flex-row-reverse  items-center'>
				<div className=' hero-bg lg:pt-[96px]'>
					<img src={truck} alt='a man holding waste' className='lg:mr-[102px]' />
				</div>

				<div className='px-[19px] text-center lg:text-start lg:px-0 lg:pl-[70px] xl:pl-[102px] pt-[29px] lg:pt-[70px] lg:w-4/5'>
					<div className='flex flex-col items-center lg:items-start'>
						<h1 className='font-bold text-[26px] lg:text-[26px] xl:text-[48px] text-primary font-inter leading-[110.02%]'>
							Pick up
						</h1>
						<img src={divider} alt='divider' />
					</div>
					<p className='text-justify font-mulish text-secondary px-5 lg:px-0 mt-[29px] lg:mt-[50px] lg:text-[18px] lg:pr-[110px]'>
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
						tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna.
					</p>

					<div className='flex mt-[44px] items-center text-center px-[14px] lg:pl-[31px]  lg:pr-[44px] w-full lg:px-0 lg:text-[18px] lg:mt-[73px]'>
						<button className='rounded-md px-[12px] pt-[10px] pb-[10px] bg-primary text-white font-semibold text-sm lg:px-[52px] lg:py-[15px]'>
							Pick up Request
						</button>
						<button className='rounded-md flex items-center bg-black pl-[14px] pr-[12px] pt-[9px] pb-[10.99px] text-white ml-[33px] lg:px-[35px] lg:pt-[12px] lg:pb-[10]'>
							<AiOutlinePlayCircle className='text-[20px] lg:text-[32px]' />
							<span className='ml-[12px]'> Watch Video</span>
						</button>
					</div>
				</div>
			</div>

			{/*DROP IT */}
			<div className='pt-[72px] lg:pt-0 pb-[37px] lg:pb-[84px] lg:flex lg:flex-row  items-center xl:px-[102px]'>
				<div className=' hero-bg lg:pt-[96px]'>
					<img src={drop} alt='a man holding waste' className='lg:mr-[102px]' />
				</div>

				<div className='px-[19px] text-center lg:text-start lg:px-0 lg:pl-[70px] xl:pl-[102px] pt-[29px] lg:pt-[150px] w-4/5'>
					<div>
						<h1 className='font-bold text-[26px] lg:text-[26px] xl:text-[48px] text-primary font-inter leading-[110.02%]'>
							Drop Off
						</h1>
						<img src={divider} alt='divider' />
					</div>
					<p className='text-justify font-mulish text-secondary px-5 lg:px-0 mt-[29px] lg:mt-[50px] lg:text-[17px] '>
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
						tortor, a. Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna.
					</p>

					<div className='flex mt-[44px] items-center text-center pl-[31px] pr-[44px] w-full lg:px-0 lg:text-[18px] lg:mt-[73px]'>
						<button className='rounded-md pl-[32px] pr-[33px] pt-[10px] pb-[17px] bg-primary text-white font-semibold text-sm lg:px-[52px] lg:py-[15px]'>
							View locations
						</button>
						<button className='rounded-md flex items-center bg-black pl-[24px] pr-[17px] pt-[9px] pb-[10.99px] text-white ml-[33px] lg:px-[35px] lg:pt-[12px] lg:pb-[10]'>
							<AiOutlinePlayCircle className='text-[20px] lg:text-[32px]' />
							<span className='ml-[12px]'> Watch Video</span>
						</button>
					</div>
				</div>
			</div>

			{/*OTHER SERVICES */}
			<div className='service-bg xl:px-[131px] xl:pt-[41px] xl:pb-[95px] '>
				<h3 className='text-primary text-[48px] font-bold text-center'>
					Other Services
				</h3>
				<div className='flex flex-col lg:flex-row gap-[49px] pt-[51px]'>
					<div className='bg-white px-[27px] pt-[48px] pb-[45px] rounded-lg flex flex-col items-center text-justify font-mulish'>
						<div>
							<img src={waste} alt='icon' />
						</div>
						<p className='font-medium text-[22px] text-primary mt-[24px] mb-[23px]'>
							Corporate Recycling
						</p>
						<p className='text-primary text-[14px] mb-[51px]'>
							Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate.
							sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque
							vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a.
							Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at
							odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing
							elit. Mollis leo auctor a
						</p>
						<button className='bg-primary text-white rounded-md px-[52px] py-[15px]'>
							Get Started
						</button>
					</div>
					<div className='bg-white px-[27px] pt-[48px] pb-[45px] rounded-lg flex flex-col items-center text-justify font-mulish'>
						<div>
							<img src={flip} alt='icon' />
						</div>
						<p className='font-medium text-[22px] text-primary mt-[24px] mb-[23px]'>
							Flip it
						</p>
						<p className='text-primary text-[14px] mb-[51px]'>
							Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate.
							sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque
							vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a.
							Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at
							odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing
							elit. Mollis leo auctor a
						</p>
						<button className='bg-primary text-white rounded-md px-[52px] py-[15px]'>
							Get Started
						</button>
					</div>
					<div className='bg-white px-[27px] pt-[48px] pb-[45px] rounded-lg flex flex-col items-center text-justify font-mulish'>
						<div>
							<img src={waste} alt='icon' />
						</div>
						<p className='font-medium text-[22px] text-primary mt-[24px] mb-[23px]'>
							Recce
						</p>
						<p className='text-primary text-[14px] mb-[51px]'>
							Nisl, dictumst eu urna, at odio scelerisque pulvinar a, magna. Vulputate.
							sit amet, consectetur adipiscing elit. Mollis leo auctor a scelerisque
							vel sit cras eu consectetur. Viverra venenatis, mauris diam dolor cras a.
							Lectus massa aenean neque pulvinar tortor, a. Nisl, dictumst eu urna, at
							odio scelerisque pulvinar a, magna. Vulputate. consectetur adipiscing
							elit. Mollis leo auctor a
						</p>
						<button className='bg-primary text-white rounded-md px-[52px] py-[15px]'>
							Get Started
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Services;
