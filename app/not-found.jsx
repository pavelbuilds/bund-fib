import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found - Bund FIB',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-lightYellow'>
      <h1 className='mb-4 text-4xl font-bold'>404</h1>
      <h2 className='mb-8 text-2xl'>Page Not Found</h2>
      <p className='mb-8 text-center'>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href='/'
        className='rounded bg-yellow-500 px-6 py-3 text-white transition-colors hover:bg-yellow-600'
      >
        Return Home
      </Link>
    </div>
  );
}
