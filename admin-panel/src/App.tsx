import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashbord from "./pages/dashbord";
import Finance from "./pages/finance";
import Inbox from "./pages/inbox";
import Jobboard from "./pages/jobboard";
import Messages from "./pages/messages";
import Tasks from "./pages/tasks";
import { ThemeProvider } from "./pages/theme";
import Layout from "./components/layout";
import Customers from "./pages/Customers";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Customers />} />
              <Route path="Dashbord" element={<Dashbord />} />
              <Route path="Finance" element={<Finance />} />
              <Route path="Inbox" element={<Inbox />} />
              <Route path="Jobboard" element={<Jobboard />} />
              <Route path="Messages" element={<Messages />} />
              <Route path="Tasks" element={<Tasks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
