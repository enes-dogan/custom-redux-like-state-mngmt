import { FavoriteItemProps } from '../../types.ts';

import Card from '../UI/Card.tsx';

export default function FavoriteItem({
  title,
  description,
}: FavoriteItemProps) {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
}
