import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] ml-2 md:mr-8">
        <SelectValue placeholder="Filter By Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
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
