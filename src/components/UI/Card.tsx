import { CardProps } from '../../types.ts';

export default function Card({ children, style }: CardProps) {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
}
