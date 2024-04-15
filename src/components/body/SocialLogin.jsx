import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import google from "../../../public/google.svg";
import github from "../../../public/github.svg";
const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        toast.success("Login Successful");
        if (result.user) {
          navigate(from);
        }
      })
      .catch(() => {
        toast.error("Login Failed!");
      });
  };

  return (
    <div>
      <div className='flex items-center space-x-1'>
        <div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
        <p className='px-3 text-sm text-gray-600'>Login with social accounts</p>
        <div className='flex-1 h-px sm:w-16 bg-gray-300'></div>
      </div>
      
      <div className='flex justify-center space-x-4 my-4'>

        <button
          onClick={() => handleSocialLogin(googleLogin)}
          aria-label='Login with Google'
          type='button'
          className='flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-default-600'>
          <img src={google} alt='' className='w-5 h-5 fill-current' />
          <p>Login with Google</p>
        </button>

        <button
          onClick={() => handleSocialLogin(githubLogin)}
          aria-label='Login with GitHub'
          role='button'
          className='flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:ring-default-600'>
          <img src={github} alt='' className='w-5 h-5 fill-current' />
          <p>Login with GitHub</p>
        </button>
      </div>
      <p className='text-xs text-center sm:px-6 text-gray-600'>
        Do not have an account?
        <Link to='/register' className='underline ml-2 text-blue-800'>
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SocialLogin;
