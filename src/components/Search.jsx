import React from "react";

const Search = () => {
  return (
    <div className="w-full flex justify-center">
      <input
        className="p-2 xl:w-6/12 lg:w-8/12 w-10/12 rounded-xl dark:bg-[#4b4a4d] focus:outline-none dark:placeholder:text-slate-300 placeholder:text-slate-600 placeholder:pl-5 pl-5 focus:bg-gray-200 focus:h-[42px] text-black dark:text-slate-100 bg-slate-200  fixed top-40 md:top-20  "
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
