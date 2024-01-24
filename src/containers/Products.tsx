import { useStore } from '../store';
import { globalStateType } from '../types.ts';

import ProductItem from '../components/Products/ProductItem.tsx';

export default function Products() {
  const state = useStore()[0] as globalStateType;

  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
}
