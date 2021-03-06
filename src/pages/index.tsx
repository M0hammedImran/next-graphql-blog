import DbConnection, { jsonify } from '@/middleware/DbConnection';
import Head from 'next/head';
import Users from '@/models/UserModel';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (_context) => {
  DbConnection();

  const users = await Users.find({}).exec();
  return {
    props: {
      users: jsonify(users),
    },
  };
};

export default function Home({ users }) {
  return (
    <div className='flex flex-col place-items-center'>
      <Head>
        <title>Food Blog - Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-3xl font-medium'>Home</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
