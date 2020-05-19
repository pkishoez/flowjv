webpackHotUpdate("static/development/pages/demo.js",{

/***/ "../flowjv-react/dist/index.js":
/*!*************************************!*\
  !*** ../flowjv-react/dist/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.setupFlowJV = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"../../node_modules/react/index.js\"));\nvar flowjv_1 = __webpack_require__(/*! flowjv */ \"../flowjv/dist/index.js\");\nvar get_1 = __importDefault(__webpack_require__(/*! lodash/get */ \"../../node_modules/lodash/get.js\"));\nvar set_1 = __importDefault(__webpack_require__(/*! lodash/set */ \"../../node_modules/lodash/set.js\"));\nvar cloneDeep_1 = __importDefault(__webpack_require__(/*! lodash/cloneDeep */ \"../../node_modules/lodash/cloneDeep.js\"));\nvar config_1 = __webpack_require__(/*! ./config */ \"../flowjv-react/dist/config.js\");\nvar unset_1 = __importDefault(__webpack_require__(/*! lodash/unset */ \"../../node_modules/lodash/unset.js\"));\nfunction setupFlowJV(Config) {\n    if (Config === void 0) { Config = config_1.defaultConfig; }\n    return function (_a) {\n        var schema = _a.schema, defaultValue = _a.defaultValue, context = _a.context, value = _a.value, onChange = _a.onChange, onSubmit = _a.onSubmit;\n        var _b = react_1.useState(defaultValue), formValue = _b[0], _setFormValue = _b[1];\n        var touchMap = react_1.useRef({});\n        // Using ref of value to avoid async nature of JS error.\n        var valueRef = react_1.useRef(value);\n        react_1.useEffect(function () {\n            valueRef.current = value;\n        }, [value]);\n        var setTouch = function (refPath) {\n            touchMap.current[refPath] = true;\n        };\n        var setValue = function (key, v) {\n            if (value) {\n                var clonedValue = cloneDeep_1.default(valueRef.current);\n                var newValue = set_1.default(clonedValue, key, v);\n                valueRef.current = newValue;\n                onChange === null || onChange === void 0 ? void 0 : onChange(newValue);\n                console.log(\"SET VLAUE \", JSON.stringify(newValue));\n            }\n            else {\n                _setFormValue(set_1.default(formValue, key, v));\n            }\n        };\n        var unsetValue = function (key) {\n            if (value) {\n                var clonedValue = cloneDeep_1.default(valueRef.current);\n                unset_1.default(clonedValue, key);\n                valueRef.current = clonedValue;\n                onChange === null || onChange === void 0 ? void 0 : onChange(cloneDeep_1.default(clonedValue));\n                console.log(JSON.stringify(clonedValue));\n            }\n            else {\n                unset_1.default(formValue, key);\n                _setFormValue(cloneDeep_1.default(formValue));\n            }\n        };\n        var getValue = function (key, def) {\n            if (key === void 0) { key = \"\"; }\n            if (def === void 0) { def = \"\"; }\n            if (key === \"\") {\n                return value ? valueRef.current : formValue;\n            }\n            return value\n                ? get_1.default(valueRef.current, key, def)\n                : get_1.default(formValue, key, def);\n        };\n        function render(schema, ref) {\n            if (ref === void 0) { ref = []; }\n            switch (schema.type) {\n                case \"object\": {\n                    // Loop over all the elements.\n                    return schema.properties.map(function (objconfig) {\n                        switch (objconfig.type) {\n                            case \"if\": {\n                                var cond = !!flowjv_1.execJSONExpression(objconfig.cond, {\n                                    data: getValue(),\n                                    context: context,\n                                    ref: getValue(ref.join(\".\")),\n                                });\n                                var flow = cond\n                                    ? objconfig.true\n                                    : objconfig.false;\n                                if (flow) {\n                                    return render({ type: \"object\", properties: flow }, ref);\n                                }\n                                break;\n                            }\n                            default: {\n                                return render(objconfig, __spreadArrays(ref, [\n                                    objconfig.key,\n                                ]));\n                            }\n                        }\n                    });\n                }\n            }\n            var validate = function (validations, refValue) {\n                return ((validations === null || validations === void 0 ? void 0 : validations.map(function (_a) {\n                    var logic = _a.logic, err = _a.err;\n                    return !!flowjv_1.execJSONExpression(logic, {\n                        data: getValue(),\n                        context: context,\n                        ref: refValue,\n                    })\n                        ? null\n                        : err || null;\n                })) || []).filter(function (v) { return v !== null; });\n            };\n            var refValue = getValue(ref.join(\"\"));\n            var refPath = ref.join(\".\");\n            var touched = touchMap[refPath];\n            var validations = schema.validations || [];\n            switch (schema.type) {\n                case \"enum\":\n                case \"boolean\":\n                case \"number\":\n                case \"string\": {\n                    // Render the components here!\n                    var errors = validate(validations || [], refValue);\n                    return (react_1.default.createElement(Config, { key: refPath, schema: schema, ui: {\n                            label: schema.label,\n                            errors: touched ? errors : [],\n                            success: touched ? !errors.length : false,\n                            value: getValue(refPath),\n                            onChange: function (v) {\n                                setValue(refPath, v);\n                            },\n                            onUnmount: function () {\n                                unsetValue(refPath);\n                            },\n                            setTouch: function () {\n                                setTouch(refPath);\n                            },\n                        } }));\n                }\n            }\n        }\n        return (react_1.default.createElement(\"form\", { onSubmit: function () {\n                onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(valueRef.current);\n            } }, render(schema)));\n    };\n}\nexports.setupFlowJV = setupFlowJV;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vZmxvd2p2LXJlYWN0L2Rpc3QvaW5kZXguanM/ZjI4ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxRQUFRO0FBQ3pELHdDQUF3QyxRQUFRO0FBQ2hELHdEQUF3RCxRQUFRO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxnREFBTztBQUMxQyxlQUFlLG1CQUFPLENBQUMsdUNBQVE7QUFDL0IsNEJBQTRCLG1CQUFPLENBQUMsb0RBQVk7QUFDaEQsNEJBQTRCLG1CQUFPLENBQUMsb0RBQVk7QUFDaEQsa0NBQWtDLG1CQUFPLENBQUMsZ0VBQWtCO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxnREFBVTtBQUNqQyw4QkFBOEIsbUJBQU8sQ0FBQyx3REFBYztBQUNwRDtBQUNBLDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQyxpQ0FBaUMsVUFBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsbUNBQW1DO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQiwrQkFBK0IsbUJBQW1CLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBIiwiZmlsZSI6Ii4uL2Zsb3dqdi1yZWFjdC9kaXN0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldHVwRmxvd0pWID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBmbG93anZfMSA9IHJlcXVpcmUoXCJmbG93anZcIik7XG52YXIgZ2V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9nZXRcIikpO1xudmFyIHNldF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2gvc2V0XCIpKTtcbnZhciBjbG9uZURlZXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKSk7XG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG52YXIgdW5zZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL3Vuc2V0XCIpKTtcbmZ1bmN0aW9uIHNldHVwRmxvd0pWKENvbmZpZykge1xuICAgIGlmIChDb25maWcgPT09IHZvaWQgMCkgeyBDb25maWcgPSBjb25maWdfMS5kZWZhdWx0Q29uZmlnOyB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgc2NoZW1hID0gX2Euc2NoZW1hLCBkZWZhdWx0VmFsdWUgPSBfYS5kZWZhdWx0VmFsdWUsIGNvbnRleHQgPSBfYS5jb250ZXh0LCB2YWx1ZSA9IF9hLnZhbHVlLCBvbkNoYW5nZSA9IF9hLm9uQ2hhbmdlLCBvblN1Ym1pdCA9IF9hLm9uU3VibWl0O1xuICAgICAgICB2YXIgX2IgPSByZWFjdF8xLnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSksIGZvcm1WYWx1ZSA9IF9iWzBdLCBfc2V0Rm9ybVZhbHVlID0gX2JbMV07XG4gICAgICAgIHZhciB0b3VjaE1hcCA9IHJlYWN0XzEudXNlUmVmKHt9KTtcbiAgICAgICAgLy8gVXNpbmcgcmVmIG9mIHZhbHVlIHRvIGF2b2lkIGFzeW5jIG5hdHVyZSBvZiBKUyBlcnJvci5cbiAgICAgICAgdmFyIHZhbHVlUmVmID0gcmVhY3RfMS51c2VSZWYodmFsdWUpO1xuICAgICAgICByZWFjdF8xLnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgICAgIH0sIFt2YWx1ZV0pO1xuICAgICAgICB2YXIgc2V0VG91Y2ggPSBmdW5jdGlvbiAocmVmUGF0aCkge1xuICAgICAgICAgICAgdG91Y2hNYXAuY3VycmVudFtyZWZQYXRoXSA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBzZXRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIHYpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBjbG9uZWRWYWx1ZSA9IGNsb25lRGVlcF8xLmRlZmF1bHQodmFsdWVSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gc2V0XzEuZGVmYXVsdChjbG9uZWRWYWx1ZSwga2V5LCB2KTtcbiAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFVCBWTEFVRSBcIiwgSlNPTi5zdHJpbmdpZnkobmV3VmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9zZXRGb3JtVmFsdWUoc2V0XzEuZGVmYXVsdChmb3JtVmFsdWUsIGtleSwgdikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBjbG9uZWRWYWx1ZSA9IGNsb25lRGVlcF8xLmRlZmF1bHQodmFsdWVSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgdW5zZXRfMS5kZWZhdWx0KGNsb25lZFZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBjbG9uZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UoY2xvbmVEZWVwXzEuZGVmYXVsdChjbG9uZWRWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNsb25lZFZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bnNldF8xLmRlZmF1bHQoZm9ybVZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIF9zZXRGb3JtVmFsdWUoY2xvbmVEZWVwXzEuZGVmYXVsdChmb3JtVmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGtleSwgZGVmKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSB2b2lkIDApIHsga2V5ID0gXCJcIjsgfVxuICAgICAgICAgICAgaWYgKGRlZiA9PT0gdm9pZCAwKSB7IGRlZiA9IFwiXCI7IH1cbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZVJlZi5jdXJyZW50IDogZm9ybVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgICAgPyBnZXRfMS5kZWZhdWx0KHZhbHVlUmVmLmN1cnJlbnQsIGtleSwgZGVmKVxuICAgICAgICAgICAgICAgIDogZ2V0XzEuZGVmYXVsdChmb3JtVmFsdWUsIGtleSwgZGVmKTtcbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKHNjaGVtYSwgcmVmKSB7XG4gICAgICAgICAgICBpZiAocmVmID09PSB2b2lkIDApIHsgcmVmID0gW107IH1cbiAgICAgICAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIGFsbCB0aGUgZWxlbWVudHMuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllcy5tYXAoZnVuY3Rpb24gKG9iamNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChvYmpjb25maWcudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpZlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25kID0gISFmbG93anZfMS5leGVjSlNPTkV4cHJlc3Npb24ob2JqY29uZmlnLmNvbmQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBnZXRWYWx1ZShyZWYuam9pbihcIi5cIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZsb3cgPSBjb25kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9iamNvbmZpZy50cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9iamNvbmZpZy5mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZsb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXIoeyB0eXBlOiBcIm9iamVjdFwiLCBwcm9wZXJ0aWVzOiBmbG93IH0sIHJlZik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihvYmpjb25maWcsIF9fc3ByZWFkQXJyYXlzKHJlZiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqY29uZmlnLmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbGlkYXRlID0gZnVuY3Rpb24gKHZhbGlkYXRpb25zLCByZWZWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoKHZhbGlkYXRpb25zID09PSBudWxsIHx8IHZhbGlkYXRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWxpZGF0aW9ucy5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2dpYyA9IF9hLmxvZ2ljLCBlcnIgPSBfYS5lcnI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWZsb3dqdl8xLmV4ZWNKU09ORXhwcmVzc2lvbihsb2dpYywge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IHJlZlZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVyciB8fCBudWxsO1xuICAgICAgICAgICAgICAgIH0pKSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uICh2KSB7IHJldHVybiB2ICE9PSBudWxsOyB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgcmVmVmFsdWUgPSBnZXRWYWx1ZShyZWYuam9pbihcIlwiKSk7XG4gICAgICAgICAgICB2YXIgcmVmUGF0aCA9IHJlZi5qb2luKFwiLlwiKTtcbiAgICAgICAgICAgIHZhciB0b3VjaGVkID0gdG91Y2hNYXBbcmVmUGF0aF07XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbnMgPSBzY2hlbWEudmFsaWRhdGlvbnMgfHwgW107XG4gICAgICAgICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImVudW1cIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyIHRoZSBjb21wb25lbnRzIGhlcmUhXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvcnMgPSB2YWxpZGF0ZSh2YWxpZGF0aW9ucyB8fCBbXSwgcmVmVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbmZpZywgeyBrZXk6IHJlZlBhdGgsIHNjaGVtYTogc2NoZW1hLCB1aToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiB0b3VjaGVkID8gZXJyb3JzIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdG91Y2hlZCA/ICFlcnJvcnMubGVuZ3RoIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGdldFZhbHVlKHJlZlBhdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShyZWZQYXRoLCB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVW5tb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNldFZhbHVlKHJlZlBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VG91Y2gocmVmUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG9uU3VibWl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb25TdWJtaXQgPT09IG51bGwgfHwgb25TdWJtaXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uU3VibWl0KHZhbHVlUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgfSB9LCByZW5kZXIoc2NoZW1hKSkpO1xuICAgIH07XG59XG5leHBvcnRzLnNldHVwRmxvd0pWID0gc2V0dXBGbG93SlY7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../flowjv-react/dist/index.js\n");

/***/ })

})