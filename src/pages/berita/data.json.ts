import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const allBerita = await getCollection('berita');
  const sortedBerita = allBerita.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  const data = sortedBerita.map((berita) => ({
    slug: berita.slug,
    title: berita.data.title,
    excerpt: berita.data.excerpt,
    kategori: berita.data.kategori,
    date: berita.data.date.toISOString(),
    thumbnail: berita.data.thumbnail.src,
    author: berita.data.author || 'Admin Bedalo',
    month: berita.data.date.toLocaleDateString('id-ID', {
      month: 'long',
      year: 'numeric',
    }),
  }));

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
