import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import aboutImg from '../Assets/HomePage/about-img.svg';
import cocacola from '../Assets/HomePage/Coca-Cola_logo 1.svg';
import jaiz from '../Assets/HomePage/jaiz-bank-logo-removebg-preview 1.svg';
import access from '../Assets/HomePage/access-logo.svg';
import briAme from '../Assets/HomePage/imgbin-logo-british-american-tobacco-brand-bat-p-csi-doh-nygy-r-kft-british-american-tobacco-0jRqspqr6319jtQ0Wkp3BKf8t__1_-removebg-preview 1.svg';
import nestle from '../Assets/HomePage/nestle-logo-1.svg';
import nigBre from '../Assets/HomePage/Nigerian-Breweries-1.svg';
import uba from '../Assets/HomePage/png-clipart-nigeria-united-bank-for-africa-logo-financial-services-bank-company-text-removebg-preview 1.svg';
import ogun from '../Assets/HomePage/92da1cd8-ogun-state-removebg-preview 1.svg';
import testimonial1 from '../Assets/HomePage/testimonial-1.svg';
import testimonial2 from '../Assets/HomePage/testimonial-2.svg';
import treasure1 from '../Assets/HomePage/treasure-1.svg';
import treasure2 from '../Assets/HomePage/treasure-2.svg';
import treasure3 from '../Assets/HomePage/treasure-3.svg';
import treasure4 from '../Assets/HomePage/treasure-4.svg';
import Accordion from '../Components/Accordion';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			{/*PARTNERS */}
			<div className='pl-[107px] pr-[99px] pt-[39px] pb-[61px] flex flex-col items-center'>
				<div className='flex items-center text-center mb-[38px]'>
					<h2 className='font-inter text-[40px] font-semibold text-primary text-center '>
						Partners
					</h2>
					<div className='bg-primary w-[48px] lg:w-[143px] h-[1px] ml-[2px]'></div>
				</div>
				<div className='grid grid-cols-3 lg:grid-cols-8 items-center'>
					<img src={cocacola} alt='cocacola logo' />
					<img src={jaiz} alt='jaiz logo' className='ml-[40px]' />
					<img src={access} alt='access logo' className='ml-[53px]' />
					<img
						src={briAme}
						alt='british american tobacco brand logo'
						className='ml-[49px]'
					/>
					<img src={nestle} alt='nestle logo' className='ml-[38px]' />
					<img src={nigBre} alt='Nigerian Breweries logo' className='ml-[23px]' />
					<img src={uba} alt='uba bank logo' className='ml-[24px]' />
					<img src={ogun} alt='ogun state logo' className='ml-[56px]' />
				</div>
			</div>
			{/*ABOUT US */}
			<div className='flex flex-col lg:flex-row px-[96px] lg:pt-[78px] lg:pb-[104px]'>
				<div>
					<img src={aboutImg} alt='workers' />
				</div>
				<div className='pt-[54px] flex flex-col  items-center lg:items-start pb-[52px] lg:w-1/2 lg:pl-[105px]'>
					<div className='flex items-center text-center '>
						<h3 className='font-mulish text-[40px] font-semibold text-primary text-center '>
							About Us
						</h3>
						<div className='bg-primary w-[48px] lg:w-[149px] h-[1px] ml-[2px]'></div>
					</div>
					<p className='font-mulish text-secondary text-[16px] text-justify mt-[44px] mb-[60px] px-[35px] lg:px-0 lg:pr-[55px]'>
						tincidunt urna non, lobortis tincidunt. Faucibus felis nulla faucibus
						tellus nunc. Platea risus nibh feugiat dui phasellus phasellus viverra ac
						leo. Pellentesque venenatis, ut risus at. dolor sit amet, consectetur
						adipiscing elit. Vitae, non, lobortis tincidunt. Faucibus felis nulla
						faucibus tellus nunc. Platea risus nibh feugiat dui phasellus phasellus
						viverra ac leo. Pellentesque venenatis, ut risus at. dolor sit amet,
						consectetur adipiscing elit. Vitae,{' '}
					</p>
					<Link
						to='/About'
						className='flex items-center bg-primary px-[35px] pt-[10px] pb-[15px] text-white rounded-md'
					>
						<IoIosArrowForward />
						<button className='text-[14px] font-mulish font-semibold'>
							Read More
						</button>
					</Link>
				</div>
			</div>
			{/*BECOME A PARTNER*/}
			<div className='bg-primary pt-[66px] pb-[131px] px-[19px] lg:pt-[82px] lg:pb-[131px] lg:pl-[99px] lg:pr-[102px] flex flex-col items-center'>
				<h4 className='text-[25px] lg:text-[40px] text-white font-inter font-semibold mb-[63px]'>
					Become a Partner
				</h4>
				<div className='flex flex-col lg:flex-row justify-between '>
					<div className='bg-white rounded-md pt-[46px] pb-[41px] pl-[41px] pr-[39px] mb-[78px] lg:mb-0'>
						<p className='text-[18px] lg:text-[22px] font-bold font-mulish text-primary mb-[48px] lg:mb-[74px]'>
							Becoming our agent with just a few simple steps
						</p>
						<ul className='ordered pl-[20px]'>
							<li className='text-[18px] font-medium font-mulish  mb-[26px] lg:mb-[24px]'>
								Sign up, Get screened, Provide the Needed Space
							</li>
							<li className='text-[18px] font-medium font-mulish  mb-[18px] lg:mb-[13px]'>
								All necessary set up kit provided
							</li>
							<li className='text-[18px] font-medium font-mulish'>
								And start earning from every kilograms you provided space for
							</li>
						</ul>
						<button className='text-[18px] font-semibold bg-primary px-[26px] py-[15px] mt-[33px] text-white lg:mt-[30px] rounded-md'>
							<Link to='/Faq'>Become an Agent</Link>
						</button>
					</div>
					<div className='h-[385px] w-[1px] bg-white   mx-[116px] hidden lg:block'></div>
					<div className='bg-white rounded-md pt-[40px] pb-[46px] pl-[32px] pr-[28px]'>
						<p className='text-[18px] lg:text-[22px] font-bold font-mulish text-primary mb-[46px] lg:mb-[76px]'>
							Becoming our agent is seamlessly simple with just a few simple steps
						</p>
						<ul className='ordered pl-[20px]'>
							<li className='text-[18px] font-medium font-mulish mb-[19px]'>
								Signup, Get Screened and approved
							</li>
							<li className='text-[18px] font-medium font-mulish mb-[14px]'>
								Set up your tools
							</li>
							<li className='text-[18px] font-medium font-mulish'>
								Accept pickup request and Collect recyclables and make money from every
								kilograms
							</li>
						</ul>
						<button className='text-[18px] font-semibold bg-white px-[26px] py-[15px] mt-[33px] text-black rounded-md border border-solid border-black'>
							<Link to='/Collector'>Become an Collector</Link>
						</button>
					</div>
				</div>
			</div>
			{/*TESTIMONIALS*/}
			<div className='bg-[#ACACAC] flex flex-col items-center px-[19px] pt-[49px] pb-[125px] lg:pl-[142px] lg:pr-[144px] lg:py-[108px]'>
				<div className='flex items-center text-center mb-[50px]'>
					<h5 className='font-mulish text-[40px] font-semibold text-primary text-center'>
						Testimonials
					</h5>
					<div className='bg-primary w-[48px] lg:w-[149px] h-[1px] ml-[2px]'></div>
				</div>

				<div className=''>
					<div className='flex flex-row-reverse items-center'>
						<div className='hidden lg:block w-4/5'>
							<img src={testimonial1} alt='avatar' />
						</div>
						<div className='bg-white rounded-[9px] pl-[43px] pr-[62px] pt-[14px]  mr-[18px] ml-[22px]'>
							<p className='font-bold text-[26px] font-mulish text-[#049637]'>
								Kolade babalola ( Uber Driver)
							</p>
							<p className='font-medium text-[10px] lgtext-[22px] font-mulish text-[#ACACAC] text-justify italic '>
								“tincidunt urna non, lobortis tincidunt. Faucibus felis nulla faucibus
								tellus nunc. Platea risus nibh feugiat dui phasellus phasellus viverra
								ac leo. Pellentesque venenatis, ut risus at. dolor sit amet, consectetur
								adipiscing elit. Vitae, faucibus tellus nunc. Platea risus nibh feugiat
								dui phasellus”
							</p>
						</div>
					</div>
					<div className='flex flex-row items-center'>
						<div className='hidden lg:block w-4/5'>
							<img src={testimonial2} alt='avatar' />
						</div>
						<div className='bg-white rounded-[9px] pl-[43px] pr-[62px] pt-[14px] ml-[18px] mr-[20px]'>
							<p className='font-bold text-[26px] font-mulish text-[#049637]'>
								Kunle Johnson( restaurant Owner)
							</p>
							<p className='font-medium text-[22px] font-mulish text-[#ACACAC] text-justify italic '>
								“Wastexpert is a life saver for me. It has taken the hassle and burdens
								of trashing my waste off my shoulders. and the most exciting thing about
								wastexpert trashing my waste is that they are doing it while am getting
								paid”
							</p>
						</div>
					</div>
				</div>
			</div>
			{/*TREASURES*/}
			<div className='bg-primary pt-[34px] pb-[57px] px-[64px] lgpt-[50px] lgpb-[57px] lgpx-[99px] flex flex-col items-center'>
				<div className='flex items-center text-center mb-[50px]'>
					<h6 className='font-mulish text-[25px] lg:text-[40px] font-semibold text-white text-center'>
						Treasures
					</h6>
					<div className='bg-white w-[48px] lg:w-[149px] h-[1px] ml-[2px]'></div>
				</div>

				<div className='font-mulish text-white text-center flex flex-col lg:flex-row flex-wrap gap-[39px] lg:gap-[15px]'>
					<div className='treasure-bg px-15 pt-[107px] pb-[47px] xl:pt-[163px] xl:pb-[122px]'>
						<img src={treasure1} alt='can bottles' />
						<p className='text-[22px] mt-[20px] '>
							Aluminium Can <br /> Containers
						</p>
					</div>
					<div className='treasure-bg px-15 pt-[107px] pb-[47px] xl:pt-[163px] xl:pb-[122px]'>
						<img src={treasure2} alt='can bottles' />
						<p className='text-[22px] mt-[20px] '>Discarded/ New Cartons</p>
					</div>
					<div className='treasure-bg px-15 pt-[107px] pb-[47px] xl:pt-[163px] xl:pb-[122px]'>
						<img src={treasure3} alt='can bottles' />
						<p className='text-[22px] mt-[20px] '>Glass Containers</p>
					</div>
					<div className='treasure-bg px-15 pt-[107px] pb-[47px] xl:pt-[163px] xl:pb-[122px]'>
						<img src={treasure4} alt='can bottles' />
						<p className='text-[22px] mt-[20px] '>Pet botles</p>
					</div>
				</div>
				<button>See more</button>
			</div>
			{/*FAQ*/}
			<div className='pt-[40px] xl:pt-[144px] pb-[54px] lg:pb-[66px]'>
				<h6 className='text-center text-primary text-[40px] font-mulish font-semibold hidden lg:block'>
					Frequently asked questions
				</h6>
				<h6 className='text-center text-primary text-[22px] font-mulish font-semibold lg:hidden'>
					FAQ
				</h6>
				<div className='mt-[34px] lg:mt-[38px] rounded-md w-full max-w-[1000px] mx-auto accordion'>
					<Accordion />
				</div>
			</div>
			{/*CONTACT*/}
			<Contact />

			<Footer />
		</div>
	);
};

export default Home;
