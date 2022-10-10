import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout';

const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState(1);
	return (
		<div>
			<AccordionLayout
				title='How much does it cost to be a wastexert agent?'
				index={1}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			>
				It is initially totally free as we provide you with everything you need to
				get set up. After the first month when you must have started making money
				with us, a monthly charge of 5000 is charged for the first year after which
				it becomes 2000 monthly.
			</AccordionLayout>
			<AccordionLayout
				title='What is the payment plan of wastexpert like?'
				index={2}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			>
				It is initially totally free as we provide you with everything you need to
				get set up. After the first month when you must have started making money
				with us, a monthly charge of 5000 is charged for the first year after which
				it becomes 2000 monthly.
			</AccordionLayout>
			<AccordionLayout
				title='As a new wastexpert Agent/ collector, will i be trained on how to
transacts on wastexpert?'
				index={3}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			>
				It is initially totally free as we provide you with everything you need to
				get set up. After the first month when you must have started making money
				with us, a monthly charge of 5000 is charged for the first year after which
				it becomes 2000 monthly.
			</AccordionLayout>
			<AccordionLayout
				title='What is the size of space i need?'
				index={4}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			>
				It is initially totally free as we provide you with everything you need to
				get set up. After the first month when you must have started making money
				with us, a monthly charge of 5000 is charged for the first year after which
				it becomes 2000 monthly.
			</AccordionLayout>
			<AccordionLayout
				title='Can anyone work as agent or collector, Also, can i operate from anywhere in Nigeria?'
				index={5}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
			>
				It is initially totally free as we provide you with everything you need to
				get set up. After the first month when you must have started making money
				with us, a monthly charge of 5000 is charged for the first year after which
				it becomes 2000 monthly.
			</AccordionLayout>
		</div>
	);
};

export default Accordion;
