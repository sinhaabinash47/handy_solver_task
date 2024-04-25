import { useState, useEffect } from "react";
import "./App.css";
import { CommonForm } from "./components/CommonForm";
import { LivePreview } from "./components/LivePreview";
import { SideTab } from "./components/SideTabs";

function App() {
  const [activeSideTabOption, setActiveSideTabOption] = useState("New Jobs +");
  const [refresh, setRefresh] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [jobPost, setJobPost] = useState({ checked: false, data: "" });
  const [sideTabData, setSideTabData] = useState([
    { keyName: "New Jobs +", allData: [] },
  ]);
  const [introduction, setIntroduction] = useState({
    checked: false,
    data: "",
  });
  const [responsibility, setResponsibility] = useState({
    checked: false,
    data: "",
  });
  const [isCheckedExp, setIsCheckedExp] = useState(false);
  const [minExp, setMinExp] = useState("");
  const [maxExp, setMaxExp] = useState("");
  const [qualification, setQualification] = useState({
    checked: false,
    data: "",
  });
  const [salaryRange, setSalaryRange] = useState({ checked: false, data: "" });
  const [statement, setStatement] = useState({ checked: false, data: "" });
  const [company, setCompany] = useState({ checked: false, data: "" });
  const [jobLocation, setJobLocation] = useState({ checked: false, data: "" });
  const [jobType, setJobType] = useState({ checked: false, data: "" });
  const [jobMode, setJobMode] = useState({ checked: false, data: "" });

  const toggleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  const addJobPost = (keyName) => {
    if (keyName === "New Jobs +") {
      let copyMainData = [...sideTabData]?.filter(
        (item) => item?.keyName !== "New Jobs +"
      );
      setSideTabData((prev) => [
        ...prev,
        {
          keyName: `Job Post ${copyMainData?.length + 1}`,
          allData: {
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
          },
        },
      ]);
      let payload = [...sideTabData]?.filter(
        (item) => item?.keyName !== "New Jobs +"
      );
      payload.push({
        keyName: `Job Post ${payload?.length + 1}`,
        allData: {
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
        },
      });
      addObjectToLocalStorage(payload);
    }
  };

  useEffect(() => {
    const localStorageData = retrieveObjectFromLocalStorage();
    if (localStorageData?.length > 0) setSideTabDataHandler(localStorageData);
  }, [refresh]);

  const addObjectToLocalStorage = async (data) => {
    const dataToBeSet = JSON.stringify(data);
    localStorage.setItem("jobManager", dataToBeSet);
  };

  const retrieveObjectFromLocalStorage = () => {
    const objectString = localStorage.getItem("jobManager");
    const parsedObject = JSON.parse(objectString);
    return parsedObject;
  };
  const setSideTabDataHandler = (data) => {
    const sideTabDataCopy = [{ keyName: "New Jobs +", allData: [] }, ...data];
    setSideTabData(sideTabDataCopy);
  };

  const getLocalStorageDataByKeyName = (keyName) => {
    if (keyName === "New Jobs +") {
      resetAllFormData();
    } else {
      const localStorageData = retrieveObjectFromLocalStorage();
      const dataById = localStorageData?.find(
        (item) => item?.keyName === keyName
      );
      setSpecificDataForJobs(dataById?.allData);
    }
    setActiveSideTabOption(keyName);
  };

  const setSpecificDataForJobs = (allData) => {
    setToggle(allData?.toggle);
    setIsCheckedExp(allData?.isCheckedExp);
    setJobPost(allData?.jobPost),
      setIntroduction(allData?.introduction),
      setMinExp(allData?.minExp),
      setMaxExp(allData?.maxExp),
      setResponsibility(allData?.responsibility),
      setQualification(allData?.qualification),
      setSalaryRange(allData?.salaryRange),
      setStatement(allData?.statement),
      setCompany(allData?.company),
      setJobLocation(allData?.jobLocation),
      setJobType(allData?.jobType),
      setJobMode(allData?.jobMode);
  };

  const resetAllFormData = () => {
    setToggle(false);
    setIsCheckedExp(false);
    setJobPost({ checked: false, data: "" }),
      setIntroduction({ checked: false, data: "" }),
      setMinExp(""),
      setMaxExp(""),
      setResponsibility({ checked: false, data: "" }),
      setQualification({ checked: false, data: "" }),
      setSalaryRange({ checked: false, data: "" }),
      setStatement({ checked: false, data: "" }),
      setCompany({ checked: false, data: "" }),
      setJobLocation({ checked: false, data: "" }),
      setJobType({ checked: false, data: "" }),
      setJobMode({ checked: false, data: "" });
  };

  const deleteDataByKeyName = (keyName) => {
    if (keyName !== "New Jobs +") {
      const allLocalData = retrieveObjectFromLocalStorage();
      const filterLocalData = allLocalData?.filter(
        (item) => item?.keyName !== keyName
      );
      const rearrangeData = reArrangeData(filterLocalData);
      addObjectToLocalStorage(rearrangeData);
      resetAllFormData();
      setSideTabDataHandler(rearrangeData);
      setActiveSideTabOption("New Jobs +");
      toggleRefresh();
    }
  };

  const reArrangeData = (data) => {
    const sortedData = data?.map((item, index) => {
      return {
        ...item,
        keyName: `Job Post ${index + 1}`,
      };
    });
    return sortedData;
  };

  const duplicateJobByKeyName = (keyName) => {
    if (keyName !== "New Jobs +") {
      let allLocalData = retrieveObjectFromLocalStorage();
      let isFound = allLocalData?.find((item) => item?.keyName === keyName);
      if (isFound) {
        let modifiedObject = { ...isFound };
        modifiedObject.keyName = `Job Post ${allLocalData?.length + 1}`;
        allLocalData.push(modifiedObject);
        addObjectToLocalStorage(allLocalData);
        toggleRefresh();
      }
    }
  };

  return (
    <div>
      <div className="bg-gray-800 text-white fixed top-0 w-full z-10 flex justify-between items-center">
        <div className="text-xl font-bold"></div>
        <div>
          <div className="text-xl font-bold">
            Tech Task from <span className="text-orange-400">handy</span>solver
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 lg:h-screen p-2 mx-auto mt-7">
        <div className="col-span-12 lg:col-span-8 h-full">
          <div className="grid grid-cols-12 h-screen">
            <div className="col-span-2">
              <div className="mt-8">
                <SideTab
                  sideTabData={sideTabData}
                  activeSideTabOption={activeSideTabOption}
                  getLocalStorageDataByKeyName={getLocalStorageDataByKeyName}
                />
              </div>
            </div>
            <div className="col-span-8">
              <div
                className="border border-black h-screen w-full p-4"
                style={{ overflowY: "auto", height: "40rem", backgroundColor:"rgb(201 198 198 / 16%)" }}
              >
                {/* forms */}
                <CommonForm
                  toggle={toggle}
                  isCheckedExp={isCheckedExp}
                  setIsCheckedExp={setIsCheckedExp}
                  setToggle={setToggle}
                  jobPost={jobPost}
                  setJobPost={setJobPost}
                  introduction={introduction}
                  setIntroduction={setIntroduction}
                  minExp={minExp}
                  setMinExp={setMinExp}
                  maxExp={maxExp}
                  setMaxExp={setMaxExp}
                  responsibility={responsibility}
                  setResponsibility={setResponsibility}
                  qualification={qualification}
                  setQualification={setQualification}
                  salaryRange={salaryRange}
                  setSalaryRange={setSalaryRange}
                  statement={statement}
                  setStatement={setStatement}
                  company={company}
                  setCompany={setCompany}
                  jobLocation={jobLocation}
                  setJobLocation={setJobLocation}
                  jobType={jobType}
                  setJobType={setJobType}
                  jobMode={jobMode}
                  setJobMode={setJobMode}
                />
              </div>
            </div>
            <div className="col-span-2">
              <div className="border-t border-r border-b mt-4 flex flex-col  justify-center border-black h-20 w-full p-2">
                <div
                  onClick={() => addJobPost(activeSideTabOption)}
                  className="cursor-pointer"
                >
                  <i className="fa-solid fa-plus"></i>
                  <span className="ml-2">Add</span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => deleteDataByKeyName(activeSideTabOption)}
                >
                  <i className="fa-solid fa-trash-can text-red-500"></i>
                  <span className="ml-2">Delete</span>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => duplicateJobByKeyName(activeSideTabOption)}
                >
                  <i className="fa-solid fa-copy text-blue-500"></i>
                  <span className="ml-2">Duplicate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 h-full">
          <div className="flex items-center w-full p-3">
            <div
              className="border border-black w-full relative"
              style={{ height: "90%" }}
            >
              <div
                className="bg-white px-1"
                style={{
                  width: "max-content",
                  position: "absolute",
                  top: "-10px",
                  left: "15px",
                }}
              >
                <i class="mr-2 text-blue-700 fa-solid fa-magnifying-glass"></i>
                Live Preview
              </div>
              <div className="mt-4" style={{ overflowY: "auto", height: "35rem" }}>
                <LivePreview
                  toggle={toggle}
                  isCheckedExp={isCheckedExp}
                  setIsCheckedExp={setIsCheckedExp}
                  setToggle={setToggle}
                  jobPost={jobPost}
                  setJobPost={setJobPost}
                  introduction={introduction}
                  setIntroduction={setIntroduction}
                  minExp={minExp}
                  setMinExp={setMinExp}
                  maxExp={maxExp}
                  setMaxExp={setMaxExp}
                  responsibility={responsibility}
                  setResponsibility={setResponsibility}
                  qualification={qualification}
                  setQualification={setQualification}
                  salaryRange={salaryRange}
                  setSalaryRange={setSalaryRange}
                  statement={statement}
                  setStatement={setStatement}
                  company={company}
                  setCompany={setCompany}
                  jobLocation={jobLocation}
                  setJobLocation={setJobLocation}
                  jobType={jobType}
                  setJobType={setJobType}
                  jobMode={jobMode}
                  setJobMode={setJobMode}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
