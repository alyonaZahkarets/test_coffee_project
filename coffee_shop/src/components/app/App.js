import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../../pages/main_page/MainPage";
import CoffeePage from "../../pages/cofee_page/CoffeePage";
import CoffeeItemPage from "../../pages/coffee-item_page/CoffeeItemPage";
import GoodsPage from "../../pages/goods_page/GoodsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/coffee-item" element={<CoffeeItemPage />} />
        <Route path="/goods" element={<GoodsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
