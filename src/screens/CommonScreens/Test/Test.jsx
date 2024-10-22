import React, { useState } from "react";
import { Col, Row } from "antd";
import styles from "./Test.module.css";
import {
  InputField,
  TextComponent,
} from "../../../components";

const Test = () => {
  const [string, setString] = useState();
  const [Parentheses, setParentheses] = useState();
  const [duplicate, setDuplicate] = useState([]);

  const reverseString = () => {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }
    return reversed;
  };

  const isValidParentheses = (str) => {
    const stack = [];
    const pairs = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
    for (let char of str) {
      if (pairs[char]) {
        stack.push(char);
      } else if (
        char === ")" ||
        char === "]" ||
        char === "}"
      ) {
        if (
          pairs[stack.pop()] !==
          char
        ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  const removeDuplicates = (array) => {
    let str = array.toString();
    const arr = str.split("");
    const arr2 = [];
    arr.forEach((el, i) => {
      if (!arr2.includes(el)) {
        arr2.push(el);
      }
    });
    const uniqueArray = [...new Set(arr2)];
    return uniqueArray.join(", ").replace(",,", "").replace('[,', "[").replace(', ]', ' ]').replace(' ,', '')
  };



  return (
    <div className={styles.mainCon}>
      <Row className={styles.subCon}>
        <div className={styles.box}>
          <div className={styles.inputs}>
            <TextComponent
              text={'Task 1'}
              textClass={styles.heading}
            />
            <InputField
              label="Enter String To Reverse"
              placeholder={"String"}
              value={string}
              onChange={(e) => setString(e.target.value)}
            />
            <TextComponent
              text={string && reverseString()}
              textClass={styles.subHeading}
            />
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.inputs}>
            <TextComponent
              text={'Task 2'}
              textClass={styles.heading}
            />
            <InputField
              label="Enter Parentheses String"
              placeholder={"Parentheses"}
              value={Parentheses}
              onChange={(e) => setParentheses(e.target.value)}
            />
            {Parentheses &&
            <TextComponent
              text={Parentheses && `A valid parentheses string ? : ${isValidParentheses(Parentheses)}`}
              textClass={isValidParentheses(Parentheses) ? styles.subHeading : styles.subHeadingFalse}
            />
}
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.inputs}>
            <TextComponent
              text={'Task 3'}
              textClass={styles.heading}
            />
            <InputField
              label="Enter Array to remove duplicates"
              placeholder={"Array"}
              value={duplicate}
              onChange={(e) => setDuplicate(e.target.value)}
            />
            <TextComponent
              text={duplicate && `${removeDuplicates(duplicate)}`}
              textClass={styles.subHeading}
            />
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Test;
