import { useEffect } from "react";

import { ThemeProvider } from "./components/ui/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/others/Layout";
import IntroPage from "./pages/IntroPage";
import DescPage from "./pages/DescPage";

import { useDispatch } from "react-redux";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "./slices/dataSlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchDataStart());
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        dispatch(fetchDataSuccess(data));
      } catch (err) {
        dispatch(fetchDataFailure());
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IntroPage />} />
            <Route path=":country" element={<DescPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
