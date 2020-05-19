webpackHotUpdate("static/development/pages/demo.js",{

/***/ "../flowjv-react/dist/index.js":
/*!*************************************!*\
  !*** ../flowjv-react/dist/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setupFlowJV = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\nvar flowjv_1 = __webpack_require__(/*! flowjv */ \"../flowjv/dist/index.js\");\nvar get_1 = __importDefault(__webpack_require__(/*! lodash/get */ \"../../node_modules/lodash/get.js\"));\nvar set_1 = __importDefault(__webpack_require__(/*! lodash/set */ \"../../node_modules/lodash/set.js\"));\nvar cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ \"../../node_modules/lodash/cloneDeep.js\"));\nvar config_1 = __webpack_require__(/*! ./config */ \"../flowjv-react/dist/config.js\");\nvar unset_1 = __importDefault(__webpack_require__(/*! lodash/unset */ \"../../node_modules/lodash/unset.js\"));\nfunction setupFlowJV(Config) {\n    if (Config === void 0) { Config = config_1.defaultConfig; }\n    return function (_a) {\n        var schema = _a.schema, defaultValue = _a.defaultValue, context = _a.context, value = _a.value, onChange = _a.onChange;\n        var _b = react_1.useState(defaultValue), formValue = _b[0], _setFormValue = _b[1];\n        var _c = react_1.useState({}), touchMap = _c[0], _setTouchMap = _c[1];\n        var valueRef = react_1.useRef(value);\n        var setTouch = function (refPath) {\n            var _a;\n            _setTouchMap(__assign(__assign({}, touchMap), (_a = {}, _a[refPath] = true, _a)));\n        };\n        var setValue = function (key, v) {\n            if (value) {\n                onChange === null || onChange === void 0 ? void 0 : onChange(cloneDeep_1.default(set_1.default(value, key, v)));\n            }\n            else {\n                _setFormValue(set_1.default(formValue, key, v));\n            }\n        };\n        var unsetValue = function (key) {\n            if (value) {\n                unset_1.default(value, key);\n                onChange === null || onChange === void 0 ? void 0 : onChange(cloneDeep_1.default(value));\n            }\n            else {\n                unset_1.default(formValue, key);\n                _setFormValue(cloneDeep_1.default(formValue));\n            }\n        };\n        var getValue = function (key, def) {\n            if (key === void 0) { key = \"\"; }\n            if (def === void 0) { def = \"\"; }\n            if (key === \"\") {\n                return value ? value : formValue;\n            }\n            return value ? get_1.default(value, key, def) : get_1.default(formValue, key, def);\n        };\n        function render(schema, ref) {\n            if (ref === void 0) { ref = []; }\n            switch (schema.type) {\n                case \"object\": {\n                    // Loop over all the elements.\n                    return schema.properties.map(function (objconfig) {\n                        switch (objconfig.type) {\n                            case \"if\": {\n                                var cond = !!flowjv_1.execJSONExpression(objconfig.cond, {\n                                    data: getValue(),\n                                    context: context,\n                                    ref: getValue(ref.join(\".\")),\n                                });\n                                var flow = cond\n                                    ? objconfig.true\n                                    : objconfig.false;\n                                if (flow) {\n                                    return render({ type: \"object\", properties: flow }, ref);\n                                }\n                                break;\n                            }\n                            default: {\n                                return render(objconfig, __spreadArrays(ref, [\n                                    objconfig.key,\n                                ]));\n                            }\n                        }\n                    });\n                }\n            }\n            var validate = function (validations, refValue) {\n                return ((validations === null || validations === void 0 ? void 0 : validations.map(function (_a) {\n                    var logic = _a.logic, err = _a.err;\n                    return !!flowjv_1.execJSONExpression(logic, {\n                        data: getValue(),\n                        context: context,\n                        ref: refValue,\n                    })\n                        ? null\n                        : err || null;\n                })) || []).filter(function (v) { return v !== null; });\n            };\n            var refValue = getValue(ref.join(\"\"));\n            var refPath = ref.join(\".\");\n            var touched = touchMap[refPath];\n            var validations = schema.validations || [];\n            switch (schema.type) {\n                case \"enum\":\n                case \"boolean\":\n                case \"number\":\n                case \"string\": {\n                    // Render the components here!\n                    var errors = validate(validations || [], refValue);\n                    return (react_1.default.createElement(Config, { key: refPath, schema: schema, ui: {\n                            label: schema.label,\n                            errors: touched ? errors : [],\n                            success: touched ? !errors.length : false,\n                            value: getValue(refPath),\n                            onChange: function (v) {\n                                console.log(\"Before : \", JSON.stringify(value));\n                                setValue(refPath, v);\n                                console.log(\"After : \", JSON.stringify(value));\n                            },\n                            onUnmount: function () {\n                                console.log(\"UNMOUNT : \", JSON.stringify(value));\n                                unsetValue(refPath);\n                            },\n                            setTouch: function () {\n                                console.log(\"SET TOUCH : \", JSON.stringify(value));\n                                setTouch(refPath);\n                            },\n                        } }));\n                }\n            }\n        }\n        return (react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"pre\", null, JSON.stringify(getValue(), null, \"  \")),\n            render(schema)));\n    };\n}\nexports.setupFlowJV = setupFlowJV;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vZmxvd2p2LXJlYWN0L2Rpc3QvaW5kZXguanM/ZjI4ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLGdEQUFPO0FBQzFDLGVBQWUsbUJBQU8sQ0FBQyx1Q0FBUTtBQUMvQiw0QkFBNEIsbUJBQU8sQ0FBQyxvREFBWTtBQUNoRCw0QkFBNEIsbUJBQU8sQ0FBQyxvREFBWTtBQUNoRCxrQ0FBa0MsbUJBQU8sQ0FBQyxnRUFBa0I7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLGdEQUFVO0FBQ2pDLDhCQUE4QixtQkFBTyxDQUFDLHdEQUFjO0FBQ3BEO0FBQ0EsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHFCQUFxQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0MsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsbUNBQW1DO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQiwrQkFBK0IsbUJBQW1CLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUIsRUFBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi4vZmxvd2p2LXJlYWN0L2Rpc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldHVwRmxvd0pWID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBmbG93anZfMSA9IHJlcXVpcmUoXCJmbG93anZcIik7XG52YXIgZ2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9nZXRcIikpO1xudmFyIHNldF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvc2V0XCIpKTtcbnZhciBjbG9uZURlZXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKSk7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgdW5zZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL3Vuc2V0XCIpKTtcbmZ1bmN0aW9uIHNldHVwRmxvd0pWKENvbmZpZykge1xuICAgIGlmIChDb25maWcgPT09IHZvaWQgMCkgeyBDb25maWcgPSBjb25maWdfMS5kZWZhdWx0Q29uZmlnOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgc2NoZW1hID0gX2Euc2NoZW1hLCBkZWZhdWx0VmFsdWUgPSBfYS5kZWZhdWx0VmFsdWUsIGNvbnRleHQgPSBfYS5jb250ZXh0LCB2YWx1ZSA9IF9hLnZhbHVlLCBvbkNoYW5nZSA9IF9hLm9uQ2hhbmdlO1xuICAgICAgICB2YXIgX2IgPSByZWFjdF8xLnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSksIGZvcm1WYWx1ZSA9IF9iWzBdLCBfc2V0Rm9ybVZhbHVlID0gX2JbMV07XG4gICAgICAgIHZhciBfYyA9IHJlYWN0XzEudXNlU3RhdGUoe30pLCB0b3VjaE1hcCA9IF9jWzBdLCBfc2V0VG91Y2hNYXAgPSBfY1sxXTtcbiAgICAgICAgdmFyIHZhbHVlUmVmID0gcmVhY3RfMS51c2VSZWYodmFsdWUpO1xuICAgICAgICB2YXIgc2V0VG91Y2ggPSBmdW5jdGlvbiAocmVmUGF0aCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgX3NldFRvdWNoTWFwKF9fYXNzaWduKF9fYXNzaWduKHt9LCB0b3VjaE1hcCksIChfYSA9IHt9LCBfYVtyZWZQYXRoXSA9IHRydWUsIF9hKSkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2KSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UoY2xvbmVEZWVwXzEuZGVmYXVsdChzZXRfMS5kZWZhdWx0KHZhbHVlLCBrZXksIHYpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfc2V0Rm9ybVZhbHVlKHNldF8xLmRlZmF1bHQoZm9ybVZhbHVlLCBrZXksIHYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVuc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB1bnNldF8xLmRlZmF1bHQodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKGNsb25lRGVlcF8xLmRlZmF1bHQodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuc2V0XzEuZGVmYXVsdChmb3JtVmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgX3NldEZvcm1WYWx1ZShjbG9uZURlZXBfMS5kZWZhdWx0KGZvcm1WYWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBkZWYpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHZvaWQgMCkgeyBrZXkgPSBcIlwiOyB9XG4gICAgICAgICAgICBpZiAoZGVmID09PSB2b2lkIDApIHsgZGVmID0gXCJcIjsgfVxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogZm9ybVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gZ2V0XzEuZGVmYXVsdCh2YWx1ZSwga2V5LCBkZWYpIDogZ2V0XzEuZGVmYXVsdChmb3JtVmFsdWUsIGtleSwgZGVmKTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKHNjaGVtYSwgcmVmKSB7XG4gICAgICAgICAgICBpZiAocmVmID09PSB2b2lkIDApIHsgcmVmID0gW107IH1cbiAgICAgICAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIGFsbCB0aGUgZWxlbWVudHMuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKG9iamNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvYmpjb25maWcudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpZlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0gISFmbG93anZfMS5leGVjSlNPTkV4cHJlc3Npb24ob2JqY29uZmlnLmNvbmQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBnZXRWYWx1ZShyZWYuam9pbihcIi5cIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZsb3cgPSBjb25kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9iamNvbmZpZy50cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9iamNvbmZpZy5mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXIoeyB0eXBlOiBcIm9iamVjdFwiLCBwcm9wZXJ0aWVzOiBmbG93IH0sIHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihvYmpjb25maWcsIF9fc3ByZWFkQXJyYXlzKHJlZiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqY29uZmlnLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbGlkYXRlID0gZnVuY3Rpb24gKHZhbGlkYXRpb25zLCByZWZWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoKHZhbGlkYXRpb25zID09PSBudWxsIHx8IHZhbGlkYXRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWxpZGF0aW9ucy5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dpYyA9IF9hLmxvZ2ljLCBlcnIgPSBfYS5lcnI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWZsb3dqdl8xLmV4ZWNKU09ORXhwcmVzc2lvbihsb2dpYywge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IHJlZlZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVyciB8fCBudWxsO1xuICAgICAgICAgICAgICAgIH0pKSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2ICE9PSBudWxsOyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVmVmFsdWUgPSBnZXRWYWx1ZShyZWYuam9pbihcIlwiKSk7XG4gICAgICAgICAgICB2YXIgcmVmUGF0aCA9IHJlZi5qb2luKFwiLlwiKTtcbiAgICAgICAgICAgIHZhciB0b3VjaGVkID0gdG91Y2hNYXBbcmVmUGF0aF07XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbnMgPSBzY2hlbWEudmFsaWRhdGlvbnMgfHwgW107XG4gICAgICAgICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVudW1cIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyIHRoZSBjb21wb25lbnRzIGhlcmUhXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvcnMgPSB2YWxpZGF0ZSh2YWxpZGF0aW9ucyB8fCBbXSwgcmVmVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbmZpZywgeyBrZXk6IHJlZlBhdGgsIHNjaGVtYTogc2NoZW1hLCB1aToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiB0b3VjaGVkID8gZXJyb3JzIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdG91Y2hlZCA/ICFlcnJvcnMubGVuZ3RoIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFZhbHVlKHJlZlBhdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJlZm9yZSA6IFwiLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShyZWZQYXRoLCB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZnRlciA6IFwiLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Vbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVU5NT1VOVCA6IFwiLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNldFZhbHVlKHJlZlBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTRVQgVE9VQ0ggOiBcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2gocmVmUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInByZVwiLCBudWxsLCBKU09OLnN0cmluZ2lmeShnZXRWYWx1ZSgpLCBudWxsLCBcIiAgXCIpKSxcbiAgICAgICAgICAgIHJlbmRlcihzY2hlbWEpKSk7XG4gICAgfTtcbn1cbmV4cG9ydHMuc2V0dXBGbG93SlYgPSBzZXR1cEZsb3dKVjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../flowjv-react/dist/index.js\n");

/***/ })

})