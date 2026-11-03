export default function Alert(item) {
  const color = () => {
    if (item.type === "w") {
      return "bg-yellow-500";
    } else if (item.type === "f") {
      return "bg-red-500";
    } else if (item.type === "s") {
      return "bg-green-500";
    }
  };
  return <p className={color()}>{item.name}</p>;
}
