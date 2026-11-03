import Footerindex from "./component/footer/footerindex";
import Headerindex from "./component/header/headerindex";
import Mainindex from "./component/maine/mainindex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./component/pagess/Article";
import About from "./component/pagess/about";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Headerindex />
                <Mainindex />
                <Footerindex />
              </>
            }
          />
          <Route path="/artc" element={<Article />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
