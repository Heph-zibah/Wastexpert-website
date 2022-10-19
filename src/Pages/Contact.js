import React from 'react';
import Navbar from '../Components/Navbar';
import { MdOutlineLocationOn } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { RiMailSendLine } from 'react-icons/ri';
import contactImg from '../Assets/ContatPage/contact-img.svg';
import Footer from '../Components/Footer';

const Contact = () => {
	return (
		<div>
			<Navbar />
			{/*hero */}
			<div className='mt-24 pt-[72px] lg:pt-0 pb-[37px] lg:pb-0 lg:flex lg:flex-row-reverse  items-center contact'>
				<div className='lg:w-5/6 contact-bg lg:pt-[96px]'>
					<img
						src={contactImg}
						alt='a lady making phone call'
						className=':ml-[20px] mb-[60px] xl:ml-[70px] xl:mb-[60px]'
					/>
				</div>
				<div className='bg-primary w-full h-[39px] lg:hidden'></div>
				<div className='px-[19px] text-center lg:text-start lg:px-0 lg:pl-[70px] xl:pl-[102px] pt-[29px] lg:pt-0'>
					<h1 className='font-bold text-[36px] lg:text-[46px] xl:text-[66px] text-primary font-inter leading-[110.02%] xl:pr-[70px]'>
						You deserved the best service
					</h1>
					<p className='font-mulish text-secondary px-5 lg:px-0 mt-[29px] lg:mt-[59px] lg:text-[18px] lg:pr-[210px]'>
						Our Customer Representatives are always standby to attend to your
						enquireis asap... you can also use our Chat Bot to talk to us for any
						urgent intervention.
					</p>
				</div>
			</div>
			{/*address*/}
			<div className='flex flex-col-reverse lg:flex-row  justify-between xl:px-[112px] py-[39px]'>
				<div className='mx-auto lg:mx-0 mt-[30px] lg:mt-0'>
					<div className='flex flex-col items-center lg:items-start'>
						<h2 className='pt-[13px] pb-[20px] pl-[47px]  pr-[46px] text-white bg-primary font-bold w-[255px]'>
							HEAD ADDRESS
						</h2>
						<div className='mt-[19px]'>
							<div className='flex items-center '>
								<MdOutlineLocationOn className='text-primary text-[20px] mr-4' />
								<p className='font-semibold text-secondary text-[22px]'>
									Road 3, Soas Estate, Adigbe, along <br /> Obada road, Abeokuta, Ogun
									State.
								</p>
							</div>
							<div className='flex items-center my-[52px]'>
								<BiPhoneCall className='text-primary text-[20px] mr-4' />
								<p className='font-semibold text-secondary text-[22px]'>
									Phone<span className='text-primary'>(+234)</span> 903 961 9448
								</p>
							</div>
							<div className='flex items-center '>
								<RiMailSendLine className='text-primary text-[20px] mr-4' />
								<p className='font-semibold text-secondary text-[22px]'>
									Info@wastexpert.com <br /> Inquiry@wastexpert.com
								</p>
							</div>
						</div>
					</div>
					<div className='mt-[63px] flex flex-col items-center lg:items-start'>
						<h2 className='pt-[13px] pb-[20px] pl-[47px]  pr-[46px] text-white bg-primary font-bold w-[255px]'>
							OFFICE HOURS
						</h2>
						<div className='mt-[19px]'>
							<div className='flex items-center '>
								<RiMailSendLine className='text-primary text-[20px] mr-4' />
								<p className='font-semibold text-secondary text-[22px]'>
									<span className='text-primary'>Monday - Friday</span> <br /> 7:45 AM -
									5:00PM
								</p>
							</div>
							<p className='text-primary text-[22px] font-semibold mt-5'>
								Except on public Holiday
							</p>
						</div>
					</div>
					<div className='mt-[19px] flex flex-col items-center lg:items-start'>
						<h2 className='pt-[13px] pb-[20px] pl-[47px]  pr-[46px] text-white bg-primary font-bold w-[255px]'>
							OUR MAP
						</h2>
					</div>
				</div>
				<div className='border border-[#9AD1AD] rounded-md w-[396px] pt-[39px] px-[42px] pb-[24px] lg:pt-[99px] lg:px-[62px] :pb-[64px] mx-auto lg:mx-0'>
					<p className='text-primary  text-[22px] mb-[46px] font-semibold'>
						Get in touch
					</p>
					<form action='' className='flex flex-col'>
						<label htmlFor='name' className='text-[18px] mb-[8px]'>
							Name
						</label>
						<input
							type='text'
							placeholder='Your full name'
							className='border border-[#9AD1AD] text-[#9AD1AD] py-[12px] px-[13px] rounded-sm mb-[15px]'
						/>
						<label htmlFor='email' className='text-[18px] mb-[8px]'>
							Email Address
						</label>
						<input
							type='email'
							placeholder='Your email address here'
							className='border border-[#9AD1AD] text-[#9AD1AD] py-[12px] px-[13px] rounded-sm mb-[15px]'
						/>
						<label htmlFor='subject' className='text-[18px] mb-[8px]'>
							Subject
						</label>
						<input
							type='text'
							className='border border-[#9AD1AD] text-[#9AD1AD] py-[12px] px-[13px] rounded-sm mb-[15px]'
						/>
						<label htmlFor='message' className='text-[18px] mb-[8px]'>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							cols='30'
							rows='10'
							className='border border-[#9AD1AD] text-[#9AD1AD] py-[12px] px-[13px] rounded-sm'
						></textarea>
						<button className='bg-primary text-white font-bold rounded-md py-[8px] mt-[38px] lg:mt-[118px]'>
							Send
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
