type ButtonPropsType = {
  callBack: () => any
  name: string
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    props.callBack()
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
