import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/HomePage/logo.svg';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import LogIn from './LogIn';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	const [isLogin, setIsLogin] = useState(false);

	const togglePopupPhone = () => {
		setIsLogin(!isLogin);
	};

	return (
		<header className='border-b pl-[19px] pr-[8px] py-[22px] lg:px-[70px] xl:px-[805x] xxl:px-[100px] md:px-[60px] md:py-[30px] flex items-center justify-between shadow-[0px 4px 18px rgba(0, 0, 0, 0.16)] bg-[ linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(90.01deg, #08BD46 0.84%, rgba(44, 255, 204, 0) 194.85%)]'>
			<div className='flex items-center'>
				<img src={logo} alt='wastexpert logo' />
				<p className='font-inter text-[22px] text-primary font-semibold ml-[15px] sm:hidden md:block'>
					Wastexpert
				</p>
			</div>
			<nav className='font-mulish font-semibold hidden lg:flex'>
				<ul className='flex items-center text-primary lg:space-x-[46px]'>
					<Link to='/About'>About Us</Link>
					<Link to='/Services'>Services</Link>
					<Link to='/Contact'>Contact Us</Link>
					<Link to='/Faq'>FAQ</Link>
				</ul>

				{/*<Link
					to='/LogIn'
					className='px-[80px] py-[17px] bg-primary text-white rounded-md ml-[77px]'
				>
					Login
	</Link> */}
				{/*<i className='ml-[-40px] mt-[20px]'>
					<TbEdit style={iconStyles} onClick={togglePopupPhone} />
					{isChangePhoneNumber && (
						<ChangePhoneNumber handleClose={togglePopupPhone} />
					)}
					</i>*/}
				<button
					onClick={togglePopupPhone}
					className='px-[80px] py-[17px] bg-primary text-white rounded-md ml-[77px]'
				>
					Login
					{isLogin && <LogIn handleClose={togglePopupPhone} />}
				</button>
			</nav>
			<div onClick={handleNav} className='block lg:hidden'>
				{nav ? (
					<AiOutlineClose className='text-[30px] text-[#646765]' />
				) : (
					<FaBars className='text-[30px] text-[#646765]' />
				)}
			</div>
			<div
				className={
					nav
						? 'fixed left-0 top-0 w-[100%] h-full bg-white pl-[19px] pr-[8px] py-[22px] md:px-[60px] md:py-[30px]'
						: 'fixed left-[-100%]'
				}
			>
				<div className='flex items-center justify-between'>
					<img src={logo} alt='wastexpert logo' />
					<div onClick={handleNav} className='block lg:hidden'>
						{nav ? (
							<AiOutlineClose className='text-[30px] text-[#646765]' />
						) : (
							<FaBars className='text-[30px] text-[#646765]' />
						)}
					</div>
				</div>
				<div className='flex flex-col items-center text-center pt-[25px] pb-[17px]'>
					<ul className='flex flex-col items-center text-primary text-center space-y-[28px] font-semibold'>
						<Link
							to='/About'
							className='bg-white-500 hover:bg-[#9AD1AD] px-[200px] py-[10px]'
						>
							About Us
						</Link>
						<Link
							to='/Services'
							className='bg-white-500 hover:bg-[#9AD1AD] px-[210px] py-[10px]'
						>
							Services
						</Link>
						<Link
							to='/Contact'
							className='bg-white-500 hover:bg-[#9AD1AD] px-[200px] py-[10px]'
						>
							Contact Us
						</Link>
						<Link
							to='/Faq'
							className='bg-white-500 hover:bg-[#9AD1AD] px-[210px] py-[10px]'
						>
							FAQ
						</Link>
					</ul>

					<Link
						to='/Login'
						className='px-[80px] py-[17px] bg-primary text-white rounded-md flex items-center mt-[26px]'
					>
						Login
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
