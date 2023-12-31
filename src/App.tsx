import { useEffect, useState } from "react";

import { ThemeProvider } from "./components/ui/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/others/Layout";
import IntroPage from "./pages/IntroPage";
import DescPage from "./pages/DescPage";

export type dataType = {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: string;
  region: string;
  capital: string;
};

function App() {
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<IntroPage data={data} setData={setData} />}
            />
            <Route path=":country" element={<DescPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
