import React, { useState } from 'react';
import list from '../assets/list.svg';
function ContactUsForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      phone,
      message,
    };

    try {
      const response = await fetch('http://localhost:5173/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div id="contactMain" className=" bg-gray-100 p-6">
        <div className="flex flex-row justify-between md:ml-2 mr-4 p-4 w-full rounded-lg border-white shadow-md bg-white ">
          <div className='flex flex-col justify-normal items-start w-full md:w-1/2'>

            <h2 className="hidden md:block text-2xl text-left font-bold w-full">Do you like it?</h2>
            <h2 className="block md:hidden text-2xl text-left font-bold w-full pl-1 md:pl-0">Contact Us!</h2>
            <p className="hidden md:block text-left mb-4 w-full">Good, contact us and join our community</p>

            <form onSubmit={handleSubmit} className='w-full'>
              {/* Поле для e-mail */}
              <label className="text-left block mb-1 font-semibold pl-2 md:pl-0">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg bg-green-100"
                required
              />

              {/* Поле для номера телефона */}
              <label className="block mb-1 font-semibold text-left pl-2 md:pl-0">Phone number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg bg-green-100"
              />

              {/* Поле для сообщения */}
              <label className="block mb-1 font-semibold text-left pl-2 md:pl-0">Your message for us</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg bg-green-100"
                rows="4"
                required
              ></textarea>
            </form>

            {/* Кнопка отправки */}
            <button
                type="submit"
                className="w-1/4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-lg"
              >
                Send
            </button>

            {/* Сообщение о статусе отправки */}
            {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
          </div>
          {/*image*/}
          <div>
            <img
              src={list}
              alt="List"
              className="w-full h-full pl-6 pr-3 hidden md:block"
            />
          </div>
        </div>  
    </div>
  );
}

export default ContactUsForm;
 // Это экспорт по умолчанию
