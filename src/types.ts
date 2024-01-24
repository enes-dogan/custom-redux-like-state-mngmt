interface Product {
  id: string;
  title: string;
  description: string;
  isFav: boolean;
}

export interface ProductItemProps extends Product {}

export interface FavoriteItemProps {
  id: string;
  title: string;
  description: string;
}

export interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
