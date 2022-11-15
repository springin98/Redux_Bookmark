import { Route, Routes } from "react-router-dom";

import MainContainer from "./containers/MainContainer";
import BookmarkContainer from "./containers/BookmarkContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />} />
      <Route path="/bookmark" element={<BookmarkContainer />} />
    </Routes>
  );
}

export default App;
