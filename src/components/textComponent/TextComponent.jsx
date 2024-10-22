import React from 'react';
import styles from './TextComponent.module.css';
const TextComponent = (props) =>  {
    return (
        <text  {...props} ref={props?.ref} className={`${styles.text} ${props?.textClass}`} onClick={props.onClick} style={props?.style}>{props.text}{props.children}</text>
    );
}

export default TextComponent;