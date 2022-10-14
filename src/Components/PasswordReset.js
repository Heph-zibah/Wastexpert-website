import React from 'react';
import { Link } from 'react-router-dom';

const PasswordReset = () => {
	return (
		<div className='mx-auto bg-[rgba(0,0,0,0.7)] w-full flex items-center justify-center fixed top-0 left-0 h-[100vh]'>
			<div className='bg-white [w-369px] px-[25px] pt-[157px] pb-[50px]'>
				<div className='mb-[55px] text-center font-inter'>
					<h1 className='text-lg font-semibold  text-primary mb-[11px]'>
						Email submitted successfully!
					</h1>
					<p className='text-sm'>
						Kindly check your mailbox to <br /> Continue
					</p>
				</div>
				<form action=''>
					<button className='rounded-lg text-white bg-primary px-[144px] py-[4px] font-semibold mt-[143px]'>
						<Link to='/PasswordReset'>Ok</Link>
					</button>
				</form>
			</div>
		</div>
	);
};

export default PasswordReset;
