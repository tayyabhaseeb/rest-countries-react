import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { dataType } from "@/App";

type ComponentProps = {
  setData: React.Dispatch<React.SetStateAction<dataType[]>>;
};

export default function InputSearch({ setData }: ComponentProps) {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (inputValue !== "") {
      fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [inputValue, setData]);

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search for a country"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="my-4 w-[95%] block mx-auto py-6 pl-12 md:ml-8 md:w-full "
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-search absolute top-3 left-5 md:top-7 md:left-11"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
}
