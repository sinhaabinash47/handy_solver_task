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
          <div>
            <div className="job-info py-2 mb-5">
              <div className="mb-4 flex justify-around gap-2">
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
                <div className="flex flex-grow items-center">
                  <input
                    type="text"
                    placeholder="Job Post Title"
                    value={jobPost?.data}
                    onChange={(e) =>
                      onChangeHandler(e.target.value, setJobPost)
                    }
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none mr-2 w-full"
                  />
                </div>
                <div className="flex items-center">
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

              <div className="mb-4 flex justify-around gap-2">
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
                  type="email"
                  value={introduction?.data}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, setIntroduction)
                  }
                  id="apply-link"
                  name="apply-link"
                />
              </div>

              <div className="mb-4 flex justify-around gap-2">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    checked={responsibility?.checked}
                    onChange={(e) =>
                      onChangeCheckedHandler(
                        e.target.checked,
                        setResponsibility
                      )
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
                  type="email"
                  value={responsibility?.data}
                  onChange={(e) =>
                    onChangeHandler(e.target.value, setResponsibility)
                  }
                  id="apply-link"
                  name="apply-link"
                />
              </div>

              <div className="mb-4 flex gap-2">
                <div className="mb-4 flex justify-around gap-2">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      checked={isCheckedExp}
                      onChange={(e) =>
                        onChangeCheckedHandler(
                          e.target.checked,
                          setIsCheckedExp
                        )
                      }
                      className="h-6 w-6 accent-white focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-grow items-center">
                    <p className="underline">Experience Range (Yrs)</p>
                  </div>
                </div>
                <div className="w-full md:w-3/12 mb-4 md:mb-0">
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:border-gray-500"
                      id="job-type"
                      value={minExp}
                      onChange={(e) => setMinExp(e.target.value)}
                      name="job-type"
                    >
                      <option defaultValue="" disabled>
                        Min
                      </option>
                      <option defaultValue={"0"}>0</option>
                      <option defaultValue={"1"}>1</option>
                      <option defaultValue={"2"}>2</option>
                      <option defaultValue={"3"}>3</option>
                      <option defaultValue={"4"}>4</option>
                      <option defaultValue={"5"}>5</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-3/12 mb-4 md:mb-0">
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:border-gray-500"
                      id="job-type"
                      value={maxExp}
                      onChange={(e) => setMaxExp(e.target.value)}
                      name="job-type"
                    >
                      <option value="" disabled>
                        Max
                      </option>
                      <option value={"0"}>0</option>
                      <option value={"1"}>1</option>
                      <option value={"2"}>2</option>
                      <option value={"3"}>3</option>
                      <option value={"4"}>4</option>
                      <option value={"5"}>5</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 flex justify-around gap-2">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    value={qualification?.checked}
                    onChange={(e) =>
                      onChangeCheckedHandler(e.target.checked, setQualification)
                    }
                    className="h-6 w-6 accent-white focus:outline-none"
                  />
                </div>
                <div className="flex flex-grow items-center">
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

              <div className="mb-4 flex justify-around gap-2">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    value={salaryRange?.checked}
                    onChange={(e) =>
                      onChangeCheckedHandler(e.target.checked, setSalaryRange)
                    }
                    className="h-6 w-6 accent-white focus:outline-none"
                  />
                </div>
                <div className="flex flex-grow items-center">
                  <input
                    type="text"
                    value={salaryRange?.data}
                    onChange={(e) =>
                      onChangeHandler(e.target.value, setSalaryRange)
                    }
                    placeholder="Salary Range"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none mr-2 w-full"
                  />
                </div>
              </div>

              <div className="mb-4 flex justify-around gap-2">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    value={statement?.checked}
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
                    value={statement?.data}
                    onChange={(e) =>
                      onChangeHandler(e.target.value, setStatement)
                    }
                    id="apply-link"
                    name="apply-link"
                  />
                </div>
              </div>

              <div className="mb-4 flex justify-around gap-2">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    value={company?.checked}
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
                    onChange={(e) =>
                      onChangeHandler(e.target.value, setCompany)
                    }
                    placeholder="Company"
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none mr-2 w-full"
                  />
                </div>
              </div>

              <div className="mb-4 flex justify-around gap-2">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    value={jobLocation?.checked}
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
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none mr-2 w-full"
                  />
                </div>
              </div>

              <div className="mb-4 flex gap-2">
                <div className="mb-4 flex justify-around gap-2">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      value={jobType?.checked}
                      onChange={(e) =>
                        onChangeCheckedHandler(e.target.checked, setJobType)
                      }
                      className="h-6 w-6 accent-white focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-full md:w-3/12 mb-4 md:mb-0">
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:border-gray-500"
                      id="job-type"
                      value={jobType?.data}
                      onChange={(e) =>
                        onChangeHandler(e.target.value, setJobType)
                      }
                      name="job-type"
                    >
                      <option value="" selected disabled>
                        Job Type
                      </option>
                      <option value="Part-time">Part-time</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Contract">Contract</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex justify-around gap-2">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      value={jobMode?.checked}
                      onChange={(e) =>
                        onChangeCheckedHandler(e.target.checked, setJobMode)
                      }
                      className="h-6 w-6 accent-white focus:outline-none"
                    />
                  </div>
                </div>
                <div className="w-full md:w-3/12 mb-4 md:mb-0">
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:border-gray-500"
                      id="job-type"
                      value={jobMode?.data}
                      onChange={(e) =>
                        onChangeHandler(e.target.value, setJobMode)
                      }
                      name="job-type"
                    >
                      <option value="" selected disabled>
                        Job Mode
                      </option>
                      <option value="Is Remote">Is Remote</option>
                      <option value="5 Working Day">5 Working Day</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
