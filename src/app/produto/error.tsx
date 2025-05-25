'use client';

export default function ProdutoError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="text-red-500">
      <h3>Erro ao buscar produto</h3>
      <p>{error.message}</p>
      <button onClick={reset}>Tente novamente</button>
    </div>
  );
}
