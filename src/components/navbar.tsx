import Link from 'next/link';

const navlinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Login',
    link: '/login',
  },
  {
    title: 'Register',
    link: '/register',
  },
  {
    title: 'Secure Route',
    link: '/secure-route',
  },
];

export default function Navbar() {
  return (
    <div className='p-4 shadow space-x-4 h-16 w-full flex justify-end items-center'>
      {navlinks.map(({ title, link }) => {
        return (
          <Link href={link} key={title}>
            <a className='border hover:bg-gray-100 focus:bg-gray-100 px-1 rounded text-sm'>
              {title}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
