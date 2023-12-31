import { dataType } from "@/App";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

type ComponentProps = {
  setData: React.Dispatch<React.SetStateAction<dataType[]>>;
};

export function SelectDemo({ setData }: ComponentProps) {
  const [region, setRegion] = useState<string>("");

  function handleChange(value: string) {
    setRegion(value);
  }

  useEffect(() => {
    if (region !== "") {
      fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [region, setData]);

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
