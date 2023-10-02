import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FavoriteProvider from "./context/Favorite";
import Player from "./pages/Player";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Header />
    <FavoriteProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} /> 
        <Route path="/player/:id" element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </FavoriteProvider>
      <Footer />
    </BrowserRouter>

  );
}

export default AppRoutes;
