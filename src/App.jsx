import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
