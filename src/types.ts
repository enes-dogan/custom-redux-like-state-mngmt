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

// Custom Redux-like Store Types

export type globalStateType = {
  products: {
    id: string;
    title: string;
    description: string;
    isFavorite: boolean;
  }[];
};

export type listenerFn = (state: globalStateType) => void;

export type actionFn = (
  curState: globalStateType,
  payload: string
) => globalStateType;

export interface actionsType {
  [key: string]: actionFn;
}

export type dispatchFn = (
  actionIdentifier: keyof actionsType,
  payload: string
) => void;
