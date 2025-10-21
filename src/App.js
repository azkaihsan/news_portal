import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NewsDetailPage from "./pages/NewsDetailPage";
import CategoryNewsPage from "./pages/CategoryNewsPage";
import CountryNewsPage from "./pages/CountryNewsPage";
import SourceNewsPage from "./pages/SourceNewsPage";
import CategoriesPage from "./pages/CategoriesPage";
import CountriesPage from "./pages/CountriesPage";
import SourcesPage from "./pages/SourcesPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/category/:categoryName" element={<CategoryNewsPage />} />
          <Route path="/country/:countryCode" element={<CountryNewsPage />} />
          <Route path="/source/:sourceId" element={<SourceNewsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;