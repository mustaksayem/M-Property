import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const [registerError, setRegisterError] = useState("");

  // for navigation
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;
    setRegisterError("");


    if (password.length < 6) {
      setRegisterError("Password less than 6 character");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must contain at least one uppercase letter");
      return false;
    }

    if (!/[a-z]/.test(password)) {
      setRegisterError("Password must contain at least one lowercase letter");
      return false;
    }

    //Create User and update profile
    createUser(email, password)
      .then(() => {
        
        updateUserProfile(fullName, image)
          .then(() => {
            
            toast.success(`Registration sucessfully`);
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
            toast.error("Registration Failed!");
          });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        toast.error("Registration Not complete!");
      });
  };
  return (
    <div>
      <Helmet>
        <title>NS | Register</title>
      </Helmet>
      <div className='w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800'>
        <h1 className='text-2xl font-bold text-center'>Register</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=''
          action=''
          className='space-y-6'>
          <div className='space-y-1 text-sm'>
            <label htmlFor='username' className='block text-gray-600'>
              Full Name
            </label>
            <input
              type='text'
              name='name'
              placeholder='Enter Your Name'
              className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600'
              {...register("fullName")}
            />
            {errors.fullName && (
              <span className='text-red-500'>This field is required</span>
            )}
          </div>
          <label htmlFor='email' className='block text-gray-600'>
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder='Enter your mail'
            className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600'
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className='text-red-500'>This field is required</span>
          )}
          <label htmlFor='Photo' className='block text-gray-600'>
            Photo Url
          </label>
          <input
            type='text'
            placeholder='Photo Url'
            className='w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-default-600'
            {...register("image")}
          />

          <div className='space-y-1 text-sm'>
            <label htmlFor='password' className='block text-gray-600'>
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              placeholder='Password'
              className='w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800  relative'
              {...register("password", { required: true })}
            />
            <span
              className='cursor-pointer absolute '
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            {registerError && <h2 className='text-red-600'>{registerError}</h2>}
          </div>
          <button className='block w-full p-3 text-center rounded-sm text-white bg-blue-600 font-semibold '>
            Register
          </button>
        </form>

        <p>
          Already Registered{" "}
          <Link className='text-blue-500 underline' to='/login'>
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
