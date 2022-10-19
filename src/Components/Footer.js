import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillMediumCircle } from 'react-icons/ai';
import logo from '../Assets/HomePage/logo-white.svg';

const Footer = () => {
	return (
		<div className='bg-primary flex flex-col text-white px-[27px] pt-[41px] pb-[24px] md:px-[60px] lg:px-[70px] xl:px-[85px] xxl:pl-[103px] xxl:pr-[105px] lg:pb-[28.42px] lg:pt-[89px]'>
			<div className='lg:grid  lg:grid-cols-12 lg:justify-between'>
				<div className='lg:col-start-1 lg:col-end-5 xxl:col-start-1 xxl:col-end-4'>
					<div className='flex flex-col items-center '>
						<div>
							<img src={logo} alt='wastexpert logo' />
						</div>
						<p className='font-inter text-[22px] text-primary font-semibold'>
							Wastexpert
						</p>
					</div>
					<div>
						<p className='text-justify font-mulish'>
							Wastexpert is a waste recycling and social benefit venture borne out of
							sheer passion and vision to transform our environment into a zero
							landfill and zero waste nation. We operates an incentive-based scheme
							which collects recyclable materials from post consumers and in turn
							rewards them with “Points” which they can accumulate overtime and cash
							out or use to redeem/shop for household items offered through our
							Wastexpert store.
						</p>
					</div>
				</div>
				<div className='lg:col-start-6 lg:col-end-13'>
					<div className='flex flex-col items-start lg:items-end mb-[61px] lg:mb-[73px] mt-[50px] lg:mt-0'>
						<p className='font-mulish font-semibold text-[18px] text-start flex items-start mb-[8px]'>
							Subscribe to our Newsletter
						</p>
						<form className='flex w-full max-w-[470px] flex-col gap-[20px] lg:flex-row lg:gap-0'>
							<input
								type='text'
								placeholder='Enter your email address here'
								className='px-[20px] py-[9px] lg:pl-[36px] lg:pt-[13px] lg:pb-[16px] lg:pr-[54px] rounded-lg italic text-[18px]'
							/>
							<button className='rounded-lg bg-black px-[20px] py-[9px] lg:pl-[36px] lg:pt-[13px] lg:pb-[16px] lg:pr-[35px] font-mulish text-[18px]'>
								Sign Up
							</button>
						</form>
					</div>
					<div>
						<div className=''>
							<ul className='flex flex-col text-center font-mulish space-y-[44px] mb-[71.94px] lg:mb-0 lg:hidden'>
								<Link to='/About' className='font semibold text-[18px]'>
									About
								</Link>
								<Link to='/Services' className='font semibold text-[18px]'>
									Services
								</Link>
								<Link to='/Contact' className='font semibold text-[18px]'>
									Contact Us
								</Link>
								<Link to='/Faq' className='font semibold text-[18px]'>
									FAQ
								</Link>
							</ul>
						</div>
						<div className='lg:flex justify-between hidden '>
							<ul className='flex flex-col '>
								<li className='font-semibold text-[20px] font-inter mb-[15px]'>
									About
								</li>
								<Link to='/' className='mb-[8px]'>
									Our Mission
								</Link>
								<Link to='/' className='mb-[8px]'>
									Vision
								</Link>
								<Link to='/' className='mb-[8px]'>
									Solutions
								</Link>
								<Link to='/'>Teams</Link>
							</ul>
							<ul className='flex flex-col'>
								<li className='font-semibold text-[20px] font-inter mb-[15px]'>
									Contact Us
								</li>
								<Link to='/' className='mb-[8px]'>
									Our Mission
								</Link>
								<Link to='/' className='mb-[8px]'>
									Vision
								</Link>
								<Link to='/' className='mb-[8px]'>
									Solutions
								</Link>
								<Link to='/'>Teams</Link>
							</ul>
							<ul className='flex flex-col'>
								<li className='font-semibold text-[20px] font-inter mb-[15px]'>
									Services
								</li>
								<Link to='/' className='mb-[8px]'>
									Waste to wealth pick up
								</Link>
								<Link to='/' className='mb-[8px]'>
									Flip it
								</Link>
								<Link to='/' className='mb-[8px]'>
									Waste drop off point
								</Link>
								<Link to='/'>Corporate Recycling</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-[rgba(255, 255, 255, 0.35)] h-[1px] border mb-[29px] mt-[100px] hidden lg:block'></div>
			<div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
				<div className='font-mulish text-[14px] lg:text-[18px]'>
					<p>Copyright © 2020, Created by Wastexpert Team</p>
				</div>
				<div className='w-full bg-[rgba(255, 255, 255, 0.35)] h-[1px] border border-dotted my-[19px] lg:hidden'></div>
				<div className='flex space-x-[24.66px] '>
					<FaFacebook className='text-[30px]' />
					<FaInstagramSquare className='text-[30px]' />
					<AiFillTwitterCircle className='text-[30px]' />
					<FaLinkedin className='text-[30px]' />
					<AiFillMediumCircle className='text-[30px]' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
