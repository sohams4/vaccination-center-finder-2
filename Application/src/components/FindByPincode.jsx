import React from 'react';

const FindByPincode = ({ handleSubmit }) => {
  const findByPincode = (event) => {
    handleSubmit(event, 'pincode');
  };
  return (
    <form
      onSubmit={findByPincode}
      className='w-full max-w-xs px-8 pt-6 pb-8 mb-4'
    >
      <div className='mb-4'>
        <label
          htmlFor='pincode'
          className='block text-gray-700 text-sm font-bold mb-2'
        >
          Your Pincode:
        </label>
        <input
          id='pincode'
          type='text'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      >
        Search
      </button>
    </form>
  );
};

export default FindByPincode;
