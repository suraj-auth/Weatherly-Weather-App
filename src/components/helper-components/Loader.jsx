import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="h-40 pt-40 pb-40 mt-6 flex items-center justify-center rounded-2xl w-8/10 m-auto">
        <div className="px-10 md:px-20 h-1.5/10 w-fit flex items-center justify-center gap-3 bg-blue-600 rounded-xl">
          <div className="h-20 w-20 flex items-center">
            <div className="animate-spin border-4 border-slate-400 border-t-white rounded-full h-10 w-10"></div>
          </div>
          <h1 className="text-white text-xl font-medium">Processing...</h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
