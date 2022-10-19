import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<div className='mx-auto bg-[rgba(0,0,0,0.7)] w-full flex items-center justify-center fixed top-0 left-0 h-[100vh]'>
			<div className='bg-white w-full max-w-[400px] px-[25px] pt-[43px] pb-[50px]'>
				<h1 className='text-lg font-semibold font-inter text-primary mb-[41px] text-center'>
					Sign Up
				</h1>
				<form action='' className='flex flex-col text-start'>
					<label
						htmlFor='name'
						className='pb-[9px] font-semibold text-black  pt-[9px]'
					>
						Name
					</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Your full name here'
						className='text-[#9AD1AD] text-xs py-[10px] px-[15px] rounded-lg border border-[#9AD1AD]'
					/>
					<label
						htmlFor='email'
						className='pb-[9px] font-semibold text-black  pt-[9px]'
					>
						Email Address
					</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Your email address here'
						className='text-[#9AD1AD] text-xs py-[10px] px-[15px] rounded-lg border border-[#9AD1AD]'
					/>
					<div className='flex items-center justify-between pt-[9px] font-semibold text-black'>
						<div className='flex flex-col'>
							<label htmlFor='password' className='pb-[9px]'>
								Password
							</label>
							<input
								type='password'
								name='password'
								id='password'
								placeholder='*******'
								className='text-[#9AD1AD] text-xs py-[10px] px-[10px] rounded-lg border border-[#9AD1AD]'
							/>
						</div>
						<div className='flex flex-col'>
							<label htmlFor='password2' className='pb-[9px]'>
								Confirm Password
							</label>
							<input
								type='password'
								name='password2'
								id='password2'
								placeholder='*******'
								className='text-[#9AD1AD] text-xs py-[10px] px-[10px] rounded-lg border border-[#9AD1AD]'
							/>
						</div>
					</div>
					<label
						htmlFor='phoneNumber'
						className='pb-[9px] font-semibold text-black  pt-[9px]'
					>
						Phone number
					</label>
					<div className='flex'>
						<input
							type='text'
							name='phoneNumber'
							id='phoneNumber'
							placeholder='09039619448'
							className='text-[#9AD1AD] text-xs py-[10px] px-[10px] rounded-lg border border-[#9AD1AD]'
						/>
					</div>
					<button className='rounded-lg text-white bg-primary px-[104px] py-[4px] font-semibold mt-[30px]'>
						create account
					</button>
				</form>
				<p className='text-xs font-semibold pt-[20px] text-black text-center'>
					Already have an account?{' '}
					<Link to='/LogIn' className='text-primary'>
						Log in
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
