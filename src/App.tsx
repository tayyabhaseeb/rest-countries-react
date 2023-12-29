import { useEffect, useState } from "react";
import CardComponent from "./components/others/CardComponent";
import Header from "./components/others/Header";
import InputSearch from "./components/others/InputSearch";
import { SelectDemo } from "./components/others/SelectDemo";

import { ThemeProvider } from "./components/ui/theme-provider";

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
      <Header />
      <div className=" md:flex md:flex-row md:items-center md:justify-between md:p-4">
        <InputSearch />
        <SelectDemo />
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-8 md:mx-8 mx-4">
        {data.map((obj) => (
          <CardComponent obj={obj} />
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;

{
  /* <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent /> */
}
