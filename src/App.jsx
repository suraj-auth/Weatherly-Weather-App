import { Hero, Map, Forecast, Layout } from "./constant/Helper.jsx";
import { BrowserRouter, Routes, Route } from "./constant/Helper.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/dashboard" element={<Hero />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/map" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
