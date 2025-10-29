module.exports = [
"[project]/app/dhannu/context/SpaceContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpaceContext",
    ()=>SpaceContext,
    "SpaceProvide",
    ()=>SpaceProvide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SpaceContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
const SpaceProvide = ({ children })=>{
    const [space, setSpace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spaceInput, setSpaceInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [list, setList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleSpace = ()=>{
        setSpace((prev)=>!prev);
    };
    const colors = [
        "bg-red-500",
        "bg-green-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-orange-500",
        "bg-teal-500"
    ];
    const handleList = ()=>{
        if (!spaceInput) return;
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setList((prev)=>[
                ...prev,
                {
                    id: Date.now(),
                    spaceList: spaceInput,
                    description,
                    color: randomColor,
                    todo: []
                }
            ]);
        setSpaceInput("");
        setDescription("");
        handleSpace();
    };
    const handleRemoveSpace = (id)=>{
        setList((prev)=>prev.filter((cur)=>cur.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpaceContext.Provider, {
        value: {
            space,
            setSpace,
            handleSpace,
            spaceInput,
            setSpaceInput,
            description,
            setDescription,
            list,
            setList,
            handleList,
            handleRemoveSpace
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/dhannu/context/SpaceContext.js",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/dhannu/context/TeamContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeamContext",
    ()=>TeamContext,
    "TeamProvider",
    ()=>TeamProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const TeamContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
const TeamProvider = ({ children })=>{
    const [showFrom, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showUserDetails, setShowUserDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleShowUserDetails = (user)=>{
        setShowUserDetails((prev)=>prev && prev.id === user.id ? null : user);
    };
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
        reportingManager: ""
    });
    const genderOptions = [
        {
            label: "Male",
            value: "male"
        },
        {
            label: "Female",
            value: "female"
        },
        {
            label: "Other",
            value: "other"
        }
    ];
    const maritalStatusOptions = [
        {
            label: "Single",
            value: "single"
        },
        {
            label: "Married",
            value: "married"
        },
        {
            label: "Divorced",
            value: "divorced"
        }
    ];
    const employmentTypes = [
        {
            label: "Full-Time",
            value: "fulltime"
        },
        {
            label: "Part-Time",
            value: "parttime"
        },
        {
            label: "Internship",
            value: "internship"
        }
    ];
    const jobTitles = [
        {
            label: "Frontend Developer",
            value: "frontend"
        },
        {
            label: "Backend Developer",
            value: "backend"
        },
        {
            label: "Full Stack Developer",
            value: "fullstack"
        },
        {
            label: "DevOps Engineer",
            value: "devops"
        }
    ];
    const departments = [
        {
            label: "Engineering",
            value: "engineering"
        },
        {
            label: "Product",
            value: "product"
        },
        {
            label: "Design",
            value: "design"
        },
        {
            label: "Marketing",
            value: "marketing"
        },
        {
            label: "Human Resources",
            value: "hr"
        },
        {
            label: "Finance",
            value: "finance"
        },
        {
            label: "Sales",
            value: "sales"
        }
    ];
    const reportingManagers = [
        {
            label: "Kunal Kumar",
            value: "Kunal sir"
        },
        {
            label: "Gautum sir",
            value: "Gautum sir"
        },
        {
            label: "Sagar Kumar",
            value: "Sagar sir"
        }
    ];
    const nationalities = [
        {
            label: "Indian",
            value: "indian"
        },
        {
            label: "American",
            value: "american"
        },
        {
            label: "Canadian",
            value: "canadian"
        },
        {
            label: "British",
            value: "british"
        },
        {
            label: "Australian",
            value: "australian"
        },
        {
            label: "German",
            value: "german"
        },
        {
            label: "French",
            value: "french"
        }
    ];
    const handleShowForm = ()=>{
        setShowForm(!showFrom);
    };
    const handleChange = (key, value)=>{
        setFormData((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    const handleSubmit = ()=>{
        setUsers((prev)=>[
                ...prev,
                {
                    id: Date.now(),
                    ...formData
                }
            ]);
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
            reportingManager: ""
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
        "bg-indigo-500"
    ];
    const handleDelete = (value)=>{
        setUsers((users)=>users.filter((user)=>user.id !== value));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log(users);
    }, [
        users
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamContext.Provider, {
        value: {
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
            handleDelete
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/dhannu/context/TeamContext.js",
        lineNumber: 142,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_0be7d622._.js.map