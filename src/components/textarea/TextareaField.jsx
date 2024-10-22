import React from "react";
import styles from "./TextareaField.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import TextComponent from "../textComponent/TextComponent";

const TextareaField = (props) => {
  const { height, width } = useWindowDimensions();
  return (
    <div
      className={`${styles.main_input} ${props?.styles}`}
      style={{ width: width > 576 ? props.inputWidth : "100%" }}
    >
      <text className={` ${styles.label} ${props?.labelClass} `}>
        <TextComponent>{props?.label}</TextComponent>
      </text>
      <div className={`${styles.input} ${props?.textareaClass}`}>
        <textarea
          style={{
            width: props?.textCenter
              ? "20%"
              : props.width
              ? props.width
              : "100%",
          }}
          placeholder={props?.placeholder}
          className={`${styles.inner_input} ${props?.innerInputClass}`}
          name={props?.name}
          disabled={props?.disabled}
          value={props?.value}
          onChange={props?.onChange}
          type={props?.type}
          maxLength={props?.maxLength}
          rows={props?.rows ? props?.rows : 4}
        />
        {props?.rightIcon ? (
          <div className={styles.rightIcon} onClick={props?.onRightIconPress}>
            {props?.rightIcon}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TextareaField;
