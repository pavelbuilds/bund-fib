'use client';

/** Global error boundary (Next.js App Router convention). */
export default function Error({ error, reset }) {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h2 className='mb-4 text-2xl font-bold'>Da ist etwas schiefgelaufen!</h2>
      <button
        onClick={() => reset()}
        className='rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600'
      >
        Erneut versuchen
      </button>
    </div>
  );
}
