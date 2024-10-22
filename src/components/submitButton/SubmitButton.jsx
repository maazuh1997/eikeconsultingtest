import React, { useState } from "react";
import styles from "./SubmitButton.module.css";
import TextComponent from "../textComponent/TextComponent";

//   inputIcon:InputIcon,
const SubmitButton = (props) => {
  const [touched, setTouched] = useState(false);
  const btnTouched = () => {
    setTouched(!touched);
  };
  const btnRelease = () => {
    setTouched(false);
  };
  return (
    <button
      onMouseDown={btnTouched}
      onMouseUp={btnRelease}
      disabled={props?.disabled}
      className={`${
        touched
          ? styles.touchbtn
          : props.outline
          ? styles.outlineBtn
          : styles.btn
      } ${props?.btnClass}`}
      onClick={props?.onClick}
    >
      {props.leftIcon}
      <TextComponent textClass={props?.textClass}>{props?.title}</TextComponent>
      {props.rightIcon}
    </button>
  );
};

export default SubmitButton;
