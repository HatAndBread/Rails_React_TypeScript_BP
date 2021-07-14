import React, { useRef, useState, useEffect } from "react";
import AuthenticityToken from "./AuthenticityToken";
import { useAppContext } from "../../Context";

const Form = ({
  method,
  action,
  className,
  id,
  children,
  onSubmit,
  autoComplete,
}: {
  action: string;
  method?: "GET" | "POST" | "PATCH" | "PUT";
  className?: string;
  id?: string;
  children: JSX.Element | JSX.Element[];
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => any;
  autoComplete?: boolean;
}) => {
  const formRef = useRef<null | HTMLFormElement>(null);
  const controllerAction: string =
    useAppContext().controllerData.controllerAction;
  const [hasFile, setHasFile] = useState(false);
  useEffect(() => {
    if (formRef.current) {
      console.log(formRef.current);
      const children = formRef.current.children;
      for (let i = 0; i < children.length; i++) {
        const child: any = children[i];
        if (child.type && child.type === "file") {
          setHasFile(true);
          break;
        }
      }
    }
  }, [children, formRef]);
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
      autoComplete={autoComplete ? "on" : "off"}
      encType={
        hasFile ? "multipart/form-data" : "application/x-www-form-urlencoded"
      }
      method={getMethod()}
      acceptCharset='UTF-8'
      action={action}
      id={id ? id : ""}
      onSubmit={(e) => (onSubmit ? onSubmit(e) : undefined)}
      className={className ? className : ""}
      ref={formRef}>
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
