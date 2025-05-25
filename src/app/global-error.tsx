'use client';

//Global erro aplica para qualquer rota que nao tenha um error.ts definido, porem, ele nao aplica para ambiente de dev, apenas para prod

export default function GlobalError() {
  return (
    <html>
      <body>
        <h1>Um erro ocorreu</h1>
      </body>
    </html>
  );
}
