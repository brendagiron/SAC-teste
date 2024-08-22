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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n // Importa o módulo axios para fazer requisições HTTP\n // Importa os hooks useState e useEffect do React\n// Função principal da página\nfunction Home() {\n    // Estados para armazenar chamados em aberto e finalizados\n    const { 0: openTickets , 1: setOpenTickets  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // Estado para armazenar chamados em aberto\n    const { 0: closedTickets , 1: setClosedTickets  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // Estado para armazenar chamados finalizados\n    // Hook useEffect para buscar os chamados quando o componente é montado\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchTickets = async ()=>{\n            // Faz a requisição para buscar chamados do servidor\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/tickets\");\n            const tickets = response.data; // Obtém os dados dos chamados da resposta\n            // Filtra os chamados em aberto e finalizados\n            setOpenTickets(tickets.filter((ticket)=>ticket.status === \"open\")); // Atualiza o estado com chamados em aberto\n            setClosedTickets(tickets.filter((ticket)=>ticket.status === \"closed\")); // Atualiza o estado com chamados finalizados\n        };\n        fetchTickets(); // Chama a função para buscar os chamados\n    }, []); // O array vazio garante que o useEffect execute apenas uma vez após a montagem do componente\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Chamados\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Em Aberto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: openTickets.map((ticket)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            ticket.subject,\n                            \" - \",\n                            ticket.status\n                        ]\n                    }, ticket.id, true, {\n                        fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Finalizados\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: closedTickets.map((ticket)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            ticket.subject,\n                            \" - \",\n                            ticket.status\n                        ]\n                    }, ticket.id, true, {\n                        fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/new-ticket\",\n                children: \"Abrir Novo Chamado\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rober\\\\my-project\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQixDQUFDLHFEQUFxRDtBQUNwQyxDQUFDLGlEQUFpRDtBQUU5Riw2QkFBNkI7QUFDZCxTQUFTRyxJQUFJLEdBQUc7SUFDN0IsMERBQTBEO0lBQzFELE1BQU0sS0FBQ0MsV0FBVyxNQUFFQyxjQUFjLE1BQUlKLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsMkNBQTJDO0lBQy9GLE1BQU0sS0FBQ0ssYUFBYSxNQUFFQyxnQkFBZ0IsTUFBSU4sK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSw2Q0FBNkM7SUFFckcsdUVBQXVFO0lBQ3ZFQyxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNTSxZQUFZLEdBQUcsVUFBWTtZQUMvQixvREFBb0Q7WUFDcEQsTUFBTUMsUUFBUSxHQUFHLE1BQU1ULGlEQUFTLENBQUMsY0FBYyxDQUFDO1lBQ2hELE1BQU1XLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFJLEVBQUUsMENBQTBDO1lBQ3pFLDZDQUE2QztZQUM3Q1AsY0FBYyxDQUFDTSxPQUFPLENBQUNFLE1BQU0sQ0FBQ0MsQ0FBQUEsTUFBTSxHQUFJQSxNQUFNLENBQUNDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsMkNBQTJDO1lBQy9HUixnQkFBZ0IsQ0FBQ0ksT0FBTyxDQUFDRSxNQUFNLENBQUNDLENBQUFBLE1BQU0sR0FBSUEsTUFBTSxDQUFDQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLDZDQUE2QztRQUN2SCxDQUFDO1FBRURQLFlBQVksRUFBRSxDQUFDLENBQUMseUNBQXlDO0lBQzNELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLDZGQUE2RjtJQUVyRyxxQkFDRSw4REFBQ1EsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsVUFBUTs7Ozs7b0JBQUs7MEJBQ2pCLDhEQUFDQyxJQUFFOzBCQUFDLFdBQVM7Ozs7O29CQUFLOzBCQUNsQiw4REFBQ0MsSUFBRTswQkFFQWYsV0FBVyxDQUFDZ0IsR0FBRyxDQUFDTixDQUFBQSxNQUFNLGlCQUNyQiw4REFBQ08sSUFBRTs7NEJBQWtCUCxNQUFNLENBQUNRLE9BQU87NEJBQUMsS0FBRzs0QkFBQ1IsTUFBTSxDQUFDQyxNQUFNOzt1QkFBNUNELE1BQU0sQ0FBQ1MsRUFBRTs7Ozs0QkFBeUMsQ0FDM0Q7Ozs7O29CQUNDOzBCQUNMLDhEQUFDTCxJQUFFOzBCQUFDLGFBQVc7Ozs7O29CQUFLOzBCQUNwQiw4REFBQ0MsSUFBRTswQkFFQWIsYUFBYSxDQUFDYyxHQUFHLENBQUNOLENBQUFBLE1BQU0saUJBQ3ZCLDhEQUFDTyxJQUFFOzs0QkFBa0JQLE1BQU0sQ0FBQ1EsT0FBTzs0QkFBQyxLQUFHOzRCQUFDUixNQUFNLENBQUNDLE1BQU07O3VCQUE1Q0QsTUFBTSxDQUFDUyxFQUFFOzs7OzRCQUF5QyxDQUMzRDs7Ozs7b0JBQ0M7MEJBQ0wsOERBQUNDLEdBQUM7Z0JBQUNDLElBQUksRUFBQyxhQUFhOzBCQUFDLG9CQUFrQjs7Ozs7b0JBQUk7WUFBQSxHQUFDOzs7Ozs7WUFDekMsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgLy8gSW1wb3J0YSBvIG3Ds2R1bG8gYXhpb3MgcGFyYSBmYXplciByZXF1aXNpw6fDtWVzIEhUVFBcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JzsgLy8gSW1wb3J0YSBvcyBob29rcyB1c2VTdGF0ZSBlIHVzZUVmZmVjdCBkbyBSZWFjdFxyXG5cclxuLy8gRnVuw6fDo28gcHJpbmNpcGFsIGRhIHDDoWdpbmFcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAvLyBFc3RhZG9zIHBhcmEgYXJtYXplbmFyIGNoYW1hZG9zIGVtIGFiZXJ0byBlIGZpbmFsaXphZG9zXHJcbiAgY29uc3QgW29wZW5UaWNrZXRzLCBzZXRPcGVuVGlja2V0c10gPSB1c2VTdGF0ZShbXSk7IC8vIEVzdGFkbyBwYXJhIGFybWF6ZW5hciBjaGFtYWRvcyBlbSBhYmVydG9cclxuICBjb25zdCBbY2xvc2VkVGlja2V0cywgc2V0Q2xvc2VkVGlja2V0c10gPSB1c2VTdGF0ZShbXSk7IC8vIEVzdGFkbyBwYXJhIGFybWF6ZW5hciBjaGFtYWRvcyBmaW5hbGl6YWRvc1xyXG5cclxuICAvLyBIb29rIHVzZUVmZmVjdCBwYXJhIGJ1c2NhciBvcyBjaGFtYWRvcyBxdWFuZG8gbyBjb21wb25lbnRlIMOpIG1vbnRhZG9cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hUaWNrZXRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAvLyBGYXogYSByZXF1aXNpw6fDo28gcGFyYSBidXNjYXIgY2hhbWFkb3MgZG8gc2Vydmlkb3JcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdGlja2V0cycpO1xyXG4gICAgICBjb25zdCB0aWNrZXRzID0gcmVzcG9uc2UuZGF0YTsgLy8gT2J0w6ltIG9zIGRhZG9zIGRvcyBjaGFtYWRvcyBkYSByZXNwb3N0YVxyXG4gICAgICAvLyBGaWx0cmEgb3MgY2hhbWFkb3MgZW0gYWJlcnRvIGUgZmluYWxpemFkb3NcclxuICAgICAgc2V0T3BlblRpY2tldHModGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5zdGF0dXMgPT09ICdvcGVuJykpOyAvLyBBdHVhbGl6YSBvIGVzdGFkbyBjb20gY2hhbWFkb3MgZW0gYWJlcnRvXHJcbiAgICAgIHNldENsb3NlZFRpY2tldHModGlja2V0cy5maWx0ZXIodGlja2V0ID0+IHRpY2tldC5zdGF0dXMgPT09ICdjbG9zZWQnKSk7IC8vIEF0dWFsaXphIG8gZXN0YWRvIGNvbSBjaGFtYWRvcyBmaW5hbGl6YWRvc1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRpY2tldHMoKTsgLy8gQ2hhbWEgYSBmdW7Dp8OjbyBwYXJhIGJ1c2NhciBvcyBjaGFtYWRvc1xyXG4gIH0sIFtdKTsgLy8gTyBhcnJheSB2YXppbyBnYXJhbnRlIHF1ZSBvIHVzZUVmZmVjdCBleGVjdXRlIGFwZW5hcyB1bWEgdmV6IGFww7NzIGEgbW9udGFnZW0gZG8gY29tcG9uZW50ZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkNoYW1hZG9zPC9oMT5cclxuICAgICAgPGgyPkVtIEFiZXJ0bzwvaDI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7LyogTGlzdGEgY2hhbWFkb3MgZW0gYWJlcnRvICovfVxyXG4gICAgICAgIHtvcGVuVGlja2V0cy5tYXAodGlja2V0ID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3RpY2tldC5pZH0+e3RpY2tldC5zdWJqZWN0fSAtIHt0aWNrZXQuc3RhdHVzfTwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxoMj5GaW5hbGl6YWRvczwvaDI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7LyogTGlzdGEgY2hhbWFkb3MgZmluYWxpemFkb3MgKi99XHJcbiAgICAgICAge2Nsb3NlZFRpY2tldHMubWFwKHRpY2tldCA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXt0aWNrZXQuaWR9Pnt0aWNrZXQuc3ViamVjdH0gLSB7dGlja2V0LnN0YXR1c308L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8YSBocmVmPVwiL25ldy10aWNrZXRcIj5BYnJpciBOb3ZvIENoYW1hZG88L2E+IHsvKiBMaW5rIHBhcmEgYWJyaXIgdW0gbm92byBjaGFtYWRvICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJvcGVuVGlja2V0cyIsInNldE9wZW5UaWNrZXRzIiwiY2xvc2VkVGlja2V0cyIsInNldENsb3NlZFRpY2tldHMiLCJmZXRjaFRpY2tldHMiLCJyZXNwb25zZSIsImdldCIsInRpY2tldHMiLCJkYXRhIiwiZmlsdGVyIiwidGlja2V0Iiwic3RhdHVzIiwiZGl2IiwiaDEiLCJoMiIsInVsIiwibWFwIiwibGkiLCJzdWJqZWN0IiwiaWQiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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