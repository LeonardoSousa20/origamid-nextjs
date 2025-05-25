import { Produto } from '@/interfaces/produto';

export default async function ProdutosLista() {
  let produtos: Produto[] = [];
  try {
    const response = await fetch('https://api.origamid.online/produtoss', {
      next: {
        revalidate: 5,
      },
    });
    if (!response.ok) throw new Error('Erro ao buscar produtos');
    produtos = await response.json();
  } catch (error) {
    return <p>Ocorreu um component na lista de produtos</p>;
  }

  return (
    <ul>
      {produtos.map((produto: any) => (
        <li key={produto.id ?? produto.nome}>
          {produto.nome}: R$ {produto.preco}
        </li>
      ))}
    </ul>
  );
}
