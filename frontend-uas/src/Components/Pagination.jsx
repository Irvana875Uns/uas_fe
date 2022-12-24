import React from 'react';

export default function Pagination(props) {
  const { page, hasMoreData } = props;

  const nextPageHandler = () => {
    props.nextPage();
  };

  const prevPageHandler = () => {
    props.prevPage();
  };

  return (
    <div className='w-full flex justify-center mb-10'>
      <button
        className={`inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${
          page !== 1
            ? 'dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-100 hover:text-gray-700'
            : ''
        }`}
        onClick={() => prevPageHandler()}
        disabled={page === 1}
      >
        <svg
          aria-hidden='true'
          className='mr-2 w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
        Previous
      </button>
      <button
        className={`inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 ${
          hasMoreData
            ? 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'
            : ''
        }`}
        onClick={() => {
          if (hasMoreData) {
            nextPageHandler();
          }
        }}
        disabled={!hasMoreData}
      >
        Next
        <svg
          aria-hidden='true'
          className='ml-2 w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
    </div>
  );
}