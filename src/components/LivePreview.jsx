import React from "react";
import { DummyPreview } from "./DummyPreview";

export const LivePreview = ({
  toggle,
  isCheckedExp,
  jobPost,
  introduction,
  minExp,
  maxExp,
  responsibility,
  qualification,
  salaryRange,
  statement,
  company,
  jobLocation,
  jobType,
  jobMode,
}) => {
  return (
    <>
      {toggle ? (
        <div className="px-3">
          <div className="flex justify-between mb-2">
            <div className="text-xl flex items-center">
              {jobPost?.checked && jobPost?.data}
            </div>
            <div className="flex gap-2">
              {jobMode?.checked && (
                <button className="p-2 text-sm text-black bg-blue-400 rounded-full">
                  {jobMode?.data}
                </button>
              )}
            </div>
          </div>
          <div>
            {introduction?.checked && (
              <div>
                <span className="font-bold">Introduction: </span>
                <span>{introduction?.data}</span>
              </div>
            )}
          </div>
          {responsibility?.checked && (
            <div className="mt-2">
              <div className="font-bold">Roles and Responsibilty</div>
              <p>{responsibility?.data}</p>
            </div>
          )}
          {isCheckedExp && (
            <div className="mt-2 flex">
              <div>
                <span className="font-bold">Prefered Experience: </span>
                <span>
                  {minExp} to {maxExp} years
                </span>
              </div>
            </div>
          )}
          {qualification?.checked && (
            <div className="mt-2 flex">
              <div>
                <span className="font-bold">Qualification: </span>
                <span>{qualification?.data}</span>
              </div>
            </div>
          )}
          {salaryRange?.checked && (
            <div className="mt-2 flex">
              <div>
                <span className="font-bold">Salary Range: </span>
                <span>{salaryRange?.data}</span>
              </div>
            </div>
          )}
          {statement?.checked && (
            <div className="mt-2 flex">
              <div>
                <span className="font-bold">Concluding Statement: </span>
                <span>{statement?.data}</span>
              </div>
            </div>
          )}
          {company?.checked && (
            <div className="mt-2 flex">
              <div>
                <span className="font-bold">Company: </span>
                <span>{company?.data}</span>
              </div>
            </div>
          )}

          {jobLocation?.checked && (
            <div className="mt-2 flex">
              <div>
                <span className="font-bold">Location: </span>
                <span>{jobLocation?.data}</span>
              </div>
            </div>
          )}

          {jobType?.checked && (
            <div className="mt-2 flex">
              <div>
                <span className="font-bold">Job Type: </span>
                <span>{jobType?.data}</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <DummyPreview />
      )}
    </>
  );
};
