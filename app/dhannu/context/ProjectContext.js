"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { GiPlainCircle } from "react-icons/gi";
import { IoIosFlag } from "react-icons/io";
import { RxCircle } from "react-icons/rx";
import { SpaceContext } from "./SpaceContext";
import { useRouter } from "next/navigation";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const { list, setList } = useContext(SpaceContext);
  const [projectID, setProjectId] = useState(null);
  const [projectState, setProjectState] = useState([]);
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
      value: "progress",
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
      id: Date.now(),
      projectID: projectID,
      tasks: [],
    };

    setList((prev) =>
      prev.map((cur) => {
        return cur.id == projectID
          ? { ...cur, projects: [...cur.projects, newProject] }
          : cur;
      })
    );
    setFormData({
      name: "",
      status: "",
      assignee: "",
      priority: "",
      endDate: "",
      description: "",
    });
    router.push(`/dhannu/projectList/${projectID}`);
  };

  const handleAddTask = (projectId, taskName) => {
    const newTasks = {
      id: Date.now(),
      name: taskName,
      assignee: "",
      priority: "",
      dueDate: "",
      status: "",
    };

    const updatedProjectTask = projectState.map((project) =>
      project.id == projectId
        ? { ...project, tasks: [...project.tasks, newTasks] }
        : project
    );

    setProjectState(updatedProjectTask);
  };

  const handleUpdateTask = (projectId, taskId, field, value) => {
    setProjectState((prevProject) =>
      prevProject.map((project) =>
        project.id === projectId
          ? {
              ...project,
              tasks:
                field === "delete"
                  ? project.tasks.filter((t) => t.id !== taskId)
                  : project.tasks.map((task) =>
                      task.id === taskId ? { ...task, [field]: value } : task
                    ),
            }
          : project
      )
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        assignUser,
        statusOptions,
        priorityOptions,
        createProject,
        formData,
        handleChange,
        setProjectId,
        handleUpdateTask,
        handleAddTask,
        projectState,
        setProjectState
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
