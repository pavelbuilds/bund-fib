'use client';

export default function Error({ error, reset }) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h2 className='mb-4 text-2xl font-bold'>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className='rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600'
      >
        Try again
      </button>
    </div>
  );
}
