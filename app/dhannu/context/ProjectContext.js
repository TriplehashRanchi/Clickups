"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { GiPlainCircle } from "react-icons/gi";
import { IoIosFlag } from "react-icons/io";
import { RxCircle } from "react-icons/rx";
import { SpaceContext } from "./SpaceContext";
import { useRouter } from "next/navigation";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const { list } = useContext(SpaceContext);
  const [projectID, setProjectId] = useState(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    status: "",
    assignee: "",
    priority: "",
    endDate: "",
    description: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const statusOptions = [
    {
      value: "completed",
      label: "Completed",
      icons: <GiPlainCircle className="text-green-600 mt-1.5" size={16} />,
    },
    {
      value: "pending",
      label: "Pending",
      icons: <RxCircle className="mt-1.5" size={16} />,
    },
    {
      value: "inprogress",
      label: "Progress",
      icons: <GiPlainCircle className="text-purple-600 mt-1.5" size={16} />,
    },
  ];

  const assignUser = [
    { value: "dhannu", label: "Dhannu Kumar" },
    { value: "rohit", label: "Rohit Jha" },
    { value: "rupak", label: "Rupak Rout" },
    { value: "himanshu", label: "Himanshu Nagar" },
  ];

  const priorityOptions = [
    {
      value: "high",
      label: "High",
      icons: <IoIosFlag size={17} className="text-red-600" />,
    },
    {
      value: "medium",
      label: "Medium",
      icons: <IoIosFlag size={17} className="text-yellow-600 " />,
    },
    {
      value: "low",
      label: "Low",
      icons: <IoIosFlag size={17} className="text-white " />,
    },
  ];

  const createProject = () => {
    if (!formData.name.trim()) {
      alert("Project name is required");
      return;
    }

    const newProject = {
      ...formData,
      id: projectID,
      tasks: [],
    };

    setProjects((prev) => [...prev, newProject]);
    setFormData({
      name: "",
      status: "",
      assignee: "",
      priority: "",
      endDate: "",
      description: "",
    });
    router.push("/dhannu/projectDetails");
  };

  useEffect(() => {
    console.log("projects", projects);
    console.log("list", list);
    console.log("projectID", projectID);
  }, [projects]);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        assignUser,
        statusOptions,
        priorityOptions,
        createProject,
        formData,
        handleChange,
        setProjectId,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
