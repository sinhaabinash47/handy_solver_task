import React from "react";

export const SideTab = ({ sideTabData, getLocalStorageDataByKeyName }) => {
  return (
    <div>
      <div className="p-2 border-t border-l border-b border-black bg-white">
        New Job +
      </div>
      {sideTabData?.length > 0 &&
        sideTabData?.map((item, index) => (
          <div
            key={index}
            className="p-2 border border-black bg-slate-200 cursor-pointer"
            onClick={(e) => getLocalStorageDataByKeyName(item)}
          >
            {item}
          </div>
        ))}
    </div>
  );
};
