import { useState, useEffect } from "react";
import "./App.css";
import { CommonForm } from "./components/CommonForm";
import { LivePreview } from "./components/LivePreview";
import { SideTab } from "./components/SideTabs";

function App() {
  const [toggle, setToggle] = useState(false);
  const [jobPost, setJobPost] = useState({ checked: false, data: "" });
  const [sideTabData, setSideTabData] = useState([]);
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

  const addJobPost = () => {
    setSideTabData((prev) => [...prev, `Job Post ${sideTabData?.length + 1}`]);
    // const payload =
    // console.log("sideTab",sideTabData);
    // const data = [...sid]
    // addObjectToLocalStorage(`Job Post ${sideTabData?.length+1}`)
  };

  useEffect(() => {
    const localStorageData = retrieveObjectFromLocalStorage();
    console.log(localStorageData, 'localStorageData')
    if (localStorageData?.length > 0) setSideTabDataHandler(localStorageData);
  }, []);

  useEffect(() => {
    if (sideTabData?.length > 0) {
      const data = sideTabData?.map((item, index) => {
        return {
          keyName: `Job Post ${index + 1}`,
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
        };
      });

      localStorage.setItem("jobManager", JSON.stringify(data));
      // addObjectToLocalStorage(data);
    }
  }, [sideTabData]);

  // const addObjectToLocalStorage = (data) => {
  //   const dataToBeSet = JSON.stringify(data);
  //   localStorage.setItem("jobManager", dataToBeSet);
  // };

  const retrieveObjectFromLocalStorage = () => {
    const objectString = localStorage.getItem("jobManager");
    return JSON.parse(objectString) || [];
    // const parsedObject = JSON.parse(objectString);
    // return parsedObject;
  };
  const setSideTabDataHandler = (data) => {
    const mainData = data?.map((item) => item?.keyName);
    setSideTabData(mainData ||  []);
  };

  const getLocalStorageDataByKeyName = (keyName) => {
    const localStorageData = retrieveObjectFromLocalStorage();
    const dataById = localStorageData?.find(
      (item) => item?.keyName === keyName
    );
    setSpecificDataForJobs(dataById?.allData);
  };

  const setSpecificDataForJobs = (allData) => {
    setToggle(allData?.toggle);
    setIsCheckedExp(allData?.isCheckedExp);
    setJobPost(allData?.setJobPost),
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
  
  return (
    <div>
      <div className="bg-gray-800 text-white py-1 px-2 flex justify-between items-center">
        <div className="text-xl font-bold"></div>
        <div>
          <div className="text-xl font-bold">
            Tech Task from <span className="text-orange-400">handy</span>solver
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 lg:h-screen p-3">
        <div className="col-span-12 lg:col-span-8 h-full">
          <div className="grid grid-cols-12 h-screen">
            <div className="col-span-2">
              {" "}
              {/*  h-full */}
              <div className="mt-8" style={{ overflowY: "auto" }}>
                {" "}
                {/*  h-full */}
                <SideTab
                  sideTabData={sideTabData}
                  getLocalStorageDataByKeyName={getLocalStorageDataByKeyName}
                />
              </div>
            </div>
            <div className="col-span-8">
              <div
                className="border border-black h-screen w-full p-4"
                style={{ overflowY: "auto", height: "40rem" }}
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
                <div onClick={addJobPost} className="cursor-pointer">
                  <i className="fa-solid fa-plus"></i>
                  <span className="ml-2">Add</span>
                </div>
                <div className="cursor-pointer">
                  <i className="fa-solid fa-trash-can text-red-500"></i>
                  <span className="ml-2">Delete</span>
                </div>
                <div className="cursor-pointer">
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
                Live Preview
              </div>
              <div className="mt-4">
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
