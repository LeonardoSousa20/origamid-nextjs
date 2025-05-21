'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import postProduct from '@/actions/post-product';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';

function ButtonForm() {
  const status = useFormStatus();
  return (
    <Button variant="default" type="submit" disabled={status.pending}>
      Cadastrar
    </Button>
  );
}

export default function ProdutoAdicionarPage() {
  //Nessa versão não existe o useFormState, foi atualizado para useActionState
  const [state, formAction] = useActionState(postProduct, { errors: [] });

  console.log(state);
  return (
    <>
      <h3>Produto Adicionar</h3>
      <form className="flex flex-col gap-4" action={formAction}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="nome">Nome</Label>
          <Input type="text" id="nome" name="nome" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="preco">Preço</Label>
          <Input type="number" id="preco" name="preco" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="descricao">Descrição</Label>
          <Input type="text" id="descricao" name="descricao" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="estoque">Estoque</Label>
          <Input type="number" id="estoque" name="estoque" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="importado" name="importado" />
          <label
            htmlFor="importado"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Produto importado?
          </label>
        </div>
        <div>
          {state.errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
          <ButtonForm />
        </div>
      </form>
    </>
  );
}
