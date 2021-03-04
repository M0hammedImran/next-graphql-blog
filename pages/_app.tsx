import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className=''>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/login'>
          <a>Login</a>
        </Link>
        <Link href='/register'>
          <a>Register</a>
        </Link>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
