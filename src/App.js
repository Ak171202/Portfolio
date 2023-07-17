
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainapp from "./Mainapp";
import Test from "./Test";

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainapp />}>
      </Route>
      <Route path="googledfc99ed74a131a9a.html" element={<Test></Test>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
