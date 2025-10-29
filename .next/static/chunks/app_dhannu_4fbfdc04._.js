(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dhannu/components/ProjectTodo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectTodo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fc$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fc/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/gi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/md/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dhannu$2f$context$2f$ProjectTodoContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dhannu/context/ProjectTodoContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dhannu$2f$context$2f$SpaceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dhannu/context/SpaceContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function ProjectTodo() {
    var _spaceData_;
    _s();
    const [spaceData, setSpaceData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { list } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dhannu$2f$context$2f$SpaceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpaceContext"]);
    const { addProjectTask, updateTaskStatus, editTask, assignUser, updateDueDate, handlePriority, handleDelete, users, priority, input, setInput, projectDetails, showAssign, assignPriority, showMenu, showStatusOption, editingTaskId, editingTaskValue, setAssignPriority, setShowStatusOption, setShowAssign, setShowMenu, setEditingTaskId, setEditingTaskValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dhannu$2f$context$2f$ProjectTodoContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectTodoContext"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectTodo.useEffect": ()=>{
            setSpaceData(list);
        }
    }["ProjectTodo.useEffect"], [
        list
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectTodo.useEffect": ()=>{
            console.log(projectDetails);
        }
    }["ProjectTodo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-zinc-950 p-4 rounded-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-medium",
                        children: (spaceData === null || spaceData === void 0 ? void 0 : (_spaceData_ = spaceData[0]) === null || _spaceData_ === void 0 ? void 0 : _spaceData_.spaceList) || "dhannu workspace"
                    }, void 0, false, {
                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 text-[15px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdSupportAgent"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    " Agents"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineThunderbolt"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    " Automate"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdSupportAgent"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    " Ask AI"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiArtificialHive"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    " Share"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 border-b border-gray-800 py-2 text-sm text-gray-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 cursor-pointer hover:text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiViewList"], {}, void 0, false, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "List"
                            }, void 0, false, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 82,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 cursor-pointer hover:text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFlipboard"], {}, void 0, false, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Board"
                            }, void 0, false, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 85,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 cursor-pointer hover:text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fc$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FcCalendar"], {}, void 0, false, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Calendar"
                            }, void 0, false, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 88,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 border-l border-gray-700 pl-3 cursor-pointer hover:text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "View"
                            }, void 0, false, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full py-5",
                children: projectDetails.map((proj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col mb-6 border-zinc-700 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-semibold text-pink-600",
                                        children: proj.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex text-sm space-x-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 w-[120px] font-semibold",
                                                children: "Assignee"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 w-[120px] font-semibold",
                                                children: "Due date"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 w-[120px] font-semibold",
                                                children: "Priority"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 w-[120px] font-semibold",
                                                children: "Menu"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            proj.tasks && proj.tasks.map((task, index)=>{
                                var _task_assignTo;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full border-b border-t border-zinc-800 mt-1 text-zinc-400 items-center px-2 flex justify-between text-sm mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-base flex items-center justify-start gap-2 font-medium text-zinc-300 w-1/3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setShowStatusOption((prev)=>prev === index ? null : index),
                                                    className: "relative flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: task.status === "Completed",
                                                            readOnly: true,
                                                            className: "w-4 h-4 rounded-full appearance-none border cursor-pointer\n                        ".concat(task.status === "Progress" ? "bg-purple-600 border-purple-600" : "", "\n                        ").concat(task.status === "Completed" ? "bg-green-600 border-green-600" : "", "\n                        ").concat(task.status === "Pending" ? "bg-transparent border-gray-400" : "")
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                            lineNumber: 130,
                                                            columnNumber: 23
                                                        }, this),
                                                        showStatusOption === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: (e)=>e.stopPropagation(),
                                                            className: "absolute left-2 top-6 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateTaskStatus(proj.id, task.id, "Progress"),
                                                                    className: "block px-4 py-2 text-sm text-white hover:bg-zinc-800 w-full",
                                                                    children: "Progress"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateTaskStatus(proj.id, task.id, "Completed"),
                                                                    className: "block px-4 py-2 text-sm text-white hover:bg-zinc-800 w-full",
                                                                    children: "Completed"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                            lineNumber: 152,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this),
                                                editingTaskId === task.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: editingTaskValue,
                                                    onChange: (e)=>setEditingTaskValue(e.target.value),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter") editTask(proj.id, task.id, editingTaskValue);
                                                    },
                                                    className: "p-1 w-full rounded-md text-sm outline-none text-zinc-200"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                    lineNumber: 177,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: task.task
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setShowAssign((prev)=>prev === index ? null : index),
                                                    className: "p-2 hover:bg-zinc-800 rounded-md relative w-[120px] flex gap-1",
                                                    children: [
                                                        ((_task_assignTo = task.assignTo) === null || _task_assignTo === void 0 ? void 0 : _task_assignTo.length) > 0 ? task.assignTo.map((name, i)=>{
                                                            var _String;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-6 w-6 mt-0.5 flex justify-center items-center rounded-full text-white text-xs bg-purple-600",
                                                                children: (_String = String(name)) === null || _String === void 0 ? void 0 : _String.charAt(0).toUpperCase()
                                                            }, i, false, {
                                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                lineNumber: 202,
                                                                columnNumber: 27
                                                            }, this);
                                                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hover:bg-zinc-800 rounded-md w-full h-full flex items-center px-2 py-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdPeople"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                lineNumber: 211,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                            lineNumber: 210,
                                                            columnNumber: 25
                                                        }, this),
                                                        showAssign === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: (e)=>e.stopPropagation(),
                                                            className: "absolute left-0 top-10 z-50 w-[150px] p-2 bg-black rounded-md shadow-lg",
                                                            children: users.map((cur, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>assignUser(cur, task.id),
                                                                    className: "p-2 hover:bg-zinc-900 rounded-md cursor-pointer",
                                                                    children: cur
                                                                }, idx, false, {
                                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                    lineNumber: 221,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                            lineNumber: 216,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 w-[135px] hover:bg-zinc-800 rounded-md mr-4 flex items-center justify-start",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        onChange: (e)=>updateDueDate(proj.id, task.id, e.target.value),
                                                        value: task.dueDate || "",
                                                        className: "bg-transparent rounded-md outline-none mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                        lineNumber: 235,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setAssignPriority((prev)=>prev === index ? null : index),
                                                    className: "p-2 hover:bg-zinc-800 rounded-md flex items-center w-[120px] relative",
                                                    children: [
                                                        task.priority === "High" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosFlag"], {
                                                            size: 20,
                                                            className: "text-red-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                            lineNumber: 255,
                                                            columnNumber: 25
                                                        }, this) : task.priority === "Medium" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosFlag"], {
                                                            size: 20,
                                                            className: "text-yellow-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                            lineNumber: 257,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosFlag"], {
                                                            size: 20,
                                                            className: "text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                            lineNumber: 259,
                                                            columnNumber: 25
                                                        }, this),
                                                        assignPriority === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: (e)=>e.stopPropagation(),
                                                            className: "p-2 w-[150px] left-0 top-10 bg-black z-50 absolute ",
                                                            children: priority.map((cur, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>handlePriority(cur, task.id),
                                                                    className: "p-2 hover:bg-zinc-900 rounded-md cursor-pointer",
                                                                    children: cur
                                                                }, idx, false, {
                                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                            lineNumber: 263,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                    lineNumber: 246,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>setShowMenu((prev)=>prev === index ? null : index),
                                                    className: "p-2 hover:bg-zinc-800 rounded-md relative w-[120px] flex items-center justify-start px-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiDotsVerticalRounded"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                            lineNumber: 287,
                                                            columnNumber: 23
                                                        }, this),
                                                        showMenu === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-6 top-10 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-50 w-[100px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setEditingTaskId(task.id);
                                                                        setEditingTaskValue(task.task);
                                                                        setShowMenu(null);
                                                                    },
                                                                    className: "block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 rounded-md w-full",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdOutlineModeEdit"], {
                                                                                size: 15
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                                lineNumber: 299,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[14px]",
                                                                                children: "Edit"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                                lineNumber: 300,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                        lineNumber: 298,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 27
                                                                }, this),
                                                                editingTaskId === task.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>editTask(proj.id, task.id, editingTaskValue),
                                                                    className: "block px-4 py-2 text-sm text-green-200 hover:bg-zinc-800 rounded-md w-full",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDownloadDone"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                                lineNumber: 312,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[14px]",
                                                                                children: "Save"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                                lineNumber: 313,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                        lineNumber: 311,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                    lineNumber: 305,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleDelete(task.id),
                                                                    className: "block px-4 py-2 text-sm text-red-200 rounded-md hover:bg-zinc-800 w-full",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MdDeleteOutline"], {
                                                                                size: 15
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                                lineNumber: 323,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[14px]",
                                                                                children: "Delete"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                                lineNumber: 324,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                        lineNumber: 322,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                            lineNumber: 289,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                            lineNumber: 192,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, task.id, true, {
                                    fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1 mt-2 flex border-t border-zinc-800 border-b w-full justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: input,
                                            placeholder: "Add Task",
                                            onChange: (e)=>setInput(e.target.value),
                                            className: "p-2 w-full text-sm rounded-md outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>addProjectTask(proj),
                                            className: "bg-purple-600 p-2 text-xs rounded-md hover:bg-purple-700 text-white",
                                            children: "Add Task"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this)
                        ]
                    }, proj.id, true, {
                        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dhannu/components/ProjectTodo.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(ProjectTodo, "8SuYdJtC/qOrNbQoiP0sSPeNv28=");
_c = ProjectTodo;
var _c;
__turbopack_context__.k.register(_c, "ProjectTodo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/tb/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dhannu$2f$components$2f$ProjectTodo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dhannu/components/ProjectTodo.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dhannu$2f$context$2f$ProjectTodoContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/dhannu/context/ProjectTodoContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Page(param) {
    let { params } = param;
    _s();
    const routeParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const ID = routeParams.projectId;
    const { projectDetails, setProjectDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dhannu$2f$context$2f$ProjectTodoContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectTodoContext"]);
    const [projectName, setProjectName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectStatus, setSelectStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assignee, setAssignee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectAssigne, setSelectAssigne] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectPriority, setSelectPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastDate, setLastDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [aboutProject, setAboutProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleProjectDetails = ()=>{
        if (!projectName.trim()) return;
        const newProject = {
            id: ID + "-" + new Date().getTime(),
            name: projectName,
            status: status || "Not completed",
            space: ID,
            assignee: assignee,
            priority: priority || "Low",
            dueDate: lastDate || null,
            aboutProject: aboutProject || "",
            tasks: []
        };
        setProjectDetails((prev)=>[
                ...prev,
                newProject
            ]);
        // Reset form
        setProjectName("");
        setStatus("");
        setAssignee([]);
        setPriority("");
        setLastDate("");
        setAboutProject("");
    };
    return projectDetails.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$dhannu$2f$components$2f$ProjectTodo$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ID: ID
    }, void 0, false, {
        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
        lineNumber: 54,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-zinc-950 text-white p-8 rounded-2xl flex flex-col gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: projectName,
                    onChange: (e)=>setProjectName(e.target.value),
                    placeholder: "New Project",
                    className: "text-2xl font-semibold bg-transparent outline-none w-full placeholder-zinc-500 text-zinc-200 border-b border-zinc-800 pb-2 focus:border-purple-500 transition duration-300"
                }, void 0, false, {
                    fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[220px] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSelectStatus(!selectStatus),
                                className: "flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-500/60 transition cursor-pointer shadow-md hover:shadow-purple-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$tb$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TbCircleDashed"], {
                                                size: 20,
                                                className: "text-purple-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-zinc-500 uppercase tracking-wider",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                        lineNumber: 79,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-zinc-300 capitalize",
                                                        children: status || "Select status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                        lineNumber: 82,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronCircleDown"], {
                                        size: 18,
                                        className: "text-purple-400 transition-transform duration-300 ".concat(selectStatus ? "rotate-180" : "")
                                    }, void 0, false, {
                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            selectStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg overflow-hidden z-10",
                                children: [
                                    "Not completed",
                                    "In Progress",
                                    "Completed"
                                ].map((cur)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setStatus(cur);
                                            setSelectStatus(false);
                                        },
                                        className: "p-2 px-3 text-sm hover:bg-purple-600/30 cursor-pointer transition ".concat(status === cur ? "bg-purple-600/20 text-purple-400 font-semibold" : "text-zinc-300"),
                                        children: cur
                                    }, cur, false, {
                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[220px] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSelectAssigne(!selectAssigne),
                                className: "flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-500/60 transition cursor-pointer shadow-md hover:shadow-purple-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoPeople"], {
                                                size: 17,
                                                className: "text-purple-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-zinc-500 uppercase tracking-wider",
                                                        children: "Assignee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                        lineNumber: 126,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-zinc-300 flex gap-1",
                                                        children: assignee.length > 0 ? assignee.map((cur)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full bg-purple-600",
                                                                children: cur.charAt(0).toUpperCase()
                                                            }, cur, false, {
                                                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                                lineNumber: 132,
                                                                columnNumber: 25
                                                            }, this)) : "Select Assignee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                        lineNumber: 129,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronCircleDown"], {
                                        size: 17,
                                        className: "text-purple-400 transition-transform duration-300 ".concat(selectAssigne ? "rotate-180" : "")
                                    }, void 0, false, {
                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            selectAssigne && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg overflow-hidden z-10",
                                children: [
                                    "Dhannu Kumar",
                                    "Rohit Jha",
                                    "Ankit Sharma"
                                ].map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setAssignee((prev)=>prev.includes(user) ? prev : [
                                                    ...prev,
                                                    user
                                                ]);
                                            setSelectAssigne(false);
                                        },
                                        className: "p-2 px-3 text-sm hover:bg-purple-600/30 cursor-pointer text-zinc-300 transition",
                                        children: user
                                    }, user, false, {
                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-[220px] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setSelectPriority(!selectPriority),
                                className: "flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-500/60 transition cursor-pointer shadow-md hover:shadow-purple-500/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaChevronCircleDown"], {
                                            size: 17,
                                            className: "text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-500 uppercase tracking-wider",
                                                    children: "Priority"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                    lineNumber: 180,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-zinc-300",
                                                    children: priority || "Select Priority"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            selectPriority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg overflow-hidden z-10",
                                children: [
                                    "Low",
                                    "Medium",
                                    "High"
                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>{
                                            setPriority(p);
                                            setSelectPriority(false);
                                        },
                                        className: "p-2 px-3 text-sm hover:bg-purple-600/30 cursor-pointer transition ".concat(priority === p ? "bg-purple-600/20 text-purple-400 font-semibold" : "text-zinc-300"),
                                        children: p
                                    }, p, false, {
                                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center p-4 bg-zinc-900 border border-zinc-800 rounded-lg min-w-[220px] shadow-md hover:border-purple-500/60 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCalendar"], {
                                    size: 15,
                                    className: "text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-zinc-500 uppercase tracking-wider",
                                            children: lastDate || "End Date"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: lastDate,
                                            onChange: (e)=>setLastDate(e.target.value),
                                            className: "bg-transparent text-zinc-300 text-sm mt-1 outline-none border-b border-zinc-800 focus:border-purple-500 transition duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-zinc-400 font-semibold",
                        children: "About Project"
                    }, void 0, false, {
                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: "4",
                        value: aboutProject,
                        onChange: (e)=>setAboutProject(e.target.value),
                        placeholder: "Describe your project goals...",
                        className: "w-full bg-zinc-900 border border-zinc-800 rounded-md p-3 text-zinc-300 outline-none focus:border-purple-500 resize-none transition shadow-sm hover:shadow-purple-500/10 duration-300"
                    }, void 0, false, {
                        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleProjectDetails,
                    className: "bg-purple-600 cursor-pointer hover:bg-purple-700 px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300",
                    children: "Create Project"
                }, void 0, false, {
                    fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(Page, "8XpMb8ukiNppIjATl7b7JNKVz9c=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_dhannu_4fbfdc04._.js.map