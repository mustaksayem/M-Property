import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../components/body/SocialLogin";
import useAuth from "../hook/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import loginPassword from "../../public/loginPassword.svg"


const Login = () => {
  const { signInUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
 

  // for navigation
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("Login Successful");
          navigate(from);
        }
      })
      .catch(() => {
        toast.error("Login Failed!");
      });
  };

  return (
    <>
      <Helmet>
        <title>NS | Login</title>
      </Helmet>

      <div className='w-full mx-auto lg:w-[500px] drop-shadow-2xl bg-white p-6'>
        <form onSubmit={handleSubmit(onSubmit)} className=' '>
          <h1 className='backdrop-blur-sm text-4xl text-center pb-5'>
            Login Form
          </h1>
          <p className='pb-10 text-center text-gray-400'>
            Sign in with your authorized email and password
          </p>
          <div className='space-y-5'>
            <label htmlFor='email' className='block'>
              Email
            </label>
            <div className='relative'>
              <input
                name='email'
                type='email'
                placeholder='Enter Your Email'
                className='p-3 block w-full pl-10 drop-shadow-lg outline-none'
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className='text-red-500'>This field is required</span>
              )}
              <span className='absolute top-1/4 left-2'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  className='inline-block w-6'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'></g>
                  <g id='SVGRepo_iconCarrier'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z'
                      fill='#000000'></path>
                    <rect
                      x='2.5'
                      y='2.5'
                      width='19'
                      height='19'
                      rx='3.5'
                      stroke='#000000'></rect>
                  </g>
                </svg>
                
              </span>
            </div>
            <label htmlFor='password' className='block'>
              Password
            </label>
            <div className='relative flex items-center'>
              <input
                name='password'
                type={showPassword ? "text" : "password"}
                placeholder='Enter Your Password'
                className='p-3 block w-full pl-10 pr-10 drop-shadow-lg outline-none'
                {...register("password", { required: true })}
              />
              <span
                className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <span className='text-red-500'>This field is required</span>
              )}
              <span className='absolute top-1/2 transform -translate-y-1/2 left-0'>
                <img
                  src={loginPassword}
                  alt=''
                  className='w-5 h-5 fill-current'
                />
              </span>
            </div>
          </div>

          <button className='py-2 px-5 w-full text-white hover:text-blue-500 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-blue-500 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-blue-500 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-blue-500 hover:bg-white relative inline-block'>
            Login
          </button>
        </form>

        {/* Social Login */}

        <SocialLogin></SocialLogin>
      </div>
    </>
  );
};

export default Login;
