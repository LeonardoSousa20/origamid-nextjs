'use client';
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import postProduct from '@/actions/post-product';

export interface Produto {
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
}

export default function ProdutoAdicionarPage() {
  const [produto, setProduto] = useState<Produto>({
    nome: '',
    preco: 0,
    descricao: '',
    estoque: 0,
    importado: 0,
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await postProduct(produto);
  }

  return (
    <>
      <h3>Produto Adicionar</h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nome">Nome</Label>
          <Input
            type="text"
            id="nome"
            onChange={e => setProduto({ ...produto, [e.target.id]: e.target.value })}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="preco">Preço</Label>
          <Input
            type="number"
            id="preco"
            onChange={e => setProduto({ ...produto, [e.target.id]: +e.target.value })}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="descricao">Descrição</Label>
          <Input
            type="text"
            id="descricao"
            onChange={e => setProduto({ ...produto, [e.target.id]: e.target.value })}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="estoque">Estoque</Label>
          <Input
            type="number"
            id="estoque"
            onChange={e => setProduto({ ...produto, [e.target.id]: +e.target.value })}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="importado"
            checked={produto.importado === 1} // opcional: controle o estado
            onCheckedChange={checked =>
              setProduto(prev => ({ ...prev, importado: checked ? 1 : 0 }))
            }
          />
          <label
            htmlFor="importado"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Produto importado?
          </label>
        </div>
        <div>
          <Button variant="default" type="submit">
            Cadastrar
          </Button>
        </div>
      </form>
    </>
  );
}
