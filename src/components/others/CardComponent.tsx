import { dataType } from "@/App";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type ComponentProps = {
  obj: dataType;
};
export default function CardComponent({ obj }: ComponentProps) {
  return (
    <Card className="mx-4 my-4">
      <CardHeader className="m-0 p-0">
        <img src={obj.flags.png} className="h-40 object-fill" />
      </CardHeader>
      <CardContent>
        <h3 className="py-4 font-bold text-2xl">{obj.name.common}</h3>
        <p className="py-1">
          <span className="font-bold">Population:</span>{" "}
          {obj.population.toLocaleString()}
        </p>
        <p className="py-1">
          <span className="font-bold">Region: </span> {obj.region}
        </p>
        <p className="py-1">
          <span className="font-bold">Capital:</span> {obj.capital}
        </p>
      </CardContent>
    </Card>
  );
}
