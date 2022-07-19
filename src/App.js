import { Route, Routes, BrowserRouter } from "react-router-dom"
import Create from "./pages/Create";
import Index from "./pages/Index";
import View from "./pages/View";
import Store from "./store/Store";

function App() {
  return (
      <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index></Index>} />
          <Route path="/create" element={<Create></Create>} />
          <Route path="/view/:bookId" element={<View></View>} />

        </Routes>
      </BrowserRouter>
      </Store>
  );
}

export default App;
