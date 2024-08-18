"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home() {\n    const { 0: openTickets , 1: setOpenTickets  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { 0: closedTickets , 1: setClosedTickets  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchTickets = async ()=>{\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/tickets\");\n            const tickets = response.data;\n            setOpenTickets(tickets.filter((ticket)=>ticket.status === \"open\"));\n            setClosedTickets(tickets.filter((ticket)=>ticket.status === \"closed\"));\n        };\n        fetchTickets();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Chamados\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Em Aberto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: openTickets.map((ticket)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            ticket.subject,\n                            \" - \",\n                            ticket.status\n                        ]\n                    }, ticket.id, true, {\n                        fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Finalizados\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: closedTickets.map((ticket)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            ticket.subject,\n                            \" - \",\n                            ticket.status\n                        ]\n                    }, ticket.id, true, {\n                        fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/new-ticket\",\n                children: \"Abrir Novo Chamado\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNrQjtBQUU3QixTQUFTRyxJQUFJLEdBQUc7SUFDN0IsTUFBTSxLQUFDQyxXQUFXLE1BQUVDLGNBQWMsTUFBSUosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDbEQsTUFBTSxLQUFDSyxhQUFhLE1BQUVDLGdCQUFnQixNQUFJTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUV0REMsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTU0sWUFBWSxHQUFHLFVBQVk7WUFDL0IsTUFBTUMsUUFBUSxHQUFHLE1BQU1ULGlEQUFTLENBQUMsY0FBYyxDQUFDO1lBQ2hELE1BQU1XLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFJO1lBQzdCUCxjQUFjLENBQUNNLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDQyxDQUFBQSxNQUFNLEdBQUlBLE1BQU0sQ0FBQ0MsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkVSLGdCQUFnQixDQUFDSSxPQUFPLENBQUNFLE1BQU0sQ0FBQ0MsQ0FBQUEsTUFBTSxHQUFJQSxNQUFNLENBQUNDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFFRFAsWUFBWSxFQUFFLENBQUM7SUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNRLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLFVBQVE7Ozs7O29CQUFLOzBCQUNqQiw4REFBQ0MsSUFBRTswQkFBQyxXQUFTOzs7OztvQkFBSzswQkFDbEIsOERBQUNDLElBQUU7MEJBQ0FmLFdBQVcsQ0FBQ2dCLEdBQUcsQ0FBQ04sQ0FBQUEsTUFBTSxpQkFDckIsOERBQUNPLElBQUU7OzRCQUFrQlAsTUFBTSxDQUFDUSxPQUFPOzRCQUFDLEtBQUc7NEJBQUNSLE1BQU0sQ0FBQ0MsTUFBTTs7dUJBQTVDRCxNQUFNLENBQUNTLEVBQUU7Ozs7NEJBQXlDLENBQzNEOzs7OztvQkFDQzswQkFDTCw4REFBQ0wsSUFBRTswQkFBQyxhQUFXOzs7OztvQkFBSzswQkFDcEIsOERBQUNDLElBQUU7MEJBQ0FiLGFBQWEsQ0FBQ2MsR0FBRyxDQUFDTixDQUFBQSxNQUFNLGlCQUN2Qiw4REFBQ08sSUFBRTs7NEJBQWtCUCxNQUFNLENBQUNRLE9BQU87NEJBQUMsS0FBRzs0QkFBQ1IsTUFBTSxDQUFDQyxNQUFNOzt1QkFBNUNELE1BQU0sQ0FBQ1MsRUFBRTs7Ozs0QkFBeUMsQ0FDM0Q7Ozs7O29CQUNDOzBCQUNMLDhEQUFDQyxHQUFDO2dCQUFDQyxJQUFJLEVBQUMsYUFBYTswQkFBQyxvQkFBa0I7Ozs7O29CQUFJOzs7Ozs7WUFDeEMsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW29wZW5UaWNrZXRzLCBzZXRPcGVuVGlja2V0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Nsb3NlZFRpY2tldHMsIHNldENsb3NlZFRpY2tldHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hUaWNrZXRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS90aWNrZXRzJyk7XHJcbiAgICAgIGNvbnN0IHRpY2tldHMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBzZXRPcGVuVGlja2V0cyh0aWNrZXRzLmZpbHRlcih0aWNrZXQgPT4gdGlja2V0LnN0YXR1cyA9PT0gJ29wZW4nKSk7XHJcbiAgICAgIHNldENsb3NlZFRpY2tldHModGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5zdGF0dXMgPT09ICdjbG9zZWQnKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoVGlja2V0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5DaGFtYWRvczwvaDE+XHJcbiAgICAgIDxoMj5FbSBBYmVydG88L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge29wZW5UaWNrZXRzLm1hcCh0aWNrZXQgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17dGlja2V0LmlkfT57dGlja2V0LnN1YmplY3R9IC0ge3RpY2tldC5zdGF0dXN9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGgyPkZpbmFsaXphZG9zPC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtjbG9zZWRUaWNrZXRzLm1hcCh0aWNrZXQgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17dGlja2V0LmlkfT57dGlja2V0LnN1YmplY3R9IC0ge3RpY2tldC5zdGF0dXN9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGEgaHJlZj1cIi9uZXctdGlja2V0XCI+QWJyaXIgTm92byBDaGFtYWRvPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJvcGVuVGlja2V0cyIsInNldE9wZW5UaWNrZXRzIiwiY2xvc2VkVGlja2V0cyIsInNldENsb3NlZFRpY2tldHMiLCJmZXRjaFRpY2tldHMiLCJyZXNwb25zZSIsImdldCIsInRpY2tldHMiLCJkYXRhIiwiZmlsdGVyIiwidGlja2V0Iiwic3RhdHVzIiwiZGl2IiwiaDEiLCJoMiIsInVsIiwibWFwIiwibGkiLCJzdWJqZWN0IiwiaWQiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();