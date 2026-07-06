'use client';

import { useState } from 'react';

/**
 * Contact form; submits to /api/contactForm which forwards the message
 * via e-mail. The hidden "url" field is a spam honeypot: it stays empty
 * for humans, and the API rejects requests where it is filled.
 */
const KontaktFormular = ({ styling }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contactForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, url: honeypot }),
      });
      if (res.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className='lg:min-h-[372px] w-full'>
        <div className='w-full h-full flex justify-center items-center'>
          <img
            className='w-20 h-20 rounded-[30px]'
            src='/images/check_icon.gif'
            alt='Nachricht erfolgreich versendet'
          />
        </div>
      </div>
    );
  }

  return (
    <div className='lg:min-h-[372px] w-full'>
      <form className={styling} onSubmit={handleSubmit}>
        <label className='font-source ml-3 text-sm font-semibold' htmlFor='kontakt-name'>
          Name
        </label>
        <input
          id='kontakt-name'
          name='name'
          type='text'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='shadow-xl rounded-xl h-10 px-3'
        />
        <label className='font-source ml-3 text-sm font-semibold mt-4' htmlFor='kontakt-email'>
          E-mail
        </label>
        <input
          id='kontakt-email'
          name='email'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='shadow-xl rounded-xl h-10 px-3'
        />
        <label className='font-source ml-3 text-sm font-semibold mt-4' htmlFor='kontakt-nachricht'>
          Nachricht
        </label>
        <textarea
          id='kontakt-nachricht'
          name='nachricht'
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='shadow-xl rounded-xl h-32 px-3 py-3'
        ></textarea>
        {/* Honeypot: invisible for humans, bots fill it and get rejected */}
        <input
          type='text'
          name='url'
          tabIndex={-1}
          autoComplete='off'
          aria-hidden='true'
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className='hidden'
        />
        {status === 'error' && (
          <p className='mt-4 ml-3 font-source text-sm text-red-600'>
            Das hat leider nicht geklappt. Bitte versuchen Sie es später erneut oder schreiben Sie
            uns direkt an verwaltung@bund-fib.de.
          </p>
        )}
        <button
          type='submit'
          disabled={status === 'sending'}
          className='mx-auto mt-10 bg-primary font-source px-9 sm:py-0 py-1 rounded-full text-white sm:text-sm text-lg sm:h-8 font-semibold disabled:opacity-60'
        >
          {status === 'sending' ? 'Wird gesendet…' : 'Abschicken'}
        </button>
      </form>
    </div>
  );
};

export default KontaktFormular;
