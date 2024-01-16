import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import {
  fetchDataFailure,
  fetchDataStart,
  fetchDataSuccess,
} from "@/slices/dataSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export function SelectDemo() {
  const [region, setRegion] = useState<string>("");
  const dispatch = useDispatch();
  function handleChange(value: string) {
    setRegion(value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchDataStart());
        if (region !== "") {
          const res = await fetch(
            `https://restcountries.com/v3.1/region/${region}`
          );
          const data = await res.json();
          dispatch(fetchDataSuccess(data));
        }
      } catch (err) {
        dispatch(fetchDataFailure());
      }
    };
    fetchData();
  }, [region, dispatch]);

  return (
    <Select value={region} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px] ml-2 md:mr-8">
        <SelectValue placeholder="Filter By Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Regions</SelectLabel>
          <SelectItem value="africa">Africa</SelectItem>
          <SelectItem value="america">America</SelectItem>
          <SelectItem value="asia">Asia</SelectItem>
          <SelectItem value="europe">Europe</SelectItem>
          <SelectItem value="oceania">Oceania</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
