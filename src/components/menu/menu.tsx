import Link from 'next/link';

export default async function Menu() {
  return (
    <ul className="flex flex-wrap list-none gap-8 font-semibold mb-8">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/produto">Produtos</Link>
      </li>
      <li>
        <Link href="/produto/adicionar">Adicionar Produto</Link>
      </li>
    </ul>
  );
}
