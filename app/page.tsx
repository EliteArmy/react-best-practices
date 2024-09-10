import Link from 'next/link';

const links = [
  'hard-coded-values',
  'layout-in-reusable-components',
  'presentational-components',
  'children-pattern',
  'memoization',
  'setter-function',
  'union-types',
  'single-truth',
  'search',
];

export default function Home() {
  return (
    <nav className='flex flex-col space-y-4 mt-4 mb-6'>
      {links.length > 0 &&
        links.map((link) => (
          <Link
            key={link}
            href={link}
            className='capitalize'>
            {link.replaceAll('-', ' ')}
          </Link>
        ))}
    </nav>
  );
}
