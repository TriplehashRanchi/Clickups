(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dhannu/components/Dropdown.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Dropdown(param) {
    let { items = [], placeholder = "Select", onSelect, value } = param;
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": ()=>{
            if (value === "" || value === null || value === undefined) {
                setSelected(null);
            } else {
                const found = items.find({
                    "Dropdown.useEffect.found": (item)=>item.value === value
                }["Dropdown.useEffect.found"]);
                setSelected(found || null);
            }
        }
    }["Dropdown.useEffect"], [
        value,
        items
    ]);
    const handleSelect = (item)=>{
        setSelected(item);
        setOpen(false);
        if (onSelect) onSelect(item);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen(!open),
                className: "w-[150px] cursor-pointer flex items-start justify-between rounded-lg text-left outline-none transition",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: selected ? "text-white" : "text-zinc-400 font-medium",
                        children: selected ? selected.label : placeholder
                    }, void 0, false, {
                        fileName: "[project]/app/dhannu/components/Dropdown.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/dhannu/components/Dropdown.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dhannu/components/Dropdown.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "absolute w-full bg-zinc-900 border border-zinc-800 mt-1 rounded-lg shadow-md z-10",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center gap-2 p-3  w-[150px] cursor-pointer hover:bg-purple-500/20\n                         ".concat((selected === null || selected === void 0 ? void 0 : selected.value) === item.value ? "bg-purple-500/30" : ""),
                        onClick: ()=>handleSelect(item),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-zinc-200",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/app/dhannu/components/Dropdown.jsx",
                            lineNumber: 56,
                            columnNumber: 15
                        }, this)
                    }, item.value, false, {
                        fileName: "[project]/app/dhannu/components/Dropdown.jsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/dhannu/components/Dropdown.jsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dhannu/components/Dropdown.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Dropdown, "UR/miDRZVIJDA9FfbsQthya9Vac=");
_c = Dropdown;
var _c;
__turbopack_context__.k.register(_c, "Dropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/dhannu/(routes)/projects/[projectId]/page.jsx'\n\nExpected '</', got '}'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=app_dhannu_ed869c3e._.js.map