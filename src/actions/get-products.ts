'use server';

export default async function getProducts() {
  const response = await fetch('https://api.origamid.online/produtos', {
    next: {
      tags: ['produtos'],
    },
  });

  return await response.json();
}
