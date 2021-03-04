import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex flex-col place-items-center'>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-3xl font-medium'>Home</h1>
    </div>
  );
}
