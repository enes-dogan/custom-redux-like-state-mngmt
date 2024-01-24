import { ProductItemProps } from '../../types.ts';

import Card from '../UI/Card.tsx';

export default function ProductItem(props: ProductItemProps) {
  const { title, description, isFav } = props;

  const toggleFavHandler = () => {
    // ...
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
}
