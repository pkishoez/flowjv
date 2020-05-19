webpackHotUpdate("static/development/pages/demo.js",{

/***/ "../flowjv-react/dist/index.js":
/*!*************************************!*\
  !*** ../flowjv-react/dist/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setupFlowJV = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\nvar flowjv_1 = __webpack_require__(/*! flowjv */ \"../flowjv/dist/index.js\");\nvar get_1 = __importDefault(__webpack_require__(/*! lodash/get */ \"../../node_modules/lodash/get.js\"));\nvar set_1 = __importDefault(__webpack_require__(/*! lodash/set */ \"../../node_modules/lodash/set.js\"));\nvar cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ \"../../node_modules/lodash/cloneDeep.js\"));\nvar config_1 = __webpack_require__(/*! ./config */ \"../flowjv-react/dist/config.js\");\nvar unset_1 = __importDefault(__webpack_require__(/*! lodash/unset */ \"../../node_modules/lodash/unset.js\"));\nfunction setupFlowJV(Config) {\n    if (Config === void 0) { Config = config_1.defaultConfig; }\n    return function (_a) {\n        var schema = _a.schema, defaultValue = _a.defaultValue, context = _a.context, value = _a.value, onChange = _a.onChange;\n        var _b = react_1.useState(defaultValue), formValue = _b[0], _setFormValue = _b[1];\n        var _c = react_1.useState({}), touchMap = _c[0], _setTouchMap = _c[1];\n        var setTouch = function (refPath) {\n            var _a;\n            _setTouchMap(__assign(__assign({}, touchMap), (_a = {}, _a[refPath] = true, _a)));\n        };\n        var setValue = function (key, v) {\n            if (value) {\n                onChange === null || onChange === void 0 ? void 0 : onChange(cloneDeep_1.default(set_1.default(value, key, v)));\n            }\n            else {\n                _setFormValue(set_1.default(formValue, key, v));\n            }\n        };\n        var unsetValue = function (key) {\n            if (value) {\n                unset_1.default(value, key);\n                onChange === null || onChange === void 0 ? void 0 : onChange(value);\n            }\n            else {\n                unset_1.default(formValue, key);\n                _setFormValue(formValue);\n            }\n        };\n        var getValue = function (key, def) {\n            if (key === void 0) { key = \"\"; }\n            if (def === void 0) { def = \"\"; }\n            if (key === \"\") {\n                return value ? value : formValue;\n            }\n            return value ? get_1.default(value, key, def) : get_1.default(formValue, key, def);\n        };\n        function render(schema, ref) {\n            if (ref === void 0) { ref = []; }\n            switch (schema.type) {\n                case \"object\": {\n                    // Loop over all the elements.\n                    return schema.properties.map(function (objconfig) {\n                        switch (objconfig.type) {\n                            case \"if\": {\n                                var cond = !!flowjv_1.execJSONExpression(objconfig.cond, {\n                                    data: getValue(),\n                                    context: context,\n                                    ref: getValue(ref.join(\".\")),\n                                });\n                                var flow = cond\n                                    ? objconfig.true\n                                    : objconfig.false;\n                                if (flow) {\n                                    return render({ type: \"object\", properties: flow }, ref);\n                                }\n                                break;\n                            }\n                            default: {\n                                return render(objconfig, __spreadArrays(ref, [\n                                    objconfig.key,\n                                ]));\n                            }\n                        }\n                    });\n                }\n            }\n            var validate = function (validations, refValue) {\n                return ((validations === null || validations === void 0 ? void 0 : validations.map(function (_a) {\n                    var logic = _a.logic, err = _a.err;\n                    return !!flowjv_1.execJSONExpression(logic, {\n                        data: getValue(),\n                        context: context,\n                        ref: refValue,\n                    })\n                        ? null\n                        : err || null;\n                })) || []).filter(function (v) { return v !== null; });\n            };\n            var refValue = getValue(ref.join(\"\"));\n            var refPath = ref.join(\".\");\n            var touched = touchMap[refPath];\n            var validations = schema.validations || [];\n            switch (schema.type) {\n                case \"enum\":\n                case \"boolean\":\n                case \"number\":\n                case \"string\": {\n                    // Render the components here!\n                    var errors = validate(validations || [], refValue);\n                    return (react_1.default.createElement(Config, { key: refPath, schema: schema, ui: {\n                            label: schema.label,\n                            errors: touched ? errors : [],\n                            success: touched ? !errors.length : false,\n                            value: getValue(refPath),\n                            onChange: function (value) {\n                                console.log(\"VALUE CHANGE : \", JSON.stringify({\n                                    refPath: refPath,\n                                    value: value,\n                                }, null, \"  \"));\n                                setValue(refPath, value);\n                            },\n                            onUnmount: function () {\n                                unsetValue(refPath);\n                            },\n                            setTouch: function () { return setTouch(refPath); },\n                        } }));\n                }\n            }\n        }\n        return (react_1.default.createElement(\"div\", null,\n            react_1.default.createElement(\"pre\", null, JSON.stringify(getValue(), null, \"  \")),\n            render(schema)));\n    };\n}\nexports.setupFlowJV = setupFlowJV;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vZmxvd2p2LXJlYWN0L2Rpc3QvaW5kZXguanM/ZjI4ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFFBQVE7QUFDekQsd0NBQXdDLFFBQVE7QUFDaEQsd0RBQXdELFFBQVE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLGdEQUFPO0FBQzFDLGVBQWUsbUJBQU8sQ0FBQyx1Q0FBUTtBQUMvQiw0QkFBNEIsbUJBQU8sQ0FBQyxvREFBWTtBQUNoRCw0QkFBNEIsbUJBQU8sQ0FBQyxvREFBWTtBQUNoRCxrQ0FBa0MsbUJBQU8sQ0FBQyxnRUFBa0I7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLGdEQUFVO0FBQ2pDLDhCQUE4QixtQkFBTyxDQUFDLHdEQUFjO0FBQ3BEO0FBQ0EsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLDZDQUE2QyxxQkFBcUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG1DQUFtQztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUIsK0JBQStCLG1CQUFtQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsbURBQW1ELDBCQUEwQixFQUFFO0FBQy9FLHlCQUF5QixFQUFFO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuLi9mbG93anYtcmVhY3QvZGlzdC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2V0dXBGbG93SlYgPSB2b2lkIDA7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGZsb3dqdl8xID0gcmVxdWlyZShcImZsb3dqdlwiKTtcbnZhciBnZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2dldFwiKSk7XG52YXIgc2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9zZXRcIikpO1xudmFyIGNsb25lRGVlcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVEZWVwXCIpKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciB1bnNldF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvdW5zZXRcIikpO1xuZnVuY3Rpb24gc2V0dXBGbG93SlYoQ29uZmlnKSB7XG4gICAgaWYgKENvbmZpZyA9PT0gdm9pZCAwKSB7IENvbmZpZyA9IGNvbmZpZ18xLmRlZmF1bHRDb25maWc7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBzY2hlbWEgPSBfYS5zY2hlbWEsIGRlZmF1bHRWYWx1ZSA9IF9hLmRlZmF1bHRWYWx1ZSwgY29udGV4dCA9IF9hLmNvbnRleHQsIHZhbHVlID0gX2EudmFsdWUsIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2U7XG4gICAgICAgIHZhciBfYiA9IHJlYWN0XzEudXNlU3RhdGUoZGVmYXVsdFZhbHVlKSwgZm9ybVZhbHVlID0gX2JbMF0sIF9zZXRGb3JtVmFsdWUgPSBfYlsxXTtcbiAgICAgICAgdmFyIF9jID0gcmVhY3RfMS51c2VTdGF0ZSh7fSksIHRvdWNoTWFwID0gX2NbMF0sIF9zZXRUb3VjaE1hcCA9IF9jWzFdO1xuICAgICAgICB2YXIgc2V0VG91Y2ggPSBmdW5jdGlvbiAocmVmUGF0aCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgX3NldFRvdWNoTWFwKF9fYXNzaWduKF9fYXNzaWduKHt9LCB0b3VjaE1hcCksIChfYSA9IHt9LCBfYVtyZWZQYXRoXSA9IHRydWUsIF9hKSkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2KSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UoY2xvbmVEZWVwXzEuZGVmYXVsdChzZXRfMS5kZWZhdWx0KHZhbHVlLCBrZXksIHYpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfc2V0Rm9ybVZhbHVlKHNldF8xLmRlZmF1bHQoZm9ybVZhbHVlLCBrZXksIHYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVuc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB1bnNldF8xLmRlZmF1bHQodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuc2V0XzEuZGVmYXVsdChmb3JtVmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgX3NldEZvcm1WYWx1ZShmb3JtVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBkZWYpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHZvaWQgMCkgeyBrZXkgPSBcIlwiOyB9XG4gICAgICAgICAgICBpZiAoZGVmID09PSB2b2lkIDApIHsgZGVmID0gXCJcIjsgfVxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogZm9ybVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gZ2V0XzEuZGVmYXVsdCh2YWx1ZSwga2V5LCBkZWYpIDogZ2V0XzEuZGVmYXVsdChmb3JtVmFsdWUsIGtleSwgZGVmKTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKHNjaGVtYSwgcmVmKSB7XG4gICAgICAgICAgICBpZiAocmVmID09PSB2b2lkIDApIHsgcmVmID0gW107IH1cbiAgICAgICAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIGFsbCB0aGUgZWxlbWVudHMuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKG9iamNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvYmpjb25maWcudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpZlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0gISFmbG93anZfMS5leGVjSlNPTkV4cHJlc3Npb24ob2JqY29uZmlnLmNvbmQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBnZXRWYWx1ZShyZWYuam9pbihcIi5cIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZsb3cgPSBjb25kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9iamNvbmZpZy50cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9iamNvbmZpZy5mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXIoeyB0eXBlOiBcIm9iamVjdFwiLCBwcm9wZXJ0aWVzOiBmbG93IH0sIHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihvYmpjb25maWcsIF9fc3ByZWFkQXJyYXlzKHJlZiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqY29uZmlnLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbGlkYXRlID0gZnVuY3Rpb24gKHZhbGlkYXRpb25zLCByZWZWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoKHZhbGlkYXRpb25zID09PSBudWxsIHx8IHZhbGlkYXRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWxpZGF0aW9ucy5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dpYyA9IF9hLmxvZ2ljLCBlcnIgPSBfYS5lcnI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWZsb3dqdl8xLmV4ZWNKU09ORXhwcmVzc2lvbihsb2dpYywge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IHJlZlZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVyciB8fCBudWxsO1xuICAgICAgICAgICAgICAgIH0pKSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2ICE9PSBudWxsOyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVmVmFsdWUgPSBnZXRWYWx1ZShyZWYuam9pbihcIlwiKSk7XG4gICAgICAgICAgICB2YXIgcmVmUGF0aCA9IHJlZi5qb2luKFwiLlwiKTtcbiAgICAgICAgICAgIHZhciB0b3VjaGVkID0gdG91Y2hNYXBbcmVmUGF0aF07XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbnMgPSBzY2hlbWEudmFsaWRhdGlvbnMgfHwgW107XG4gICAgICAgICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVudW1cIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyIHRoZSBjb21wb25lbnRzIGhlcmUhXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvcnMgPSB2YWxpZGF0ZSh2YWxpZGF0aW9ucyB8fCBbXSwgcmVmVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbmZpZywgeyBrZXk6IHJlZlBhdGgsIHNjaGVtYTogc2NoZW1hLCB1aToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiB0b3VjaGVkID8gZXJyb3JzIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdG91Y2hlZCA/ICFlcnJvcnMubGVuZ3RoIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFZhbHVlKHJlZlBhdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWQUxVRSBDSEFOR0UgOiBcIiwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmUGF0aDogcmVmUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgXCIgIFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHJlZlBhdGgsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5tb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNldFZhbHVlKHJlZlBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2g6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFRvdWNoKHJlZlBhdGgpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIG51bGwsIEpTT04uc3RyaW5naWZ5KGdldFZhbHVlKCksIG51bGwsIFwiICBcIikpLFxuICAgICAgICAgICAgcmVuZGVyKHNjaGVtYSkpKTtcbiAgICB9O1xufVxuZXhwb3J0cy5zZXR1cEZsb3dKViA9IHNldHVwRmxvd0pWO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../flowjv-react/dist/index.js\n");

/***/ })

})