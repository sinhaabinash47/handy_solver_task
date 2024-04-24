import React from "react";

export const SideTab = ({
  sideTabData,
  activeSideTabOption,
  getLocalStorageDataByKeyName,
}) => {
  return (
    <div className="" style={{}}>
      {sideTabData?.length > 0 &&
        sideTabData?.map((item, index) => (
          <div
            key={index}
            className={`p-2  border-black bg-slate-200 cursor-pointer ${
              activeSideTabOption === item?.keyName
                ? "active-sidebar-overflow border-l border-b border-t"
                : "border"
            }`}
            onClick={(e) => getLocalStorageDataByKeyName(item?.keyName)}
          >
            {item?.keyName}
          </div>
        ))}
    </div>
  );
};
