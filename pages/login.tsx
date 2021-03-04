import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Login</h1>
    </div>
  );
}
