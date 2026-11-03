type ProductProps = {
  id: number;
  title: string;
  price: number;
};

export default function Product({ id, title, price }: ProductProps) {
  return (
    <div className="flex flex-col items-center">
      <p>{id}</p>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
}
