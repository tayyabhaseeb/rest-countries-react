import CardComponent from "@/components/others/CardComponent";
import InputSearch from "@/components/others/InputSearch";
import { SelectDemo } from "@/components/others/SelectDemo";
import type { RootState } from "./../store/store";
import { useSelector } from "react-redux";

export default function IntroPage() {
  const data = useSelector((state: RootState) => state.allCountriesData.items);
  return (
    <>
      <div className=" md:flex md:flex-row md:items-center md:justify-between md:p-4">
        <InputSearch />
        <SelectDemo />
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-8 md:mx-8 mx-4">
        {data.map((obj) => (
          <CardComponent obj={obj} />
        ))}
      </div>
    </>
  );
}
