import React, {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string
	setCurrentText:  (value: React.SetStateAction<string>) => void
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event:  ChangeEvent<HTMLInputElement> ) => {
		props.setCurrentText(event.currentTarget.value)
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
