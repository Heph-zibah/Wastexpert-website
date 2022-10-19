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

	const togglePopup = () => {
		setIsLogin(!isLogin);
	};

	return (
		<header className='fixed top-0 z-50 w-full bg-white border-b pl-[19px] pr-[8px] py-[22px] lg:px-[70px] xl:px-[805x] xxl:px-[100px] md:px-[60px] md:py-[30px] flex items-center justify-between shadow-[0px 4px 18px rgba(0, 0, 0, 0.16)] bg-[ linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(90.01deg, #08BD46 0.84%, rgba(44, 255, 204, 0) 194.85%)]'>
			<div>
				<Link to='/' className='flex items-center'>
					<img src={logo} alt='wastexpert logo' />
					<p className='font-inter text-[22px] text-primary font-semibold ml-[15px] sm:hidden md:block'>
						Wastexpert
					</p>
				</Link>
			</div>
			<nav className='font-mulish font-semibold hidden lg:flex'>
				<ul className='flex items-center text-primary lg:space-x-[46px]'>
					<Link to='/About'>About Us</Link>
					<Link to='/Services'>Services</Link>
					<Link to='/Contact'>Contact Us</Link>
					<Link to='/Faq'>FAQ</Link>
				</ul>

				<button
					onClick={togglePopup}
					className='px-[80px] py-[17px] bg-primary text-white rounded-md ml-[77px]'
				>
					Login
					{isLogin && <LogIn handleClose={togglePopup} />}
				</button>
			</nav>
			<div onClick={handleNav} className='block lg:hidden z-50'>
				{nav ? (
					<AiOutlineClose className='text-[30px] text-[#646765]' />
				) : (
					<FaBars className='text-[30px] text-[#646765]' />
				)}
			</div>
			<div
				className={
					!nav
						? 'hidden'
						: 'fixed left-0 top-0 w-[100%] h-full bg-white pl-[19px] pr-[8px] py-[22px] md:px-[60px] md:py-[30px]'
				}
			>
				<div className='flex items-center justify-between'>
					<Link to='/'>
						<img src={logo} alt='wastexpert logo' />
					</Link>
				</div>
				<div className='flex flex-col items-center text-center pt-[25px] pb-[17px]'>
					<ul className='flex flex-col items-center text-primary text-center space-y-[28px] font-semibold'>
						<li className='bg-white-500 hover:bg-[#9AD1AD] px-[200px] py-[10px]'>
							<Link onClick={handleNav} to='/About'>
								About Us
							</Link>
						</li>
						<Link
							onClick={handleNav}
							to='/Services'
							className='bg-white-500 hover:bg-[#9AD1AD] px-[210px] py-[10px]'
						>
							Services
						</Link>
						<Link
							onClick={handleNav}
							to='/Contact'
							className='bg-white-500 hover:bg-[#9AD1AD] px-[200px] py-[10px]'
						>
							Contact Us
						</Link>
						<Link
							onClick={handleNav}
							to='/Faq'
							className='bg-white-500 hover:bg-[#9AD1AD] px-[210px] py-[10px]'
						>
							FAQ
						</Link>
					</ul>
					<button
						onClick={togglePopup}
						className='px-[80px] py-[17px] bg-primary text-white rounded-md flex items-center mt-[26px]'
					>
						Login
						{isLogin && <LogIn handleClose={togglePopup} />}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
