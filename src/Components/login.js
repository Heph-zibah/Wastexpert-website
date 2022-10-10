import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='mx-auto bg-[rgba(0,0,0,0.5)] w-full flex items-center justify-center  h-[100vh]'>
			<div className='bg-white [w-369px] px-[25px] pt-[43px] pb-[50px] flex flex-col items-center justify-center'>
				<h1 className='text-lg font-semibold font-inter text-primary mb-[41px] text-center'>
					Log in
				</h1>
				<form action='' className='flex flex-col'>
					<label htmlFor='email' className='pb-[9px] font-semibold'>
						Email Address
					</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Your email address here'
						className='text-[#9AD1AD] text-xs py-[10px] px-[15px] rounded-lg border '
					/>
					<label htmlFor='password' className='mt-[17px] pb-[9px] font-semibold'>
						Password
					</label>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='********'
						className='text-[] text-xs py-[10px] px-[15px] rounded-lg border'
					/>
					<p className='pt-[7px] text-[14px] font-semibold'>Forgot Password?</p>

					<button className='rounded-lg text-white bg-primary px-[144px] py-[4px] font-semibold mt-[30px]'>
						Login
					</button>
				</form>
				<p className='text-xs font-semibold pt-[20px]'>
					Already have an account? <Link className='text-primary'>Sign in</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
