import { memo } from 'react';
import { useStore } from '../../store';
import { ProductItemProps, dispatchFn } from '../../types.ts';

import Card from '../UI/Card.tsx';

const ProductItem = memo((props: ProductItemProps) => {
  const dispatch = useStore(false)[1] as dispatchFn;

  const { id, title, description, isFav } = props;

  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={isFav ? 'is-fav' : ''}>{title}</h2>
        <p>{description}</p>
        <button
          className={!isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
