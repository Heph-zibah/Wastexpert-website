import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
	const formik = useFormik({
		initialValues: {
			email: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required')
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	return (
		<div className='mx-auto bg-[rgba(0,0,0,0.7)] w-full flex items-center justify-center fixed top-0 left-0 h-[100vh]'>
			<div className='bg-white [w-369px] px-[25px] pt-[43px] pb-[50px]'>
				<div className='mb-[55px] text-center font-inter'>
					<h1 className='text-lg font-semibold  text-primary mb-[11px]'>
						Forgot Password?
					</h1>
					<p className='text-xs'>
						Don’t worry, it happens sometimes. <br /> Let’s get you another one
					</p>
				</div>
				<form
					action=''
					className='flex flex-col text-start'
					onSubmit={formik.handleSubmit}
				>
					<label htmlFor='email' className='pb-[9px] font-semibold text-black'>
						Email Address
					</label>
					<input
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						id='email'
						name='email'
						type='email'
						placeholder='Your email address here'
						className='text-[#9AD1AD] text-xs py-[10px] px-[15px] rounded-lg border border-[#9AD1AD]'
					/>
					{formik.touched.email && formik.errors.email ? (
						<p className='errors mt-1 italic'>{formik.errors.email}</p>
					) : null}
					<button className='rounded-lg text-white bg-primary px-[144px] py-[4px] font-semibold mt-[126px]'>
						<Link to='/PasswordReset'>Submit</Link>
					</button>
				</form>
			</div>
		</div>
	);
};

export default ForgetPassword;
