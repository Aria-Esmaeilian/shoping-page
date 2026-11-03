import Counter from "./componeents/Counter";
import Index from "./shoplike";
import { isEven, sum, sumOrConcut } from "./utails/math";

function App() {
  return (
    <div className="bg-emerald-950 w-full h-svh text-white p-6">
      <div className="border-b py-2">
        <p>{sum(3, 4)}</p>
        <p>{isEven(12)}</p>
        <p>{sumOrConcut("salam", "aria")}</p>
        <p>{sumOrConcut(30, 3)}</p>
      </div>
      <div className="mt-4">
        <Counter />
      </div>
      <div className="mt-12">
        <Index />
      </div>
    </div>
  );
}

export default App;
