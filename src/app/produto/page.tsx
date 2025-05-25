import ProdutosLista from '@/components/produtos-lista';

export default async function ProdutoPage() {
  return (
    <div>
      <h3>Produto</h3>
      <p>Essa é a lista de produtos</p>
      <ProdutosLista />
    </div>
  );
}
