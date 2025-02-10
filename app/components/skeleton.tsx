"use client";

export function SkeletonCard() {
  return (
    <div
      role="status"
      className="max-w-sm p-4 rounded shadow-md animate-pulse md:p-6 max-h-fit"
    >
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
      <div className="flex items-center mt-4">
        <div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function SkeletonOption() {
  return (
    <div
      role="status"
      className="w-full rounded shadow-md animate-pulse  lg:min-h-[100px] bg-[#FAF4F4] my-10"
    >
      <div className="flex justify-center items-center ld:justify-between sm:px-20 flex-col lg:flex-row py-10 gap-5">
        <div className="flex justify-center gap-5 flex-wrap">
          <div className="flex gap-2">
            <div className="flex w-7 h-7 bg-gray-300 rounded-md dark:bg-gray-400"></div>
            <div className="flex w-20 h-7 bg-gray-300 rounded-md dark:bg-gray-400"></div>
          </div>
          <div className="h-7 w-7 bg-gray-200 rounded-md dark:bg-gray-400"></div>
          <div className="h-7 w-7 bg-gray-200 rounded-md dark:bg-gray-400"></div>
          <div className="h-7 w-44 bg-gray-200 rounded-md dark:bg-gray-400"></div>
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <div className="flex gap-3 items-center">
            <div className="h-8 w-14 bg-gray-200 rounded-md dark:bg-gray-400"></div>
            <div className="h-12 w-10 bg-gray-200 rounded-md dark:bg-gray-400"></div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-8 w-24 bg-gray-200 rounded-md dark:bg-gray-400"></div>
            <div className="h-12 w-40 bg-gray-200 rounded-md dark:bg-gray-400"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export function Skeleton({className} : {className : string}) {
  return (
    
    <div role="status" className={`animate-pulse rounded !bg-gray-200 dark:!bg-gray-400 ${className}`}></div>
  )  
}
 