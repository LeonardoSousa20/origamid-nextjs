'use server';

import { Produto } from '@/interfaces/produto';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

function validarNome(nome: unknown): boolean {
  return typeof nome == 'string' && nome.length > 1;
}

function validarPreco(preco: unknown): boolean {
  return typeof preco == 'number' && preco > 1;
}

export default async function postProduct(state: { errors: string[] }, formData: FormData) {
  try {
    const produto: Produto = {
      nome: formData.get('nome') as string,
      preco: Number(formData.get('preco')),
      descricao: formData.get('descricao') as string,
      estoque: Number(formData.get('estoque')),
      importado: formData.get('importado') ? 1 : 0,
    };

    let errors = [];
    if (!validarNome(produto.nome)) errors.push('Nome inválido');
    if (!validarPreco(produto.preco)) errors.push('Preço inválido');

    if (errors.length > 0) return { errors };
    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      body: JSON.stringify(produto),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Erro ao adicionar o produto');
    }
  } catch (error) {
    // Em caso de erro, retorne um estado com erros
    if (error instanceof Error) {
      return {
        errors: [error.message],
      };
    }
  }
  revalidateTag('produtos');
  redirect('/produto');
  //return { errors: [] };
}
