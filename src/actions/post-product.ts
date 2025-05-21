'use server';

import { Produto } from '@/app/produto/adicionar/page';
import { revalidateTagsAction } from '@/actions/revalidate-path';
import { redirect } from 'next/navigation';

export default async function postProduct(produto: Produto) {
  await fetch('https://api.origamid.online/produtos', {
    method: 'POST',
    body: JSON.stringify(produto),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  await revalidateTagsAction('produtos');
  redirect('/produto');
}
