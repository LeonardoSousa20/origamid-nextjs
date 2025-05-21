import Link from 'next/link';

export default async function Menu() {
  return (
    <ul id="menu" className="flex font-bold gap-8 p-4">
      <li>
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
}
