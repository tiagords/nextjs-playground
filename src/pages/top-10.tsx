import { GetStaticProps } from "next";

interface IProduct {
  id: string;
  title: string;
}

interface ITop10Props {
  products: IProduct[];
}

export default function Top10({ products }) {
  return (
    <div>
      <section>
        <h1>Top 10</h1>
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

// Gera paginas estaticas com update da pagina a cada 5 segundos
export const getStaticProps: GetStaticProps<ITop10Props> = async (context) => {
  const response = await fetch("http://localhost:3333/products");
  const products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 5,
  };
};
