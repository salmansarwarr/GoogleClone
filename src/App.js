import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
