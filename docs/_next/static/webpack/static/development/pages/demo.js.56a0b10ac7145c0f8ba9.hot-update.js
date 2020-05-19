webpackHotUpdate("static/development/pages/demo.js",{

/***/ "../flowjv-react/dist/index.js":
/*!*************************************!*\
  !*** ../flowjv-react/dist/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setupFlowJV = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\nvar flowjv_1 = __webpack_require__(/*! flowjv */ \"../flowjv/dist/index.js\");\nvar get_1 = __importDefault(__webpack_require__(/*! lodash/get */ \"../../node_modules/lodash/get.js\"));\nvar set_1 = __importDefault(__webpack_require__(/*! lodash/set */ \"../../node_modules/lodash/set.js\"));\nvar cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ \"../../node_modules/lodash/cloneDeep.js\"));\nvar config_1 = __webpack_require__(/*! ./config */ \"../flowjv-react/dist/config.js\");\nvar unset_1 = __importDefault(__webpack_require__(/*! lodash/unset */ \"../../node_modules/lodash/unset.js\"));\nfunction setupFlowJV(Config) {\n    if (Config === void 0) { Config = config_1.defaultConfig; }\n    return function (_a) {\n        var schema = _a.schema, defaultValue = _a.defaultValue, context = _a.context, value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit;\n        var _b = react_1.useState(defaultValue), formValue = _b[0], _setFormValue = _b[1];\n        var touchMap = react_1.useRef({});\n        var formRefs = react_1.useRef([]);\n        react_1.useEffect(function () { });\n        // Using ref of value to avoid async nature of JS error.\n        var valueRef = react_1.useRef(value);\n        react_1.useEffect(function () {\n            valueRef.current = value;\n        }, [value]);\n        var setTouch = function (refPath) {\n            touchMap.current[refPath] = true;\n        };\n        var setValue = function (key, v) {\n            if (value) {\n                var clonedValue = cloneDeep_1.default(valueRef.current);\n                var newValue = set_1.default(clonedValue, key, v);\n                valueRef.current = newValue;\n                onChange === null || onChange === void 0 ? void 0 : onChange(newValue);\n                console.log(\"SET VLAUE \", JSON.stringify(newValue));\n            }\n            else {\n                _setFormValue(set_1.default(formValue, key, v));\n            }\n        };\n        var unsetValue = function (key) {\n            if (value) {\n                var clonedValue = cloneDeep_1.default(valueRef.current);\n                unset_1.default(clonedValue, key);\n                valueRef.current = clonedValue;\n                onChange === null || onChange === void 0 ? void 0 : onChange(cloneDeep_1.default(clonedValue));\n                console.log(JSON.stringify(clonedValue));\n            }\n            else {\n                unset_1.default(formValue, key);\n                _setFormValue(cloneDeep_1.default(formValue));\n            }\n        };\n        var getValue = function (key, def) {\n            if (key === void 0) { key = \"\"; }\n            if (def === void 0) { def = \"\"; }\n            if (key === \"\") {\n                return value ? valueRef.current : formValue;\n            }\n            return value\n                ? get_1.default(valueRef.current, key, def)\n                : get_1.default(formValue, key, def);\n        };\n        function render(schema, ref) {\n            if (ref === void 0) { ref = []; }\n            switch (schema.type) {\n                case \"object\": {\n                    // Loop over all the elements.\n                    return schema.properties.map(function (objconfig) {\n                        switch (objconfig.type) {\n                            case \"if\": {\n                                var cond = !!flowjv_1.execJSONExpression(objconfig.cond, {\n                                    data: getValue(),\n                                    context: context,\n                                    ref: getValue(ref.join(\".\")),\n                                });\n                                var flow = cond\n                                    ? objconfig.true\n                                    : objconfig.false;\n                                if (flow) {\n                                    return render({ type: \"object\", properties: flow }, ref);\n                                }\n                                break;\n                            }\n                            default: {\n                                return render(objconfig, __spreadArrays(ref, [\n                                    objconfig.key,\n                                ]));\n                            }\n                        }\n                    });\n                }\n            }\n            var validate = function (validations, refValue) {\n                return ((validations === null || validations === void 0 ? void 0 : validations.map(function (_a) {\n                    var logic = _a.logic, err = _a.err;\n                    return !!flowjv_1.execJSONExpression(logic, {\n                        data: getValue(),\n                        context: context,\n                        ref: refValue,\n                    })\n                        ? null\n                        : err || null;\n                })) || []).filter(function (v) { return v !== null; });\n            };\n            var refValue = getValue(ref.join(\"\"));\n            var refPath = ref.join(\".\");\n            var touched = touchMap[refPath];\n            var validations = schema.validations || [];\n            switch (schema.type) {\n                case \"enum\":\n                case \"boolean\":\n                case \"number\":\n                case \"string\": {\n                    // Render the components here!\n                    var errors = validate(validations || [], refValue);\n                    return (react_1.default.createElement(Config, { key: refPath, schema: schema, ui: {\n                            label: schema.label,\n                            errors: touched ? errors : [],\n                            success: touched ? !errors.length : false,\n                            value: getValue(refPath),\n                            onChange: function (v) {\n                                setValue(refPath, v);\n                            },\n                            onMount: function () {\n                                formRefs.current = __spreadArrays(formRefs.current, [\n                                    refPath,\n                                ]);\n                            },\n                            onUnmount: function () {\n                                unsetValue(refPath);\n                            },\n                            setTouch: function () {\n                                setTouch(refPath);\n                            },\n                        } }));\n                }\n            }\n        }\n        return (react_1.default.createElement(\"form\", { onSubmit: function () {\n                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(valueRef.current);\n            } }, render(schema)));\n    };\n}\nexports.setupFlowJV = setupFlowJV;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vZmxvd2p2LXJlYWN0L2Rpc3QvaW5kZXguanM/ZjI4ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pELHdDQUF3QyxRQUFRO0FBQ2hELHdEQUF3RCxRQUFRO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxnREFBTztBQUMxQyxlQUFlLG1CQUFPLENBQUMsdUNBQVE7QUFDL0IsNEJBQTRCLG1CQUFPLENBQUMsb0RBQVk7QUFDaEQsNEJBQTRCLG1CQUFPLENBQUMsb0RBQVk7QUFDaEQsa0NBQWtDLG1CQUFPLENBQUMsZ0VBQWtCO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxnREFBVTtBQUNqQyw4QkFBOEIsbUJBQU8sQ0FBQyx3REFBYztBQUNwRDtBQUNBLDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EsdUNBQXVDLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVO0FBQzNDLGlDQUFpQyxVQUFVO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxtQ0FBbUM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCLCtCQUErQixtQkFBbUIsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUIsRUFBRTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0EiLCJmaWxlIjoiLi4vZmxvd2p2LXJlYWN0L2Rpc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2V0dXBGbG93SlYgPSB2b2lkIDA7XG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGZsb3dqdl8xID0gcmVxdWlyZShcImZsb3dqdlwiKTtcbnZhciBnZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2dldFwiKSk7XG52YXIgc2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9zZXRcIikpO1xudmFyIGNsb25lRGVlcF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVEZWVwXCIpKTtcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbnZhciB1bnNldF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvdW5zZXRcIikpO1xuZnVuY3Rpb24gc2V0dXBGbG93SlYoQ29uZmlnKSB7XG4gICAgaWYgKENvbmZpZyA9PT0gdm9pZCAwKSB7IENvbmZpZyA9IGNvbmZpZ18xLmRlZmF1bHRDb25maWc7IH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBzY2hlbWEgPSBfYS5zY2hlbWEsIGRlZmF1bHRWYWx1ZSA9IF9hLmRlZmF1bHRWYWx1ZSwgY29udGV4dCA9IF9hLmNvbnRleHQsIHZhbHVlID0gX2EudmFsdWUsIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2UsIG9uU3VibWl0ID0gX2Eub25TdWJtaXQ7XG4gICAgICAgIHZhciBfYiA9IHJlYWN0XzEudXNlU3RhdGUoZGVmYXVsdFZhbHVlKSwgZm9ybVZhbHVlID0gX2JbMF0sIF9zZXRGb3JtVmFsdWUgPSBfYlsxXTtcbiAgICAgICAgdmFyIHRvdWNoTWFwID0gcmVhY3RfMS51c2VSZWYoe30pO1xuICAgICAgICB2YXIgZm9ybVJlZnMgPSByZWFjdF8xLnVzZVJlZihbXSk7XG4gICAgICAgIHJlYWN0XzEudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgIC8vIFVzaW5nIHJlZiBvZiB2YWx1ZSB0byBhdm9pZCBhc3luYyBuYXR1cmUgb2YgSlMgZXJyb3IuXG4gICAgICAgIHZhciB2YWx1ZVJlZiA9IHJlYWN0XzEudXNlUmVmKHZhbHVlKTtcbiAgICAgICAgcmVhY3RfMS51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IHZhbHVlO1xuICAgICAgICB9LCBbdmFsdWVdKTtcbiAgICAgICAgdmFyIHNldFRvdWNoID0gZnVuY3Rpb24gKHJlZlBhdGgpIHtcbiAgICAgICAgICAgIHRvdWNoTWFwLmN1cnJlbnRbcmVmUGF0aF0gPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2KSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xvbmVkVmFsdWUgPSBjbG9uZURlZXBfMS5kZWZhdWx0KHZhbHVlUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHNldF8xLmRlZmF1bHQoY2xvbmVkVmFsdWUsIGtleSwgdik7XG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTRVQgVkxBVUUgXCIsIEpTT04uc3RyaW5naWZ5KG5ld1ZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfc2V0Rm9ybVZhbHVlKHNldF8xLmRlZmF1bHQoZm9ybVZhbHVlLCBrZXksIHYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVuc2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2xvbmVkVmFsdWUgPSBjbG9uZURlZXBfMS5kZWZhdWx0KHZhbHVlUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIHVuc2V0XzEuZGVmYXVsdChjbG9uZWRWYWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gY2xvbmVkVmFsdWU7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKGNsb25lRGVlcF8xLmRlZmF1bHQoY2xvbmVkVmFsdWUpKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjbG9uZWRWYWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdW5zZXRfMS5kZWZhdWx0KGZvcm1WYWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICBfc2V0Rm9ybVZhbHVlKGNsb25lRGVlcF8xLmRlZmF1bHQoZm9ybVZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIGRlZikge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gdm9pZCAwKSB7IGtleSA9IFwiXCI7IH1cbiAgICAgICAgICAgIGlmIChkZWYgPT09IHZvaWQgMCkgeyBkZWYgPSBcIlwiOyB9XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWVSZWYuY3VycmVudCA6IGZvcm1WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICAgID8gZ2V0XzEuZGVmYXVsdCh2YWx1ZVJlZi5jdXJyZW50LCBrZXksIGRlZilcbiAgICAgICAgICAgICAgICA6IGdldF8xLmRlZmF1bHQoZm9ybVZhbHVlLCBrZXksIGRlZik7XG4gICAgICAgIH07XG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcihzY2hlbWEsIHJlZikge1xuICAgICAgICAgICAgaWYgKHJlZiA9PT0gdm9pZCAwKSB7IHJlZiA9IFtdOyB9XG4gICAgICAgICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciBhbGwgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2NoZW1hLnByb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChvYmpjb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAob2JqY29uZmlnLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaWZcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uZCA9ICEhZmxvd2p2XzEuZXhlY0pTT05FeHByZXNzaW9uKG9iamNvbmZpZy5jb25kLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBnZXRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogZ2V0VmFsdWUocmVmLmpvaW4oXCIuXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbG93ID0gY29uZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvYmpjb25maWcudHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvYmpjb25maWcuZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmbG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyKHsgdHlwZTogXCJvYmplY3RcIiwgcHJvcGVydGllczogZmxvdyB9LCByZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXIob2JqY29uZmlnLCBfX3NwcmVhZEFycmF5cyhyZWYsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamNvbmZpZy5rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uICh2YWxpZGF0aW9ucywgcmVmVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCh2YWxpZGF0aW9ucyA9PT0gbnVsbCB8fCB2YWxpZGF0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsaWRhdGlvbnMubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9naWMgPSBfYS5sb2dpYywgZXJyID0gX2EuZXJyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFmbG93anZfMS5leGVjSlNPTkV4cHJlc3Npb24obG9naWMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiByZWZWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnIgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICB9KSkgfHwgW10pLmZpbHRlcihmdW5jdGlvbiAodikgeyByZXR1cm4gdiAhPT0gbnVsbDsgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHJlZlZhbHVlID0gZ2V0VmFsdWUocmVmLmpvaW4oXCJcIikpO1xuICAgICAgICAgICAgdmFyIHJlZlBhdGggPSByZWYuam9pbihcIi5cIik7XG4gICAgICAgICAgICB2YXIgdG91Y2hlZCA9IHRvdWNoTWFwW3JlZlBhdGhdO1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25zID0gc2NoZW1hLnZhbGlkYXRpb25zIHx8IFtdO1xuICAgICAgICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlbnVtXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlciB0aGUgY29tcG9uZW50cyBoZXJlIVxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gdmFsaWRhdGUodmFsaWRhdGlvbnMgfHwgW10sIHJlZlZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb25maWcsIHsga2V5OiByZWZQYXRoLCBzY2hlbWE6IHNjaGVtYSwgdWk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogdG91Y2hlZCA/IGVycm9ycyA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRvdWNoZWQgPyAhZXJyb3JzLmxlbmd0aCA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBnZXRWYWx1ZShyZWZQYXRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUocmVmUGF0aCwgdik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1SZWZzLmN1cnJlbnQgPSBfX3NwcmVhZEFycmF5cyhmb3JtUmVmcy5jdXJyZW50LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5tb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNldFZhbHVlKHJlZlBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2gocmVmUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG9uU3VibWl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb25TdWJtaXQgPT09IG51bGwgfHwgb25TdWJtaXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uU3VibWl0KHZhbHVlUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgfSB9LCByZW5kZXIoc2NoZW1hKSkpO1xuICAgIH07XG59XG5leHBvcnRzLnNldHVwRmxvd0pWID0gc2V0dXBGbG93SlY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../flowjv-react/dist/index.js\n");

/***/ })

})