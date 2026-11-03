export default function Text({ name, age, skills }) {
  return (
    <div>
      <p>______________________________</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <span className="mr-3 font-bold">skills:</span>
      {skills.map((item) => (
        <span className="mr-3" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
//rfc
