import ProductItem from '../components/Products/ProductItem.tsx';

export default function Products() {
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFav}
        />
      ))}
    </ul>
  );
}
