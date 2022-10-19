import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LogIn = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string()
				.max(12, 'Must be 12 numbers or less')
				.required('Required')
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		}
	});

	return (
		<div className='md:mx-auto bg-[rgba(0,0,0,0.7)] w-full flex items-center justify-center fixed top-0 left-0 h-[100vh]'>
			<div className='bg-white w-full max-w-[369px] px-[25px] pt-[43px] pb-[50px] mx-5'>
				<h1 className='text-lg font-semibold font-inter text-primary mb-[41px] text-center'>
					Log in
				</h1>
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
						<p className='errors mt-4'>{formik.errors.email}</p>
					) : null}
					<label
						htmlFor='password'
						className='mt-[17px] pb-[9px] font-semibold text-black'
					>
						Password
					</label>
					<input
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						id='password'
						name='password'
						type='password'
						placeholder='********'
						className='text-[#9AD1AD] text-xs py-[10px] px-[15px] rounded-lg border border-[#9AD1AD]'
					/>
					{formik.touched.password && formik.errors.password ? (
						<p className='errors mt-4'>{formik.errors.password}</p>
					) : null}
					<p className='pt-[7px] text-[14px] font-semibold text-black'>
						<Link to='/ForgetPassword'>Forgot Password?</Link>
					</p>

					<button className='rounded-lg text-white bg-primary px-[144px] py-[4px] font-semibold mt-[30px]'>
						Login
					</button>
				</form>
				<p className='text-xs font-semibold pt-[20px] text-black'>
					Dont't have an account?{' '}
					<Link to='/SignUp' className='text-primary'>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LogIn;
