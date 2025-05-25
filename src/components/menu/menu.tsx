'use client';
import Link from 'next/link';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function Busca() {
  const searchParams = useSearchParams();
  const busca = searchParams.get('busca');
  return <div>Busca: {busca}</div>;
}

export default function Menu() {
  const params = useParams();
  const pathName = usePathname(); // exemplo de retorno /acoes/lua
  const router = useRouter();

  useEffect(() => {
    setInterval(() => {
      router.refresh();
    }, 5000);
  }, []);
  return (
    <>
      <Suspense fallback="<UNK>">
        <Busca />
      </Suspense>
      <ul id="menu" className="flex font-bold gap-8 p-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/acoes/lua?busca=lua">Ações: {params.acao}</Link>
        </li>
      </ul>
    </>
  );
}
