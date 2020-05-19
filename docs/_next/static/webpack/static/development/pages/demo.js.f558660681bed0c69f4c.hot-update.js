webpackHotUpdate("static/development/pages/demo.js",{

/***/ "../flowjv-react/dist/components/Select.js":
/*!*************************************************!*\
  !*** ../flowjv-react/dist/components/Select.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SelectField = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"../flowjv-react/node_modules/classnames/index.js\"));\nexports.SelectField = function (_a) {\n    var errors = _a.errors, success = _a.success, options = _a.options, className = _a.className, label = _a.label, _b = _a.value, value = _b === void 0 ? \"\" : _b, onUnmount = _a.onUnmount, props = __rest(_a, [\"errors\", \"success\", \"options\", \"className\", \"label\", \"value\", \"onUnmount\"]);\n    var hasErrors = errors.length;\n    react_1.useEffect(function () {\n        return function () {\n            onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount();\n        };\n    }, []);\n    return (react_1.default.createElement(\"label\", { className: \"mt-3 block flex flex-col\" },\n        react_1.default.createElement(\"div\", { className: \"text-lg\" }, label),\n        react_1.default.createElement(\"select\", __assign({ value: value }, props, { className: classnames_1.default(\"outline-none border-b-2 border-solid p-2 text-xs flex-grow\", {\n                \"border-red-700 focus:border-red-700\": hasErrors,\n                \"border-green-700 focus:border-green-700\": success,\n                \"border-gray-400 focus:border-gray-900\": !hasErrors,\n            }, className) }), options.map(function (v, i) { return (react_1.default.createElement(\"option\", { value: v.value, key: i }, v.label || v.value)); })),\n        hasErrors ? (react_1.default.createElement(\"div\", null, errors === null || errors === void 0 ? void 0 : errors.map(function (err, i) { return (react_1.default.createElement(\"div\", { key: i, className: \"text-xs mt-1 text-red-700\" }, err)); }))) : null));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vZmxvd2p2LXJlYWN0L2Rpc3QvY29tcG9uZW50cy9TZWxlY3QuanM/MTM4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsY0FBYztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLGdEQUFPO0FBQzFDLG1DQUFtQyxtQkFBTyxDQUFDLG9FQUFZO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9EQUFvRCx3Q0FBd0M7QUFDNUYsOENBQThDLHVCQUF1QjtBQUNyRSwwREFBMEQsZUFBZSxVQUFVO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYyxnQ0FBZ0Msa0RBQWtELHlCQUF5Qix1QkFBdUIsRUFBRTtBQUMvSiw4SUFBOEksK0NBQStDLGlEQUFpRCxRQUFRLEVBQUU7QUFDeFAiLCJmaWxlIjoiLi4vZmxvd2p2LXJlYWN0L2Rpc3QvY29tcG9uZW50cy9TZWxlY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZWxlY3RGaWVsZCA9IHZvaWQgMDtcbnZhciByZWFjdF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgY2xhc3NuYW1lc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcbmV4cG9ydHMuU2VsZWN0RmllbGQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgZXJyb3JzID0gX2EuZXJyb3JzLCBzdWNjZXNzID0gX2Euc3VjY2Vzcywgb3B0aW9ucyA9IF9hLm9wdGlvbnMsIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgbGFiZWwgPSBfYS5sYWJlbCwgX2IgPSBfYS52YWx1ZSwgdmFsdWUgPSBfYiA9PT0gdm9pZCAwID8gXCJcIiA6IF9iLCBvblVubW91bnQgPSBfYS5vblVubW91bnQsIHByb3BzID0gX19yZXN0KF9hLCBbXCJlcnJvcnNcIiwgXCJzdWNjZXNzXCIsIFwib3B0aW9uc1wiLCBcImNsYXNzTmFtZVwiLCBcImxhYmVsXCIsIFwidmFsdWVcIiwgXCJvblVubW91bnRcIl0pO1xuICAgIHZhciBoYXNFcnJvcnMgPSBlcnJvcnMubGVuZ3RoO1xuICAgIHJlYWN0XzEudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9uVW5tb3VudCA9PT0gbnVsbCB8fCBvblVubW91bnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uVW5tb3VudCgpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBjbGFzc05hbWU6IFwibXQtMyBibG9jayBmbGV4IGZsZXgtY29sXCIgfSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidGV4dC1sZ1wiIH0sIGxhYmVsKSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgX19hc3NpZ24oeyB2YWx1ZTogdmFsdWUgfSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc25hbWVzXzEuZGVmYXVsdChcIm91dGxpbmUtbm9uZSBib3JkZXItYi0yIGJvcmRlci1zb2xpZCBwLTIgdGV4dC14cyBmbGV4LWdyb3dcIiwge1xuICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJlZC03MDAgZm9jdXM6Ym9yZGVyLXJlZC03MDBcIjogaGFzRXJyb3JzLFxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWdyZWVuLTcwMCBmb2N1czpib3JkZXItZ3JlZW4tNzAwXCI6IHN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgXCJib3JkZXItZ3JheS00MDAgZm9jdXM6Ym9yZGVyLWdyYXktOTAwXCI6ICFoYXNFcnJvcnMsXG4gICAgICAgICAgICB9LCBjbGFzc05hbWUpIH0pLCBvcHRpb25zLm1hcChmdW5jdGlvbiAodiwgaSkgeyByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IHYudmFsdWUsIGtleTogaSB9LCB2LmxhYmVsIHx8IHYudmFsdWUpKTsgfSkpLFxuICAgICAgICBoYXNFcnJvcnMgPyAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgZXJyb3JzID09PSBudWxsIHx8IGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyLCBpKSB7IHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGksIGNsYXNzTmFtZTogXCJ0ZXh0LXhzIG10LTEgdGV4dC1yZWQtNzAwXCIgfSwgZXJyKSk7IH0pKSkgOiBudWxsKSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../flowjv-react/dist/components/Select.js\n");

/***/ })

})