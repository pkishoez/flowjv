import React, { forwardRef, useEffect } from "react";
import cx from "classnames";

type IInputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	errors: string[];
	success?: boolean;
	label?: string;
	onUnmount?: any;
	onMount?: any;
};

export const TextField = ({
	errors,
	success,
	className,
	readOnly,
	label,
	value = "",
	onUnmount,
	onMount,
	...props
}: IInputProps) => {
	const hasErrors = errors.length;
	useEffect(() => {
		onMount?.();
		return onUnmount;
	}, []);
	return (
		<label className="mt-3 block flex flex-col">
			<div className="text-lg">{label}</div>
			<input
				value={value}
				{...props}
				className={cx(
					"outline-none border-b-2 border-solid pt-0 pb-1 text-xs flex-grow",
					{
						"border-red-700 focus:border-red-700":
							hasErrors && !readOnly,
						"border-green-700 focus:border-green-700":
							success && !readOnly,
						"border-gray-400 focus:border-gray-900":
							!hasErrors && !readOnly,
						"cursor-default text-gray-600 pointer-events-none focus:border-gray-400": readOnly,
					},
					className
				)}
			/>
			{hasErrors ? (
				<div>
					{errors?.map((err, i) => (
						<div key={i} className="text-xs mt-1 text-red-700">
							{err}
						</div>
					))}
				</div>
			) : null}
		</label>
	);
};
