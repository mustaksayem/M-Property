import { useState } from "react";
import useAuth from "../hook/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [image, setImage] = useState(user.photoURL || "");
  const [updateData, setUpdateData] = useState(false);


  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    // setReload(true);
    setUpdateData(true);
    window.location.reload();
    
    try {
      updateUserProfile(displayName, image);
      setUpdateData(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      setUpdateData(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Helmet>
        <title>NS | Update Profile</title>
      </Helmet>
      <div className='max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>User Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='displayName' className='block text-gray-700'>
              Display Name:
            </label>
            <input
              type='text'
              
              value={displayName}
              onChange={handleDisplayNameChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='image' className='block text-gray-700'>
              Profile Image URL:
            </label>
            <input
              type='text'
              id='image'
              value={image}
              onChange={handleImageChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          <button
            type='submit'
            disabled={updateData}
            className='w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline'>
            {updateData ? "Updating " : "Updated"}
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProfile;
