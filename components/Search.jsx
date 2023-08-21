"use client";

import { SearchContext } from "@/context/search";
import { useContext } from "react";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";

const Search = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:-[98px] "
          : "bg-white rounded-[20px] py-6 xl:r-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div className="xl:h-full flex items-center px-6 xl:px-0">
        <LocationSelection />
        <DateSelection />
      </div>
    </div>
  );
};

export default Search;
