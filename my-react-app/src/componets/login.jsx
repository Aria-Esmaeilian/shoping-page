import { useState } from "react";
export default function Login() {
  const [login, setlogin] = useState(false);
  return (
    <div>
      {login ? <h1>welcome</h1> : <h1>please login</h1>}
      <button className="bg-amber-500" onClick={() => setlogin(!login)}>
        Login
      </button>
    </div>
  );
}
