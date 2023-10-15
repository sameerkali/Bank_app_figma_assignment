import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import Catalague from "./components/Catalague";
import History from "./components/History";
import CcPage1 from "./CcPage1";
import CcPage2 from "./CcPage2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalague" element={<Catalague />} />
        <Route path="/history" element={<History />} />
        <Route path="/ccPage1" element={<CcPage1 />} />
        <Route path="/ccPage2" element={<CcPage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
