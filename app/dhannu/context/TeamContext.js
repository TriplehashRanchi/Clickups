"use client";
import { createContext, useEffect, useState } from "react";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [showFrom, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const handleShowUserDetails = (user) => {
    setShowUserDetails((prev) => (prev && prev.id === user.id ? null : user));
  };

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    pincode: "",
    employmentStartDate: "",
    employmentType: "",
    jobTitle: "",
    department: "",
    reportingManager: "",
  });

  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const maritalStatusOptions = [
    { label: "Single", value: "single" },
    { label: "Married", value: "married" },
    { label: "Divorced", value: "divorced" },
  ];

  const employmentTypes = [
    { label: "Full-Time", value: "fulltime" },
    { label: "Part-Time", value: "parttime" },
    { label: "Internship", value: "internship" },
  ];

  const jobTitles = [
    { label: "Frontend Developer", value: "frontend" },
    { label: "Backend Developer", value: "backend" },
    { label: "Full Stack Developer", value: "fullstack" },
    { label: "DevOps Engineer", value: "devops" },
  ];

  const departments = [
    { label: "Engineering", value: "engineering" },
    { label: "Product", value: "product" },
    { label: "Design", value: "design" },
    { label: "Marketing", value: "marketing" },
    { label: "Human Resources", value: "hr" },
    { label: "Finance", value: "finance" },
    { label: "Sales", value: "sales" },
  ];

  const reportingManagers = [
    { label: "Kunal Kumar", value: "Kunal sir" },
    { label: "Gautum sir", value: "Gautum sir" },
    { label: "Sagar Kumar", value: "Sagar sir" },
  ];

  const nationalities = [
    { label: "Indian", value: "indian" },
    { label: "American", value: "american" },
    { label: "Canadian", value: "canadian" },
    { label: "British", value: "british" },
    { label: "Australian", value: "australian" },
    { label: "German", value: "german" },
    { label: "French", value: "french" },
  ];

  const handleShowForm = () => {
    setShowForm(!showFrom);
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    setUsers((prev) => [...prev, { id: Date.now(), ...formData }]);
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      gender: "",
      maritalStatus: "",
      nationality: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      state: "",
      city: "",
      pincode: "",
      employmentStartDate: "",
      employmentType: "",
      jobTitle: "",
      department: "",
      reportingManager: "",
    });
    setShowForm(false);
  };

  const avatarColors = [
    "bg-purple-600",
    "bg-pink-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-indigo-500",
  ];

  const handleDelete = (value) => {
    setUsers((users) => users.filter((user) => user.id !== value));
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <TeamContext.Provider
      value={{
        showFrom,
        handleShowForm,
        genderOptions,
        maritalStatusOptions,
        employmentTypes,
        jobTitles,
        departments,
        reportingManagers,
        nationalities,
        formData,
        handleSubmit,
        handleChange,
        showUserDetails,
        handleShowUserDetails,
        setShowUserDetails,
        users,
        avatarColors,
        openMenu,
        setOpenMenu,
        handleDelete,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};
