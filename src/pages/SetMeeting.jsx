import  { useState } from "react";

const SetMeeting = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [showModal, setShowModal] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-gray-100 shadow-md rounded-md'>
      <h2 className='text-2xl font-semibold mb-4'>Schedule a Meeting</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block font-medium mb-2'>
            Name:
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block font-medium mb-2'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='date' className='block font-medium mb-2'>
            Date:
          </label>
          <input
            type='date'
            id='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='time' className='block font-medium mb-2'>
            Time:
          </label>
          <input
            type='time'
            id='time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='place' className='block font-medium mb-2'>
            Place:
          </label>
          <select
            id='place'
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            required>
            <option value='' disabled>
              Select a place
            </option>
            <option value='House'>House</option>
            <option value='Apartment'>Apartment</option>
            <option value='Condo'>Condo</option>
            <option value='Townhouse'>Townhouse</option>
          </select>
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>
          Schedule Meeting
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 z-10 overflow-y-auto flex items-center justify-center'>
          <div className='relative bg-white p-8 rounded-md shadow-md max-w-lg'>
            <button
              onClick={() => setShowModal(false)}
              className='absolute top-0 right-0 p-2'>
              &times;
            </button>
            <h3 className='text-2xl font-semibold mb-4'>Meeting Details</h3>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Time:</strong> {time}
            </p>
            <p>
              <strong>Place:</strong> {place}
            </p>
          </div>
          <div
            onClick={() => setShowModal(false)}
            className='fixed inset-0 bg-black opacity-50'
          />
        </div>
      )}
    </div>
  );
};

export default SetMeeting;