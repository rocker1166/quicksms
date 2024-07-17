"use client"
import React, { useState } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation'
import Link from 'next/link';


function Page() {
  const params = useParams<{ key: string; }>()
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
let a = usePathname()
  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    if (name === 'floating_email') {
      setNickname(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log(nickname)  
    console.log(message)
    
  };

  return (
    <div className="my-40">
      <form
        className="max-w-md my-0.5 m-20 border p-16 border-gray-100 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={nickname}
            onChange={handleInputChange}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Secret Name
          </label>
        </div>

        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Secret message
        </label>
        <textarea
          id="message"
          name="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
          value={message}
          onChange={handleInputChange}
        ></textarea>

        <button
          type="submit"
          className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <Link
          href={"/"}
          className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          make own Page
        </Link>
    </div>
  );
}

export default Page;