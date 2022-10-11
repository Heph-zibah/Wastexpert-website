import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
	return (
		<div className='mx-auto bg-[rgba(0,0,0,0.7)] w-full flex items-center justify-center fixed top-0 left-0 h-[100vh]'>
			<div className='bg-white [w-369px] px-[25px] pt-[43px] pb-[50px]'>
				<h1 className='text-lg font-semibold font-inter text-primary mb-[41px] text-center'>
					Log in
				</h1>
				<form action='' className='flex flex-col text-start'>
					<label htmlFor='email' className='pb-[9px] font-semibold text-black'>
						Email Address
					</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Your email address here'
						className='text-[#9AD1AD] text-xs py-[10px] px-[15px] rounded-lg border '
					/>
					<label
						htmlFor='password'
						className='mt-[17px] pb-[9px] font-semibold text-black'
					>
						Password
					</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='********'
						className='text-[] text-xs py-[10px] px-[15px] rounded-lg border'
					/>
					<p className='pt-[7px] text-[14px] font-semibold text-black'>
						Forgot Password?
					</p>

					<button className='rounded-lg text-white bg-primary px-[144px] py-[4px] font-semibold mt-[30px]'>
						Login
					</button>
				</form>
				<p className='text-xs font-semibold pt-[20px] text-black'>
					Already have an account? <Link className='text-primary'>Sign in</Link>
				</p>
			</div>
		</div>
	);
};

export default LogIn;
