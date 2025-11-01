import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./react-pages/HomePage";
import NewsDetailPage from "./react-pages/NewsDetailPage";
import CategoryNewsPage from "./react-pages/CategoryNewsPage";
import CountryNewsPage from "./react-pages/CountryNewsPage";
import SourceNewsPage from "./react-pages/SourceNewsPage";
import CategoriesPage from "./react-pages/CategoriesPage";
import CountriesPage from "./react-pages/CountriesPage";
import SourcesPage from "./react-pages/SourcesPage";
import SearchPage from "./react-pages/SearchPage";

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