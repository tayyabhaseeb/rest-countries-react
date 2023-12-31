import { dataType } from "@/App";
import CardComponent from "@/components/others/CardComponent";
import InputSearch from "@/components/others/InputSearch";
import { SelectDemo } from "@/components/others/SelectDemo";

type ComponentProps = {
  data: dataType[];
  setData: React.Dispatch<React.SetStateAction<dataType[]>>;
};

export default function IntroPage({ data, setData }: ComponentProps) {
  return (
    <>
      <div className=" md:flex md:flex-row md:items-center md:justify-between md:p-4">
        <InputSearch setData={setData} />
        <SelectDemo setData={setData} />
      </div>
      <div className="md:grid md:grid-cols-4 md:gap-8 md:mx-8 mx-4">
        {data.map((obj) => (
          <CardComponent obj={obj} />
        ))}
      </div>
    </>
  );
}
