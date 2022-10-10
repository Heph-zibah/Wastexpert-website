import React from 'react';

const Contact = () => {
	return (
		<div className='pb-[79px] font-mulish flex flex-col items-center w-[363px] lg:w-[400px] text-center mx-auto'>
			<h6 className='text-center text-primary text-[25px] lg:text-[40px] font-mulish font-semibold'>
				Still have a questions?
			</h6>
			<p className='text-black opacity-60 mt-[10] text-sm lg:text-base'>
				If you cannot find answer to your question in our FAQ, you can always
				Contact us. we will get back to you shortly!
			</p>
			<button className='py-[8px] px-[31px] lg:py-[15px] lg:px-[53px] text-white bg-primary rounded-md text-sm font-semibold mt-[60px]'>
				Contact us
			</button>
		</div>
	);
};

export default Contact;
