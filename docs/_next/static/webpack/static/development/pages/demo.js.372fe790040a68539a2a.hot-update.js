webpackHotUpdate("static/development/pages/demo.js",{

/***/ "../flowjv-react/dist/index.js":
/*!*************************************!*\
  !*** ../flowjv-react/dist/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setupFlowJV = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\nvar flowjv_1 = __webpack_require__(/*! flowjv */ \"../flowjv/dist/index.js\");\nvar get_1 = __importDefault(__webpack_require__(/*! lodash/get */ \"../../node_modules/lodash/get.js\"));\nvar set_1 = __importDefault(__webpack_require__(/*! lodash/set */ \"../../node_modules/lodash/set.js\"));\nvar cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ \"../../node_modules/lodash/cloneDeep.js\"));\nvar config_1 = __webpack_require__(/*! ./config */ \"../flowjv-react/dist/config.js\");\nvar unset_1 = __importDefault(__webpack_require__(/*! lodash/unset */ \"../../node_modules/lodash/unset.js\"));\nfunction setupFlowJV(Config) {\n    if (Config === void 0) { Config = config_1.defaultConfig; }\n    return function (_a) {\n        var schema = _a.schema, defaultValue = _a.defaultValue, context = _a.context, value = _a.value, onChange = _a.onChange;\n        var _b = react_1.useState(defaultValue), formValue = _b[0], _setFormValue = _b[1];\n        var _c = react_1.useState({}), touchMap = _c[0], _setTouchMap = _c[1];\n        var setTouch = function (refPath) {\n            var _a;\n            _setTouchMap(__assign(__assign({}, touchMap), (_a = {}, _a[refPath] = true, _a)));\n        };\n        var setValue = function (key, v) {\n            if (value) {\n                onChange === null || onChange === void 0 ? void 0 : onChange(cloneDeep_1.default(set_1.default(value, key, v)));\n            }\n            else {\n                _setFormValue(set_1.default(formValue, key, v));\n            }\n        };\n        var unsetValue = function (key) {\n            if (value) {\n                unset_1.default(value, key);\n                onChange === null || onChange === void 0 ? void 0 : onChange(value);\n            }\n            else {\n                unset_1.default(formValue, key);\n                _setFormValue(formValue);\n            }\n        };\n        var getValue = function (key, def) {\n            if (key === void 0) { key = \"\"; }\n            if (def === void 0) { def = \"\"; }\n            if (key === \"\") {\n                return value ? value : formValue;\n            }\n            return value ? get_1.default(value, key, def) : get_1.default(formValue, key, def);\n        };\n        function render(schema, ref) {\n            if (ref === void 0) { ref = []; }\n            switch (schema.type) {\n                case \"object\": {\n                    // Loop over all the elements.\n                    return schema.properties.map(function (objconfig) {\n                        switch (objconfig.type) {\n                            case \"if\": {\n                                var cond = !!flowjv_1.execJSONExpression(objconfig.cond, {\n                                    data: getValue(),\n                                    context: context,\n                                    ref: getValue(ref.join(\".\")),\n                                });\n                                var flow = cond\n                                    ? objconfig.true\n                                    : objconfig.false;\n                                if (flow) {\n                                    return render({ type: \"object\", properties: flow }, ref);\n                                }\n                                break;\n                            }\n                            default: {\n                                return render(objconfig, __spreadArrays(ref, [\n                                    objconfig.key,\n                                ]));\n                            }\n                        }\n                    });\n                }\n            }\n            var validate = function (validations, refValue) {\n                return ((validations === null || validations === void 0 ? void 0 : validations.map(function (_a) {\n                    var logic = _a.logic, err = _a.err;\n                    return !!flowjv_1.execJSONExpression(logic, {\n                        data: getValue(),\n                        context: context,\n                        ref: refValue,\n                    })\n                        ? null\n                        : err || null;\n                })) || []).filter(function (v) { return v !== null; });\n            };\n            var refValue = getValue(ref.join(\"\"));\n            var refPath = ref.join(\".\");\n            var touched = touchMap[refPath];\n            var validations = schema.validations || [];\n            switch (schema.type) {\n                case \"enum\":\n                case \"boolean\":\n                case \"number\":\n                case \"string\": {\n                    // Render the components here!\n                    var errors = validate(validations || [], refValue);\n                    return (react_1.default.createElement(Config, { key: refPath, schema: schema, ui: {\n                            label: schema.label,\n                            errors: touched ? errors : [],\n                            success: touched ? !errors.length : false,\n                            value: getValue(refPath),\n                            onChange: function (value) {\n                                console.log(\"VALUE : \", JSON.stringify(cloneDeep_1.default(value)));\n                                setValue(refPath, cloneDeep_1.default(value));\n                            },\n                            onUnmount: function () {\n                                unsetValue(refPath);\n                            },\n                            setTouch: function () { return setTouch(refPath); },\n                        } }));\n                }\n            }\n        }\n        return (react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"pre\", null, JSON.stringify(getValue(), null, \"  \")),\n            render(schema)));\n    };\n}\nexports.setupFlowJV = setupFlowJV;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vZmxvd2p2LXJlYWN0L2Rpc3QvaW5kZXguanM/ZjI4ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLGdEQUFPO0FBQzFDLGVBQWUsbUJBQU8sQ0FBQyx1Q0FBUTtBQUMvQiw0QkFBNEIsbUJBQU8sQ0FBQyxvREFBWTtBQUNoRCw0QkFBNEIsbUJBQU8sQ0FBQyxvREFBWTtBQUNoRCxrQ0FBa0MsbUJBQU8sQ0FBQyxnRUFBa0I7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLGdEQUFVO0FBQ2pDLDhCQUE4QixtQkFBTyxDQUFDLHdEQUFjO0FBQ3BEO0FBQ0EsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLDZDQUE2QyxxQkFBcUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG1DQUFtQztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUIsK0JBQStCLG1CQUFtQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLG1EQUFtRCwwQkFBMEIsRUFBRTtBQUMvRSx5QkFBeUIsRUFBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi4vZmxvd2p2LXJlYWN0L2Rpc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldHVwRmxvd0pWID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBmbG93anZfMSA9IHJlcXVpcmUoXCJmbG93anZcIik7XG52YXIgZ2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9nZXRcIikpO1xudmFyIHNldF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvc2V0XCIpKTtcbnZhciBjbG9uZURlZXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKSk7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgdW5zZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL3Vuc2V0XCIpKTtcbmZ1bmN0aW9uIHNldHVwRmxvd0pWKENvbmZpZykge1xuICAgIGlmIChDb25maWcgPT09IHZvaWQgMCkgeyBDb25maWcgPSBjb25maWdfMS5kZWZhdWx0Q29uZmlnOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgc2NoZW1hID0gX2Euc2NoZW1hLCBkZWZhdWx0VmFsdWUgPSBfYS5kZWZhdWx0VmFsdWUsIGNvbnRleHQgPSBfYS5jb250ZXh0LCB2YWx1ZSA9IF9hLnZhbHVlLCBvbkNoYW5nZSA9IF9hLm9uQ2hhbmdlO1xuICAgICAgICB2YXIgX2IgPSByZWFjdF8xLnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSksIGZvcm1WYWx1ZSA9IF9iWzBdLCBfc2V0Rm9ybVZhbHVlID0gX2JbMV07XG4gICAgICAgIHZhciBfYyA9IHJlYWN0XzEudXNlU3RhdGUoe30pLCB0b3VjaE1hcCA9IF9jWzBdLCBfc2V0VG91Y2hNYXAgPSBfY1sxXTtcbiAgICAgICAgdmFyIHNldFRvdWNoID0gZnVuY3Rpb24gKHJlZlBhdGgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIF9zZXRUb3VjaE1hcChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdG91Y2hNYXApLCAoX2EgPSB7fSwgX2FbcmVmUGF0aF0gPSB0cnVlLCBfYSkpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNldFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdikge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKGNsb25lRGVlcF8xLmRlZmF1bHQoc2V0XzEuZGVmYXVsdCh2YWx1ZSwga2V5LCB2KSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3NldEZvcm1WYWx1ZShzZXRfMS5kZWZhdWx0KGZvcm1WYWx1ZSwga2V5LCB2KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bnNldFZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdW5zZXRfMS5kZWZhdWx0KHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bnNldF8xLmRlZmF1bHQoZm9ybVZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIF9zZXRGb3JtVmFsdWUoZm9ybVZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGtleSwgZGVmKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSB2b2lkIDApIHsga2V5ID0gXCJcIjsgfVxuICAgICAgICAgICAgaWYgKGRlZiA9PT0gdm9pZCAwKSB7IGRlZiA9IFwiXCI7IH1cbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IGZvcm1WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IGdldF8xLmRlZmF1bHQodmFsdWUsIGtleSwgZGVmKSA6IGdldF8xLmRlZmF1bHQoZm9ybVZhbHVlLCBrZXksIGRlZik7XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcihzY2hlbWEsIHJlZikge1xuICAgICAgICAgICAgaWYgKHJlZiA9PT0gdm9pZCAwKSB7IHJlZiA9IFtdOyB9XG4gICAgICAgICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciBhbGwgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NoZW1hLnByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChvYmpjb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqY29uZmlnLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaWZcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZCA9ICEhZmxvd2p2XzEuZXhlY0pTT05FeHByZXNzaW9uKG9iamNvbmZpZy5jb25kLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZXRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogZ2V0VmFsdWUocmVmLmpvaW4oXCIuXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbG93ID0gY29uZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvYmpjb25maWcudHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvYmpjb25maWcuZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmbG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyKHsgdHlwZTogXCJvYmplY3RcIiwgcHJvcGVydGllczogZmxvdyB9LCByZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXIob2JqY29uZmlnLCBfX3NwcmVhZEFycmF5cyhyZWYsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamNvbmZpZy5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uICh2YWxpZGF0aW9ucywgcmVmVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCh2YWxpZGF0aW9ucyA9PT0gbnVsbCB8fCB2YWxpZGF0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsaWRhdGlvbnMubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9naWMgPSBfYS5sb2dpYywgZXJyID0gX2EuZXJyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFmbG93anZfMS5leGVjSlNPTkV4cHJlc3Npb24obG9naWMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiByZWZWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnIgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICB9KSkgfHwgW10pLmZpbHRlcihmdW5jdGlvbiAodikgeyByZXR1cm4gdiAhPT0gbnVsbDsgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJlZlZhbHVlID0gZ2V0VmFsdWUocmVmLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgdmFyIHJlZlBhdGggPSByZWYuam9pbihcIi5cIik7XG4gICAgICAgICAgICB2YXIgdG91Y2hlZCA9IHRvdWNoTWFwW3JlZlBhdGhdO1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25zID0gc2NoZW1hLnZhbGlkYXRpb25zIHx8IFtdO1xuICAgICAgICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlbnVtXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciB0aGUgY29tcG9uZW50cyBoZXJlIVxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gdmFsaWRhdGUodmFsaWRhdGlvbnMgfHwgW10sIHJlZlZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb25maWcsIHsga2V5OiByZWZQYXRoLCBzY2hlbWE6IHNjaGVtYSwgdWk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogdG91Y2hlZCA/IGVycm9ycyA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRvdWNoZWQgPyAhZXJyb3JzLmxlbmd0aCA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRWYWx1ZShyZWZQYXRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVkFMVUUgOiBcIiwgSlNPTi5zdHJpbmdpZnkoY2xvbmVEZWVwXzEuZGVmYXVsdCh2YWx1ZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUocmVmUGF0aCwgY2xvbmVEZWVwXzEuZGVmYXVsdCh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Vbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2V0VmFsdWUocmVmUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0VG91Y2gocmVmUGF0aCk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIiwgbnVsbCwgSlNPTi5zdHJpbmdpZnkoZ2V0VmFsdWUoKSwgbnVsbCwgXCIgIFwiKSksXG4gICAgICAgICAgICByZW5kZXIoc2NoZW1hKSkpO1xuICAgIH07XG59XG5leHBvcnRzLnNldHVwRmxvd0pWID0gc2V0dXBGbG93SlY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../flowjv-react/dist/index.js\n");

/***/ })

})