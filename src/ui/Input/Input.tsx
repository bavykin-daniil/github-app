//general
import React from "react";
//styles
import styles from "./styles.module.scss";

interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

const Input: React.FC<IInputProps> = ({
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        onChange(event.target.value)
      }
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
