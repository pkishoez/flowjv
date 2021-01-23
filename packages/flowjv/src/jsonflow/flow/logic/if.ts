import { IFlowConfig, IPayload, IValidationResult } from "../helper";
import { IKeyPath } from "../../../helper/immutable";
import {
	IObjectCondition,
	IObjectProperty,
	validateObjectProperties,
} from "../composite/object";
import {
	execJSONExpression,
	IExpression as IJSONExpression,
} from "../../../jsonexpression";

export type IIfConditionType<A = any, B = any, C = any, D = any, E = any> = {
	type: "if";
	blockId?: string;
	cond: IJSONExpression;
	true: (IObjectProperty<A, B, C, D, E> | IObjectCondition<A, B, C, D, E>)[];
	false?: (
		| IObjectProperty<A, B, C, D, E>
		| IObjectCondition<A, B, C, D, E>
	)[];
};

export type IIfPayload = IPayload & { refPath: IKeyPath };

export function validateIfCondition(
	schema: IIfConditionType,
	payload: IIfPayload,
	config: IFlowConfig
): IValidationResult {
	const cond = execJSONExpression(schema.cond, payload);
	if (!!cond) {
		// execute true object.
		return validateObjectProperties(schema.true, payload, config);
	}
	if (schema.false) {
		return validateObjectProperties(schema.false, payload, config);
	}
	return { isValid: true, errors: [] };
}
