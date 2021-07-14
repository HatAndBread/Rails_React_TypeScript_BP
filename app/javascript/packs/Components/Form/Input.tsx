import React from "react";
import { NumberLiteralType } from "typescript";
import { useAppContext } from "../../Context";

const Input = ({
  type,
  className,
  tableColumn,
  min,
  max,
  step,
  autoFocus,
  capture,
  multiple,
  minLength,
  maxLength,
  checked,
  disabled,
  value,
  defaultValue,
  onChange,
}: {
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  className?: string;
  tableColumn: string;
  min?: number;
  max?: number;
  step?: number;
  autoFocus?: boolean;
  capture?: "user" | "environment";
  multiple?: boolean;
  minLength?: number;
  maxLength?: number;
  checked?: boolean;
  disabled?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}) => {
  const ctx: { controllerAction: string; modelName: string } =
    useAppContext().controllerData;
  const modelName = ctx.modelName.toLowerCase();

  return (
    <input
      onChange={onChange ? (e) => onChange(e) : undefined}
      type={type}
      className={className ? className : undefined}
      id={`${modelName}_${tableColumn}`}
      name={`${modelName}[${tableColumn}]`}
      min={typeof min === "number" ? `${min}` : undefined}
      max={typeof max === "number" ? `${max}` : undefined}
      step={typeof step === "number" ? `${step}` : undefined}
      maxLength={typeof maxLength === "number" ? maxLength : undefined}
      minLength={typeof minLength === "number" ? minLength : undefined}
      checked={typeof checked === "boolean" ? checked : undefined}
      disabled={typeof disabled === "boolean" ? disabled : undefined}
      value={value ? value : undefined}
      defaultValue={defaultValue ? defaultValue : undefined}
      capture={capture ? capture : undefined}
      multiple={multiple ? multiple : undefined}
      autoFocus={autoFocus ? true : false}></input>
  );
};

export default Input;
