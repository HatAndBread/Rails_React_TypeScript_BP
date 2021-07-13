import React from "react";
import AuthenticityToken from "./AuthenticityToken";
import { useAppContext } from "../../Context";

const Form = ({
  method,
  action,
  className,
  id,
  children,
  onSubmit,
}: {
  action: string;
  method?: "GET" | "POST" | "PATCH" | "PUT";
  className?: string;
  id?: string;
  children: JSX.Element | JSX.Element[];
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => any;
}) => {
  const controllerAction: string =
    useAppContext().controllerData.controllerAction;
  const conAction = controllerAction.match(/(?<=#)\S+$/)[0];
  const controller = controllerAction.match(/^\S+(?=#)/)[0];
  const getMethodByAction = () => {
    if (conAction === "new" || conAction === "edit") return "post";
    return "patch";
  };
  const lc = method ? method.toLowerCase() : getMethodByAction();
  const getMethod = () => {
    if (!method) return getMethodByAction();
    if (lc === "get") return lc;
    return "post";
  };
  console.log(getMethod(), lc);
  return (
    <form
      method={getMethod()}
      acceptCharset='UTF-8'
      action={action}
      id={id ? id : ""}
      onSubmit={(e) => (onSubmit ? onSubmit(e) : undefined)}
      className={className ? className : ""}>
      {lc === "patch" || lc === "put" ? (
        <input type='hidden' name='_method' value={lc} />
      ) : (
        <></>
      )}
      <AuthenticityToken />
      {children}
    </form>
  );
};

export default Form;
