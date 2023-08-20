"use client";

import { SearchContext } from "@/context/search";
import { useContext } from "react";
import LocationSelection from "./LocationSelection";

const Search = () => {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:-[98px] "
          : "bg-white rounden-[20px] py-6 xl:r-4 xl:h-[98ox]"
      } hidden xl:blck w-full relative shadow-lg`}
    >
      <div className="xl:h-full flex items-center px-6 xl:px-0">
        <LocationSelection />
      </div>
    </div>
  );
};

export default Search;
