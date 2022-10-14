import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ResetPassword = () => {
	const formik = useFormik({
		initialValues: {
			password: '',
			password2: ''
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.max(12, 'Must be 12 numbers or less')
				.required('Required'),
			password2: Yup.string()
				.max(12, 'Must be 12 numbers or less')
				.required('Required')
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	return (
		<div className='mx-auto bg-[rgba(0,0,0,0.7)] w-full flex items-center justify-center fixed top-0 left-0 h-[100vh]'>
			<div className='bg-white [w-369px] px-[25px] pt-[56px] pb-[50px]'>
				<div className='mb-[38px] text-center font-inter'>
					<h1 className='text-[25px] font-semibold  text-primary mb-[11px]'>
						Reset Password?
					</h1>
					<p className='text-sm'>
						You are about to get a new <br /> password
					</p>
				</div>
				<form
					action=''
					className='flex flex-col text-start'
					onSubmit={formik.handleSubmit}
				>
					<label
						htmlFor='password'
						className='mt-[17px] pb-[9px] font-semibold text-black'
					>
						New Password
					</label>
					<input
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						id='password'
						name='password'
						type='password'
						placeholder='*******'
						className='text-[#9AD1AD] text-xs py-[10px] px-[10px] rounded-lg border border-[#9AD1AD]'
					/>
					{formik.touched.password && formik.errors.password ? (
						<p className='errors mt-4'>{formik.errors.password}</p>
					) : null}

					<label
						htmlFor='password2'
						className='mt-[17px] pb-[9px] font-semibold text-black'
					>
						Confirm Password
					</label>
					<input
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password2}
						id='password2'
						name='password2'
						type='password2'
						placeholder='*******'
						className='text-[#9AD1AD] text-xs py-[10px] px-[10px] rounded-lg border border-[#9AD1AD]'
					/>
					{formik.touched.password2 && formik.errors.password2 ? (
						<p className='errors mt-4'>{formik.errors.password2}</p>
					) : null}

					<button className='rounded-lg text-white bg-primary px-[144px] py-[4px] font-semibold mt-[94px]'>
						<Link to='/ResetSuccess'>Reset Password</Link>
					</button>
				</form>
			</div>
		</div>
	);
};

export default ResetPassword;
