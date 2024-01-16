import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import {
  fetchDataFailure,
  fetchDataStart,
  fetchDataSuccess,
} from "@/slices/dataSlice";

export default function InputSearch() {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchDataStart());
        if (inputValue !== "") {
          const res = await fetch(
            `https://restcountries.com/v3.1/name/${inputValue}`
          );
          const data = await res.json();
          dispatch(fetchDataSuccess(data));
        }
      } catch (err) {
        dispatch(fetchDataFailure());
      }
    };
    fetchData();
  }, [dispatch, inputValue]);

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
