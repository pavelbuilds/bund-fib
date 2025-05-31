import { faColonSign } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const KontaktFormular = ({ styling }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending');
    let data = {
      name,
      email,
      message,
      url,
    };
    fetch('/api/contactForm', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log('Response succeeded!');
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
      } else {
        console.log('Response failed.');
      }
    });
  };

  return (
    <div className='lg:min-h-[372px] w-full'>
      {submitted ? (
        <div className='w-full h-full flex justify-center items-center'>
          <img className='w-20 h-20 rounded-[30px]' src='images/check_icon.gif' alt='' />
        </div>
      ) : (
        <form className={styling} action=''>
          <label className='font-source ml-3 text-sm font-semibold' htmlFor='name'>
            Name
          </label>
          <input
            onChange={handleNameChange}
            className='shadow-xl rounded-xl h-10 px-3'
            name='name'
            type='text'
            value={name}
          />
          <label className='font-source ml-3 text-sm font-semibold mt-4' htmlFor='email'>
            E-mail
          </label>
          <input
            onChange={handleEmailChange}
            className='shadow-xl rounded-xl h-10 px-3'
            name='email'
            type='text'
            value={email}
          />
          <label className='font-source ml-3 text-sm font-semibold mt-4' htmlFor='nachricht'>
            Nachricht
          </label>
          <textarea
            onChange={handleMessageChange}
            className='shadow-xl rounded-xl h-32 px-3 py-3'
            name='nanchricht'
            type='text'
            value={message}
          ></textarea>
          <label className='font-source ml-3 text-sm font-semibold mt-4 hidden' htmlFor='nachricht'>
            Url
          </label>
          <textarea
            onChange={handleUrlChange}
            className='shadow-xl rounded-xl h-32 px-3 py-3 hidden'
            name='nanchricht'
            type='text'
            value={url}
          ></textarea>
          <button
            onClick={(e) => handleSubmit(e)}
            className='mx-auto mt-10  bg-primary font-source px-9 sm:py-0 py-1 rounded-full text-white sm:text-sm text-lg sm:h-8 font-semibold'
            type='submit'
          >
            Abschicken
          </button>
        </form>
      )}
    </div>
  );
};

export default KontaktFormular;
