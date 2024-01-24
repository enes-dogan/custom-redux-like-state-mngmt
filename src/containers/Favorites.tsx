import { useStore } from '../store';
import { globalStateType } from '../types.ts';

import FavoriteItem from '../components/Favorites/FavoriteItem.tsx';

export default function Favorites() {
  const state = useStore()[0] as globalStateType;
  const favoriteProducts = state.products.filter(p => p.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;

  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }

  return content;
}
