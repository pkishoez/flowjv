webpackHotUpdate("static/development/pages/demo.js",{

/***/ "../flowjv-react/dist/index.js":
/*!*************************************!*\
  !*** ../flowjv-react/dist/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setupFlowJV = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\nvar flowjv_1 = __webpack_require__(/*! flowjv */ \"../flowjv/dist/index.js\");\nvar get_1 = __importDefault(__webpack_require__(/*! lodash/get */ \"../../node_modules/lodash/get.js\"));\nvar set_1 = __importDefault(__webpack_require__(/*! lodash/set */ \"../../node_modules/lodash/set.js\"));\nvar cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ \"../../node_modules/lodash/cloneDeep.js\"));\nvar config_1 = __webpack_require__(/*! ./config */ \"../flowjv-react/dist/config.js\");\nvar unset_1 = __importDefault(__webpack_require__(/*! lodash/unset */ \"../../node_modules/lodash/unset.js\"));\nfunction setupFlowJV(Config) {\n    if (Config === void 0) { Config = config_1.defaultConfig; }\n    return function (_a) {\n        var schema = _a.schema, defaultValue = _a.defaultValue, context = _a.context, value = _a.value, onChange = _a.onChange;\n        var _b = react_1.useState(defaultValue), formValue = _b[0], _setFormValue = _b[1];\n        var touchMap = react_1.useRef({});\n        // Using ref of value to avoid async nature of JS error.\n        var valueRef = react_1.useRef(value);\n        react_1.useEffect(function () {\n            valueRef.current = value;\n        }, [value]);\n        var setTouch = function (refPath) {\n            touchMap.current[refPath] = true;\n        };\n        var setValue = function (key, v) {\n            if (value) {\n                var clonedValue = cloneDeep_1.default(valueRef.current);\n                var newValue = set_1.default(clonedValue, key, v);\n                valueRef.current = newValue;\n                onChange === null || onChange === void 0 ? void 0 : onChange(newValue);\n                console.log(\"SET VLAUE \", JSON.stringify(newValue));\n            }\n            else {\n                _setFormValue(set_1.default(formValue, key, v));\n            }\n        };\n        var unsetValue = function (key) {\n            if (value) {\n                var clonedValue = cloneDeep_1.default(valueRef.current);\n                unset_1.default(clonedValue, key);\n                valueRef.current = clonedValue;\n                onChange === null || onChange === void 0 ? void 0 : onChange(cloneDeep_1.default(clonedValue));\n                console.log(JSON.stringify(clonedValue));\n            }\n            else {\n                unset_1.default(formValue, key);\n                _setFormValue(cloneDeep_1.default(formValue));\n            }\n        };\n        var getValue = function (key, def) {\n            if (key === void 0) { key = \"\"; }\n            if (def === void 0) { def = \"\"; }\n            if (key === \"\") {\n                return value ? valueRef.current : formValue;\n            }\n            return value\n                ? get_1.default(valueRef.current, key, def)\n                : get_1.default(formValue, key, def);\n        };\n        function render(schema, ref) {\n            if (ref === void 0) { ref = []; }\n            switch (schema.type) {\n                case \"object\": {\n                    // Loop over all the elements.\n                    return schema.properties.map(function (objconfig) {\n                        switch (objconfig.type) {\n                            case \"if\": {\n                                var cond = !!flowjv_1.execJSONExpression(objconfig.cond, {\n                                    data: getValue(),\n                                    context: context,\n                                    ref: getValue(ref.join(\".\")),\n                                });\n                                var flow = cond\n                                    ? objconfig.true\n                                    : objconfig.false;\n                                if (flow) {\n                                    return render({ type: \"object\", properties: flow }, ref);\n                                }\n                                break;\n                            }\n                            default: {\n                                return render(objconfig, __spreadArrays(ref, [\n                                    objconfig.key,\n                                ]));\n                            }\n                        }\n                    });\n                }\n            }\n            var validate = function (validations, refValue) {\n                return ((validations === null || validations === void 0 ? void 0 : validations.map(function (_a) {\n                    var logic = _a.logic, err = _a.err;\n                    return !!flowjv_1.execJSONExpression(logic, {\n                        data: getValue(),\n                        context: context,\n                        ref: refValue,\n                    })\n                        ? null\n                        : err || null;\n                })) || []).filter(function (v) { return v !== null; });\n            };\n            var refValue = getValue(ref.join(\"\"));\n            var refPath = ref.join(\".\");\n            var touched = touchMap[refPath];\n            var validations = schema.validations || [];\n            switch (schema.type) {\n                case \"enum\":\n                case \"boolean\":\n                case \"number\":\n                case \"string\": {\n                    // Render the components here!\n                    var errors = validate(validations || [], refValue);\n                    return (react_1.default.createElement(Config, { key: refPath, schema: schema, ui: {\n                            label: schema.label,\n                            errors: touched ? errors : [],\n                            success: touched ? !errors.length : false,\n                            value: getValue(refPath),\n                            onChange: function (v) {\n                                setValue(refPath, v);\n                            },\n                            onUnmount: function () {\n                                unsetValue(refPath);\n                            },\n                            setTouch: function () {\n                                setTouch(refPath);\n                            },\n                        } }));\n                }\n            }\n        }\n        return react_1.default.createElement(\"form\", { onSubmit: onSubmit }, render(schema));\n    };\n}\nexports.setupFlowJV = setupFlowJV;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vZmxvd2p2LXJlYWN0L2Rpc3QvaW5kZXguanM/ZjI4ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pELHdDQUF3QyxRQUFRO0FBQ2hELHdEQUF3RCxRQUFRO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxnREFBTztBQUMxQyxlQUFlLG1CQUFPLENBQUMsdUNBQVE7QUFDL0IsNEJBQTRCLG1CQUFPLENBQUMsb0RBQVk7QUFDaEQsNEJBQTRCLG1CQUFPLENBQUMsb0RBQVk7QUFDaEQsa0NBQWtDLG1CQUFPLENBQUMsZ0VBQWtCO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxnREFBVTtBQUNqQyw4QkFBOEIsbUJBQU8sQ0FBQyx3REFBYztBQUNwRDtBQUNBLDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQyxpQ0FBaUMsVUFBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsbUNBQW1DO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQiwrQkFBK0IsbUJBQW1CLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi4vZmxvd2p2LXJlYWN0L2Rpc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2V0dXBGbG93SlYgPSB2b2lkIDA7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGZsb3dqdl8xID0gcmVxdWlyZShcImZsb3dqdlwiKTtcbnZhciBnZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2dldFwiKSk7XG52YXIgc2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9zZXRcIikpO1xudmFyIGNsb25lRGVlcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVEZWVwXCIpKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciB1bnNldF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvdW5zZXRcIikpO1xuZnVuY3Rpb24gc2V0dXBGbG93SlYoQ29uZmlnKSB7XG4gICAgaWYgKENvbmZpZyA9PT0gdm9pZCAwKSB7IENvbmZpZyA9IGNvbmZpZ18xLmRlZmF1bHRDb25maWc7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBzY2hlbWEgPSBfYS5zY2hlbWEsIGRlZmF1bHRWYWx1ZSA9IF9hLmRlZmF1bHRWYWx1ZSwgY29udGV4dCA9IF9hLmNvbnRleHQsIHZhbHVlID0gX2EudmFsdWUsIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2U7XG4gICAgICAgIHZhciBfYiA9IHJlYWN0XzEudXNlU3RhdGUoZGVmYXVsdFZhbHVlKSwgZm9ybVZhbHVlID0gX2JbMF0sIF9zZXRGb3JtVmFsdWUgPSBfYlsxXTtcbiAgICAgICAgdmFyIHRvdWNoTWFwID0gcmVhY3RfMS51c2VSZWYoe30pO1xuICAgICAgICAvLyBVc2luZyByZWYgb2YgdmFsdWUgdG8gYXZvaWQgYXN5bmMgbmF0dXJlIG9mIEpTIGVycm9yLlxuICAgICAgICB2YXIgdmFsdWVSZWYgPSByZWFjdF8xLnVzZVJlZih2YWx1ZSk7XG4gICAgICAgIHJlYWN0XzEudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgfSwgW3ZhbHVlXSk7XG4gICAgICAgIHZhciBzZXRUb3VjaCA9IGZ1bmN0aW9uIChyZWZQYXRoKSB7XG4gICAgICAgICAgICB0b3VjaE1hcC5jdXJyZW50W3JlZlBhdGhdID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNldFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdikge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsb25lZFZhbHVlID0gY2xvbmVEZWVwXzEuZGVmYXVsdCh2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBzZXRfMS5kZWZhdWx0KGNsb25lZFZhbHVlLCBrZXksIHYpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VUIFZMQVVFIFwiLCBKU09OLnN0cmluZ2lmeShuZXdWYWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3NldEZvcm1WYWx1ZShzZXRfMS5kZWZhdWx0KGZvcm1WYWx1ZSwga2V5LCB2KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bnNldFZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsb25lZFZhbHVlID0gY2xvbmVEZWVwXzEuZGVmYXVsdCh2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICB1bnNldF8xLmRlZmF1bHQoY2xvbmVkVmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGNsb25lZFZhbHVlO1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShjbG9uZURlZXBfMS5kZWZhdWx0KGNsb25lZFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2xvbmVkVmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVuc2V0XzEuZGVmYXVsdChmb3JtVmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgX3NldEZvcm1WYWx1ZShjbG9uZURlZXBfMS5kZWZhdWx0KGZvcm1WYWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBkZWYpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHZvaWQgMCkgeyBrZXkgPSBcIlwiOyB9XG4gICAgICAgICAgICBpZiAoZGVmID09PSB2b2lkIDApIHsgZGVmID0gXCJcIjsgfVxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlUmVmLmN1cnJlbnQgOiBmb3JtVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgICA/IGdldF8xLmRlZmF1bHQodmFsdWVSZWYuY3VycmVudCwga2V5LCBkZWYpXG4gICAgICAgICAgICAgICAgOiBnZXRfMS5kZWZhdWx0KGZvcm1WYWx1ZSwga2V5LCBkZWYpO1xuICAgICAgICB9O1xuICAgICAgICBmdW5jdGlvbiByZW5kZXIoc2NoZW1hLCByZWYpIHtcbiAgICAgICAgICAgIGlmIChyZWYgPT09IHZvaWQgMCkgeyByZWYgPSBbXTsgfVxuICAgICAgICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb29wIG92ZXIgYWxsIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNjaGVtYS5wcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAob2JqY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG9iamNvbmZpZy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlmXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmQgPSAhIWZsb3dqdl8xLmV4ZWNKU09ORXhwcmVzc2lvbihvYmpjb25maWcuY29uZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IGdldFZhbHVlKHJlZi5qb2luKFwiLlwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmxvdyA9IGNvbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb2JqY29uZmlnLnRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogb2JqY29uZmlnLmZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmxvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcih7IHR5cGU6IFwib2JqZWN0XCIsIHByb3BlcnRpZXM6IGZsb3cgfSwgcmVmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyKG9iamNvbmZpZywgX19zcHJlYWRBcnJheXMocmVmLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpjb25maWcua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsaWRhdGlvbnMsIHJlZlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgodmFsaWRhdGlvbnMgPT09IG51bGwgfHwgdmFsaWRhdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbGlkYXRpb25zLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvZ2ljID0gX2EubG9naWMsIGVyciA9IF9hLmVycjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZmxvd2p2XzEuZXhlY0pTT05FeHByZXNzaW9uKGxvZ2ljLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZXRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogcmVmVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyIHx8IG51bGw7XG4gICAgICAgICAgICAgICAgfSkpIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYgIT09IG51bGw7IH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciByZWZWYWx1ZSA9IGdldFZhbHVlKHJlZi5qb2luKFwiXCIpKTtcbiAgICAgICAgICAgIHZhciByZWZQYXRoID0gcmVmLmpvaW4oXCIuXCIpO1xuICAgICAgICAgICAgdmFyIHRvdWNoZWQgPSB0b3VjaE1hcFtyZWZQYXRoXTtcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9ucyA9IHNjaGVtYS52YWxpZGF0aW9ucyB8fCBbXTtcbiAgICAgICAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW51bVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjoge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgdGhlIGNvbXBvbmVudHMgaGVyZSFcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9ycyA9IHZhbGlkYXRlKHZhbGlkYXRpb25zIHx8IFtdLCByZWZWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnLCB7IGtleTogcmVmUGF0aCwgc2NoZW1hOiBzY2hlbWEsIHVpOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IHRvdWNoZWQgPyBlcnJvcnMgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0b3VjaGVkID8gIWVycm9ycy5sZW5ndGggOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZ2V0VmFsdWUocmVmUGF0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHJlZlBhdGgsIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Vbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2V0VmFsdWUocmVmUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaChyZWZQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBvblN1Ym1pdDogb25TdWJtaXQgfSwgcmVuZGVyKHNjaGVtYSkpO1xuICAgIH07XG59XG5leHBvcnRzLnNldHVwRmxvd0pWID0gc2V0dXBGbG93SlY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../flowjv-react/dist/index.js\n");

/***/ })

})