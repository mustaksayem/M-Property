import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { MdLogout } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FaBarsStaggered } from "react-icons/fa6";
const allLink = (
  <>
    <NavLink
      to='/'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-[#23BE0A] font-semibold rounded-lg border border-[#23BE0A] px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 rounded-lg font-normal  px-5 py-3"
      }>
      Home
    </NavLink>

    <NavLink
      to='/updateProfile'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-[#23BE0A] font-semibold  rounded-lg border border-[#23BE0A] px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 rounded-lg font-normal px-5 py-3"
      }>
      Update Profile
    </NavLink>

    <NavLink
      to='/faq'
      className={({ isActive }) =>
        isActive
          ? "text-lg mr-4 text-[#23BE0A] font-semibold  rounded-lg border border-[#23BE0A] px-5 py-3"
          : "text-[#131313CC] text-lg mr-4 rounded-lg font-normal px-5 py-3"
      }>
      FAQ
    </NavLink>
   
  </>
);

const Navbar = () => {
  const {logout,user}=useAuth();
  return (
    <div className='navbar bg-white '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='lg:hidden'>
            <span className="text-4xl">
              <FaBarsStaggered />
            </span>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52'>
            {allLink}
          </ul>
        </div>
        <button>
          <NavLink to='/' className='text-3xl font-bold text-[#131313] '>
            NS Property
          </NavLink>
        </button>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{allLink}</ul>
      </div>
      <div className='navbar-end'>
        {user ? (
          <div className='dropdown dropdown-end flex justify-center items-center'>
            <div
              className='tooltip tooltip-left size-14 mr-6'
              data-tip={user?.displayName || "User Name not Available"}>
              <span className=''>
                {" "}
                <img
                  src={
                    user?.photoURL || "https://i.ibb.co/9cZ7vD2/user-icon.jpg"
                  }
                  alt='Profile'
                  className='w-full h-full object-cover rounded-full'
                />
              </span>
            </div>

            <div>
              <button
                onClick={logout}
                className=' bg-red-500 flex justify-center items-center rounded-lg text-white font-semibold py-4 px-6 mr-0'>
                Logout{" "}
                <span className='pl-2 pt-1 text-xl'>
                  <MdLogout />
                </span>
              </button>
            </div>
          </div>
        ) : (
          <Link to='/login'>
            <button className='bg-[#23BE0A] flex justify-center items-center rounded-lg text-white font-semibold py-4 px-6 mr-0'>
              Login
              <span className='pl-2 pt-1 text-xl'>
                <VscAccount />
              </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
