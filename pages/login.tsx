import Head from 'next/head';
import { FormEvent, useState } from 'react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ ...form });
  };

  return (
    <div className='flex flex-col place-items-center py-8'>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-3xl font-medium'>Login</h1>
      <section className='w-96'>
        <form
          onSubmit={handleSubmit}
          className='space-y-4 w-full'
          method='post'
        >
          <div>
            <label htmlFor='email'>Email</label>
            <br />
            <input
              type='text'
              name='email'
              id='email'
              value={form.email}
              onChange={({ target }) => {
                setForm((prev) => ({ ...prev, email: target.value as string }));
              }}
              className='rounded border border-gray-600 hover:ring-1 ring-gray-900 focus:ring-1 w-full py-2 px-3'
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <br />
            <input
              type='password'
              name='password'
              id='password'
              className='rounded border border-gray-600 hover:ring-1 ring-gray-900 focus:ring-1 w-full py-2 px-3'
              value={form.password}
              onChange={({ target }) => {
                setForm((prev) => ({
                  ...prev,
                  password: target.value as string,
                }));
              }}
            />
          </div>
          <div className=''>
            <button
              className='px-4 py-2 mt-4 border-gray-500 border rounded hover:ring-2 ring-blue-700 w-full focus:outline-none focus:ring-2'
              type='submit'
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
