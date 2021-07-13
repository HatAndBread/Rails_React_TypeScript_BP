import React from "react";
import { useAppContext } from "../../Context";

const Input = ({
  type,
  className,
  tableColumn,
  min,
  max,
  step,
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
}) => {
  const ctx: { controllerAction: string; modelName: string } =
    useAppContext().controllerData;
  const modelName = ctx.modelName.toLowerCase();

  return (
    <input
      type={type}
      className={className ? className : ""}
      id={`${modelName}_${tableColumn}`}
      name={`${modelName}[${tableColumn}]`}
      min={typeof min === "number" ? `${min}` : undefined}
      max={typeof max === "number" ? `${max}` : undefined}
      step={typeof step === "number" ? `${step}` : undefined}></input>
  );
};

export default Input;
