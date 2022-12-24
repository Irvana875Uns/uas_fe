import React from "react";

export default function TableSkeleton(props) {
  const { count } = props;

  const rows = [...Array(count).keys()];

  return rows?.map((item, index) => {
    return (
      <tr className="shadow animate-pulse" key={index}>
        <td colSpan={6} className="px-5 py-4">
          <div className="flex w-full justify-between items-center">
            <div className="w-full">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-4/5 mb-2.5"></div>
              <div className="w-3/4 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 mr-5"></div>
              <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
          </div>
        </td>
      </tr>
    );
  });
}