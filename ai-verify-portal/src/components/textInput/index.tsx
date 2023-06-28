import React, { ChangeEventHandler } from 'react';
import styles from './styles/textInput.module.css';

type TextInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  maxLength?: number;
  labelSibling?: React.ReactElement;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

function TextInput(props: TextInputProps) {
  const {
    name,
    label,
    placeholder,
    error,
    maxLength,
    value,
    labelSibling,
    onChange,
  } = props;

  return (
    <div className={styles.textInput}>
      <label>
        <div className={styles.label}>
          <div>{label}</div>
          {labelSibling}
        </div>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChange={onChange}
        />
        {Boolean(error) ? (
          <div className={styles.inputError}>{error}</div>
        ) : null}
      </label>
    </div>
  );
}

export { TextInput };
