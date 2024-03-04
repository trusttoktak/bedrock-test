import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostPage from "./components/PostPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
