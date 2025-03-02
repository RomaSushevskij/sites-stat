import {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactElement,
} from "react";
import clsx from "clsx";

import s from "./ui-input.module.css";

type DefaultProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type CustomProps = {
  append?: ReactElement;
  prepend?: ReactElement;
  onTextChange?: (value: string) => void;
  onEnter?: () => void;
};

export const UiInput: FC<DefaultProps & CustomProps> = ({
  append,
  prepend,
  className,
  value,
  onTextChange,
  onChange,
  onKeyDown,
  onEnter,
  ...props
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    onTextChange?.(inputValue);
    onChange?.(event);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    onKeyDown?.(e);

    if (e.code === "Enter") {
      onEnter?.();
    }
  };

  return (
    <div className={clsx(className, s.root)}>
      {prepend && <div className={s.prepend}>{prepend}</div>}

      <input
        className={s.input}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...props}
      />

      {append && <div className={s.append}>{append}</div>}
    </div>
  );
};
