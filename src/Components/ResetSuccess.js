import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';

const ResetSuccess = () => {
	return (
		<div className='mx-auto bg-[rgba(0,0,0,0.7)] w-full flex items-center justify-center fixed top-0 left-0 h-[100vh]'>
			<div className='bg-white w-full max-w-[400px] px-[25px] pt-[43px] pb-[50px] flex flex-col items-center'>
				<h1 className='text-lg font-semibold font-inter text-primary mb-[41px] text-center'>
					Congratulations!
				</h1>
				<div className='bg-primary mb-[41px] rounded-[50%] py-[53px] px-[43px] flex items-center justify-center w-[136px] h-[136px]'>
					<IoIosCheckmark className='text-white text-[800px] text-center' />
				</div>
				<p className='text-sm text-center forn-mulish'>
					You password has been successfully <br /> changed
				</p>
				<form action=''>
					<button className='rounded-lg text-white bg-primary px-[144px] py-[4px] font-semibold mt-[30px]'>
						Continue
					</button>
				</form>
			</div>
		</div>
	);
};

export default ResetSuccess;
