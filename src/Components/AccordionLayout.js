import React from 'react';
import {
	IoIosArrowDropdownCircle,
	IoIosArrowDropupCircle
} from 'react-icons/io';

const AccordionLayout = ({
	title,
	children,
	index,
	activeIndex,
	setActiveIndex
}) => {
	const handleSetIndex = (index) =>
		activeIndex !== index && setActiveIndex(index);
	return (
		<div
			onClick={() => handleSetIndex(index)}
			className='px-[21px] py-[28px] border-b border-b-[#9a9999]'
		>
			<div className='flex items-center justify-between'>
				<h4 className='ease-in-out duration-200 text-primary font-bold font-mulish text-[12px] lg:text-[22px] mb-[22px] pr-0 lg:pr-[80px]'>
					{title}
				</h4>
				{activeIndex === index ? (
					<IoIosArrowDropdownCircle className='text-secondary' />
				) : (
					<IoIosArrowDropupCircle className='text-secondary' />
				)}
			</div>
			{activeIndex === index && (
				<div className='pr-[50px] lg:pr-[100px] xl:pr-[200px] text-[10px] lg:text-[18px]'>
					{children}
				</div>
			)}
		</div>
	);
};

export default AccordionLayout;
