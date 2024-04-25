import React from "react";

export const CommonForm = ({
  toggle,
  isCheckedExp,
  setIsCheckedExp,
  setToggle,
  jobPost,
  setJobPost,
  introduction,
  setIntroduction,
  minExp,
  setMinExp,
  maxExp,
  setMaxExp,
  responsibility,
  setResponsibility,
  qualification,
  setQualification,
  salaryRange,
  setSalaryRange,
  statement,
  setStatement,
  company,
  setCompany,
  jobLocation,
  setJobLocation,
  jobType,
  setJobType,
  jobMode,
  setJobMode,
}) => {
  const onChangeHandler = (value, dispatchFun) => {
    dispatchFun((prev) => ({ ...prev, data: value }));
  };
  const onChangeCheckedHandler = (value, dispatchFun) => {
    dispatchFun((prev) => ({ ...prev, checked: value }));
  };

  return (
    <div>
      <div className="">
        <div className="w-full max-w-xl mx-auto">
          <div className="py-2 mb-5">
            <div className="mb-4 flex flex-col md:flex-row md:items-center md:gap-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={jobPost?.checked}
                  onChange={(e) =>
                    onChangeCheckedHandler(e.target.checked, setJobPost)
                  }
                  className="h-6 w-6 accent-white focus:outline-none"
                />
              </div>
              <div className="flex-grow mt-2 md:mt-0">
                <input
                  type="text"
                  placeholder="Job Post Title"
                  value={jobPost?.data}
                  onChange={(e) => onChangeHandler(e.target.value, setJobPost)}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none w-50"
                />
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <label
                  htmlFor="switch"
                  className="flex items-center cursor-pointer"
                >
                  <div className="mr-2">Active? </div>
                  <button
                    className={`transition ease-in-out duration-300 w-12 bg-gray-200 rounded-full focus:outline-none 
          ${toggle ? "bg-green-700" : ""}`}
                    onClick={() => setToggle(!toggle)}
                  >
                    <div
                      className={`transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow ${
                        toggle ? "transform translate-x-full" : ""
                      }`}
                    ></div>
                  </button>
                </label>
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={introduction?.checked}
                  onChange={(e) =>
                    onChangeCheckedHandler(e.target.checked, setIntroduction)
                  }
                  className="h-6 w-6 accent-white focus:outline-none"
                />
              </div>
              <div className="flex flex-grow items-center">
                <p className="underline">Introduction</p>
              </div>
            </div>
            <div className="mb-4 my-auto" style={{ marginLeft: "2rem" }}>
              <textarea
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                type="text"
                placeholder="Introduction"
                value={introduction?.data}
                onChange={(e) =>
                  onChangeHandler(e.target.value, setIntroduction)
                }
                id="apply-link"
                name="apply-link"
              />
            </div>

            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={responsibility?.checked}
                  onChange={(e) =>
                    onChangeCheckedHandler(e.target.checked, setResponsibility)
                  }
                  className="h-6 w-6 accent-white focus:outline-none"
                />
              </div>
              <div className="flex flex-grow items-center">
                <p className="underline">Roles & Responsibility</p>
              </div>
            </div>
            <div className="mb-4 my-auto" style={{ marginLeft: "2rem" }}>
              <textarea
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                type="text"
                placeholder="Roles & Responsibility"
                value={responsibility?.data}
                onChange={(e) =>
                  onChangeHandler(e.target.value, setResponsibility)
                }
                id="apply-link"
                name="apply-link"
              />
            </div>
            {/* -----------------new start select----------- */}
            <div class="grid grid-cols-12 mb-4">
              <div class="col-span-12 sm:col-span-6">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={isCheckedExp}
                    onChange={(e) =>
                      onChangeCheckedHandler(e.target.checked, setIsCheckedExp)
                    }
                    className="h-6 w-6 accent-white focus:outline-none"
                  />
                  <div className="items-center">
                    <p className="underline">Experience Range (Yrs)</p>
                  </div>
                </div>
              </div>
              <div class="col-span-12 sm:col-span-6">
                <div class="grid grid-cols-12 gap-2">
                  <div class="col-span-12 sm:col-span-6">
                    <select
                      className="w-full bg-white border border-gray-400 text-gray-700 py-2 px-3 rounded focus:outline-none"
                      id="min-exp"
                      value={minExp}
                      onChange={(e) => setMinExp(e.target.value)}
                      name="min-exp"
                    >
                      <option value="" disabled>
                        Min
                      </option>
                      {[0, 1, 2, 3, 4, 5].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="col-span-12 sm:col-span-6">
                    <select
                      className="w-full bg-white border border-gray-400 text-gray-700 py-2 px-3 rounded focus:outline-none"
                      id="max-exp"
                      value={maxExp}
                      onChange={(e) => setMaxExp(e.target.value)}
                      name="max-exp"
                    >
                      <option value="" disabled>
                        Max
                      </option>
                      {[0, 1, 2, 3, 4, 5].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------qualification------------------------ */}
            <div className="grid grid-cols-12 mb-4">
              <div className="col-span-12 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={qualification?.checked}
                  onChange={(e) =>
                    onChangeCheckedHandler(e.target.checked, setQualification)
                  }
                  className="h-6 w-6 accent-white focus:outline-none"
                />
                <input
                  type="text"
                  value={qualification?.data}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, setQualification)
                  }
                  placeholder="Qualifications"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none mr-2 w-full"
                />
              </div>
            </div>

            {/* --------------------salary range--------------- */}
            <div className="grid grid-cols-12 mb-4">
              <div className="col-span-12 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={salaryRange?.checked}
                  onChange={(e) =>
                    onChangeCheckedHandler(e.target.checked, setSalaryRange)
                  }
                  className="h-6 w-6 accent-white focus:outline-none"
                />
                <input
                  type="number"
                  value={salaryRange?.data}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, setSalaryRange)
                  }
                  placeholder="Salary Range"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none w-50"
                />
              </div>
            </div>

            <div className="mb-4 flex gap-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={statement?.checked}
                  onChange={(e) =>
                    onChangeCheckedHandler(e.target.checked, setStatement)
                  }
                  className="h-6 w-6 accent-white focus:outline-none"
                />
              </div>
              <div className="flex flex-grow items-center">
                <textarea
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  type="text"
                  placeholder="Concluding Statement"
                  value={statement?.data}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, setStatement)
                  }
                  id="apply-link"
                  name="apply-link"
                />
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={company?.checked}
                  onChange={(e) =>
                    onChangeCheckedHandler(e.target.checked, setCompany)
                  }
                  className="h-6 w-6 accent-white focus:outline-none"
                />
              </div>
              <div className="flex flex-grow items-center">
                <input
                  type="text"
                  value={company?.data}
                  onChange={(e) => onChangeHandler(e.target.value, setCompany)}
                  placeholder="Company"
                  className="border w-50 border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={jobLocation?.checked}
                  onChange={(e) =>
                    onChangeCheckedHandler(e.target.checked, setJobLocation)
                  }
                  className="h-6 w-6 accent-white focus:outline-none"
                />
              </div>
              <div className="flex flex-grow items-center">
                <input
                  type="text"
                  value={jobLocation?.data}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, setJobLocation)
                  }
                  placeholder="Job Location (Map Search)"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none w-50"
                />
              </div>
            </div>

            {/* --------------new start job type------------ */}
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-6 sm:col-span-6 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={jobType?.checked}
                  onChange={(e) =>
                    onChangeCheckedHandler(e.target.checked, setJobType)
                  }
                  className="h-6 w-6 accent-white focus:outline-none"
                />
                <select
                  className="bg-white border border-gray-400 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none w-full"
                  id="job-type"
                  value={jobType?.data}
                  onChange={(e) => onChangeHandler(e.target.value, setJobType)}
                  name="job-type"
                >
                  <option value="" selected disabled>
                    Job Type
                  </option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div class="col-span-6 sm:col-span-6 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={jobMode?.checked}
                  onChange={(e) =>
                    onChangeCheckedHandler(e.target.checked, setJobMode)
                  }
                  className="h-6 w-6 accent-white focus:outline-none"
                />
                <select
                  className="bg-white border border-gray-400 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none w-full"
                  id="job-type"
                  value={jobMode?.data}
                  onChange={(e) => onChangeHandler(e.target.value, setJobMode)}
                  name="job-type"
                >
                  <option value="" selected disabled>
                    Job Mode
                  </option>
                  <option value="Is Remote">Is Remote</option>
                  <option value="5 Working Day">5 Working Day</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
