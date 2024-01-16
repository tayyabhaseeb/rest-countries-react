import { useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";

type DescData = {
  flags: {
    svg: string;
  };
  name: {
    common: string;
    nativeName: {
      eng: {
        common: string;
      };
    };
  };

  population: string;
  region: string;
  subregion: string;
  currencies: {
    ERN: {
      name: string;
    };
  };
  languages: {
    eng: string;
    ara: string;
    tir: string;
  };
  capital?: string[];
  borders: string[];
};

export default function DescPage() {
  const [data, setData] = useState<DescData | null>(null);
  const { country } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${country}?fullText=true`
        );
        const data = await res.json();
        setData(data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  return (
    <div className="mt-8">
      <NavLink
        to="/"
        className="mx-4 px-6 py-2 shadow-xl shadow-black-800 border-2 md:mx-8 "
      >
        ← Back
      </NavLink>
      <div className="md:flex md:justify-around">
        <div className="mt-8 md:w-[45%]">
          <img
            src={data?.flags?.svg}
            className="w-80 h-80 block mx-auto md:w-96 md:h-96"
          />
        </div>
        <div className=" md:w-[45%] md:mt-4">
          <div className="md:flex md:items-center md:justify-around  md:mt-10">
            <div className=" p-4 leading-loose">
              <h2 className="font-bold text-2xl mb-2">{data?.name?.common}</h2>
              <p>
                <span className="font-medium">Native Name: </span>{" "}
                {data?.name?.nativeName?.eng?.common}
              </p>
              <p>
                <span className="font-medium">Population: </span>
                {data?.population.toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Region: </span> {data?.region}
              </p>
              <p>
                <span className="font-medium">Sub Region: </span>
                {data?.subregion}
              </p>
              <p>
                <span className="font-medium">Capital: </span>{" "}
                {data?.capital && data?.capital[0]}
              </p>
            </div>
            <div className=" p-4 leading-loose">
              <p>
                <span className="font-medium">Top Level Domain:</span> .be
              </p>
              <p>
                <span className="font-medium">Currencies: </span>
                {Object.values(data?.currencies || {})[0]?.name}
              </p>
              <p>
                <span className="font-medium">Languages: </span>

                {Object.values(data?.languages || {}).map((ele) => {
                  return <span className="mx-1">{ele}</span>;
                })}
              </p>
            </div>
          </div>
          <div className="p-4 leading-loose md:flex md:items-center">
            <h2 className="my-4 text-xl font-medium md:mx-14">
              Border Countries:
            </h2>
            <div className="flex flex-wrap p-4 items-center justify-around md:gap-5">
              {data?.borders?.map((ele) => {
                return (
                  <div className=" p-1 px-2 shadow-xl shadow-black-800 border-2 mb-2">
                    {ele}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
