import Head from 'next/head';

type SharedSEOProps = {
  title: string;
};

export default function SharedSEO({ title }: SharedSEOProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
