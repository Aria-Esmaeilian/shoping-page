import { useState } from "react";
import "./App.css";
import Indexmain from "./component/maine/indexmain";
import Indexaside from "./component/aside/indexaside";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <Indexaside
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Indexmain selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
