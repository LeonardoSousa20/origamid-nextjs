import getProducts from '@/actions/get-products';

export default async function ProdutoPage() {
  const produtos = await getProducts();

  return (
    <div>
      <h3>Produto</h3>
      <ul>
        {produtos.map((produto: any) => (
          <li key={produto.id ?? produto.nome}>
            {produto.nome}: R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}
